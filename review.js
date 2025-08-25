document.addEventListener("DOMContentLoaded", () => {
  const avgRatingEl = document.getElementById("average-rating");
  const ctx = document.getElementById("ratingChart").getContext("2d");
  const reviewsList = document.getElementById("reviewsList");

  let reviews = [];

  function getRatingDistribution() {
    const distribution = [0, 0, 0, 0, 0];
    reviews.forEach(r => {
      if (r.rating >= 1 && r.rating <= 5) distribution[r.rating - 1]++;
    });
    return distribution;
  }

  function updateAverageRating() {
    if (reviews.length === 0) {
      avgRatingEl.textContent = "0.0 ⭐";
      return;
    }
    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    const avg = (total / reviews.length).toFixed(1);
    avgRatingEl.textContent = `${avg} ⭐`;
  }

  // Translate comment to English using AllOrigins proxy
  // Translate comment to English using Google Translate unofficial API
async function translateTextToEnglish(text, targetElement) {
  targetElement.textContent = "Translating...";
  try {
    const res = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(text)}`
    );
    const data = await res.json();
    // data[0][0][0] contains the translated text
    targetElement.textContent = data[0][0][0] || "No translation available";
  } catch (err) {
    targetElement.textContent = "Translation error";
    console.error("Translation failed:", err);
  }
}


  function renderReviews() {
    reviewsList.innerHTML = "";
    reviews.forEach(review => {
      const div = document.createElement("div");
      div.className = "review";

      // Comment container
      div.innerHTML = `
        <strong>${review.username}</strong> - ${review.rating} ⭐
        <p class="comment">${review.comment}</p>
        <button class="translateBtn">Translate to English</button>
      `;

      // Add photo if available
      if (review.photo) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(review.photo);
        img.style.maxWidth = "100px";
        img.style.display = "block";
        div.appendChild(img);
      }

      // Translate button
      const translateBtn = div.querySelector(".translateBtn");
      const commentEl = div.querySelector(".comment");
      translateBtn.addEventListener("click", () => translateTextToEnglish(review.comment, commentEl));

      reviewsList.appendChild(div);
    });
  }

  const ratingChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
      datasets: [{
        label: "Number of Reviews",
        data: [0, 0, 0, 0, 0],
        backgroundColor: ["#f44336","#ffc107","#cddc39","#8bc34a","#4caf50"],
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      scales: { x: { beginAtZero: true, precision: 0, ticks: { stepSize: 1 } } },
      plugins: { legend: { display: false } }
    }
  });

  document.getElementById("reviewForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = window.loggedInUser || "Guest";
    const rating = parseInt(document.querySelector('input[name="rating"]:checked')?.value);
    const comment = document.getElementById("comment").value.trim();
    const photo = document.getElementById("photoUpload").files[0] || null;

    if (!rating || !comment) {
      alert("Please complete all fields!");
      return;
    }

    reviews.push({ username, rating, comment, photo });

    ratingChart.data.datasets[0].data = getRatingDistribution();
    ratingChart.update();
    updateAverageRating();
    renderReviews();
    this.reset();
  });

  const stars = document.querySelectorAll('input[name="rating"]');
  stars.forEach(star => {
    star.addEventListener('mouseover', () => { avgRatingEl.textContent = `${star.value} ⭐`; });
    star.addEventListener('mouseout', () => { updateAverageRating(); });
  });

  updateAverageRating();
});
