// review.js
document.addEventListener("DOMContentLoaded", () => {
  const avgRatingEl = document.getElementById("average-rating");
  const ctx = document.getElementById("ratingChart");
  const reviewsList = document.getElementById("reviewsList");
  
  // Get current food ID from URL or data attribute
  const urlParams = new URLSearchParams(window.location.search);
  const foodId = urlParams.get('food') || document.getElementById('reviewForm')?.dataset.foodId;
  
  let reviews = JSON.parse(localStorage.getItem(`reviews_${foodId}`)) || [];

  function getRatingDistribution() {
    const distribution = [0, 0, 0, 0, 0];
    reviews.forEach(r => {
      if (r.rating >= 1 && r.rating <= 5) distribution[r.rating - 1]++;
    });
    return distribution;
  }

  function updateAverageRating() {
    if (reviews.length === 0) {
      if (avgRatingEl) avgRatingEl.textContent = "0.0 ⭐";
      return;
    }
    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    const avg = (total / reviews.length).toFixed(1);
    if (avgRatingEl) avgRatingEl.textContent = `${avg} ⭐`;
  }

  // Translate comment to English using Google Translate API
  async function translateTextToEnglish(text, targetElement) {
    targetElement.textContent = "Translating...";
    try {
      const res = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(text)}`
      );
      const data = await res.json();
      targetElement.textContent = data[0][0][0] || "No translation available";
    } catch (err) {
      targetElement.textContent = "Translation error";
      console.error("Translation failed:", err);
    }
  }

  function renderReviews() {
    if (!reviewsList) return;
    
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
        img.src = review.photo;
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

  // Initialize chart if it exists
  let ratingChart;
  if (ctx) {
    ratingChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
        datasets: [{
          label: "Number of Reviews",
          data: getRatingDistribution(),
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
  }

  // Show login prompt
  // Show login prompt
function showLoginPrompt() {
  // Create modal overlay
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  `;
  
  // Create modal content
  const modal = document.createElement('div');
  modal.style.cssText = `
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    max-width: 400px;
    width: 90%;
    text-align: center;
  `;
  
  modal.innerHTML = `
    <h3 style="margin-top: 0; color: #333;">Login Required</h3>
    <p style="margin-bottom: 20px; color: #666;">You need to be logged in to submit feedback.</p>
    <div style="display: flex; justify-content: center; gap: 15px;">
      <button id="goToLoginBtn" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Go to Login Page
      </button>
      <button id="cancelLoginBtn" style="padding: 10px 20px; background-color: #f44336; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Cancel
      </button>
    </div>
    <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #eee;">
      <p style="font-size: 14px; color: #888;">
        <strong>Storage Information:</strong> Your feedback is stored locally in your browser's storage. 
        Currently storing ${getPendingReviewsCount()} pending review(s).
      </p>
    </div>
  `;
  
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  
  // Add event listeners
  document.getElementById('goToLoginBtn').addEventListener('click', function() {
    // Store the current page URL to return after login
    localStorage.setItem('redirectAfterLogin', window.location.href);
    window.location.href = 'login.html';
  });
  
  document.getElementById('cancelLoginBtn').addEventListener('click', function() {
    document.body.removeChild(overlay);
  });
  
  // Close modal when clicking outside
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
    }
  });
}

  // Handle review form submission
  const reviewForm = document.getElementById("reviewForm");
  if (reviewForm) {
    reviewForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
      const rating = parseInt(document.querySelector('input[name="rating"]:checked')?.value);
      const comment = document.getElementById("comment").value.trim();
      const photoInput = document.getElementById("photoUpload");
      const photo = photoInput.files[0] || null;
      
      if (!rating || !comment) {
        alert("Please complete all fields!");
        return;
      }
      
      // If user is not logged in, show login prompt
      if (!loggedInUser) {
        // Store the review data temporarily
        const reviewData = {
          foodId: foodId,
          rating: rating,
          comment: comment,
          photo: photo ? URL.createObjectURL(photo) : null,
          timestamp: new Date().toISOString()
        };
        
        // Store the review data
        let pendingReviews = JSON.parse(localStorage.getItem('pendingReviews')) || [];
        pendingReviews.push(reviewData);
        localStorage.setItem('pendingReviews', JSON.stringify(pendingReviews));
        
        // Show login prompt
        showLoginPrompt();
        return;
      }
      
      // If user is logged in, process the review normally
      const username = loggedInUser.username;
      
      // Convert photo to data URL if exists
      let photoDataUrl = null;
      if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
          photoDataUrl = e.target.result;
          addReviewToStorage(username, rating, comment, photoDataUrl);
        };
        reader.readAsDataURL(photo);
      } else {
        addReviewToStorage(username, rating, comment, null);
      }
      
      this.reset();
    });
  }
  
  function addReviewToStorage(username, rating, comment, photo) {
    reviews.push({ username, rating, comment, photo });
    localStorage.setItem(`reviews_${foodId}`, JSON.stringify(reviews));
    
    if (ratingChart) {
      ratingChart.data.datasets[0].data = getRatingDistribution();
      ratingChart.update();
    }
    
    updateAverageRating();
    renderReviews();
  }

  // Process any pending reviews after login
  function processPendingReviews() {
    const pendingReviews = JSON.parse(localStorage.getItem('pendingReviews')) || [];
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
    
    if (loggedInUser && pendingReviews.length > 0) {
      const username = loggedInUser.username;
      
      pendingReviews.forEach(review => {
        if (review.foodId === foodId) {
          reviews.push({
            username: username,
            rating: review.rating,
            comment: review.comment,
            photo: review.photo
          });
        }
      });
      
      // Remove processed reviews
      const remainingReviews = pendingReviews.filter(review => review.foodId !== foodId);
      localStorage.setItem('pendingReviews', JSON.stringify(remainingReviews));
      
      // Update storage and UI
      localStorage.setItem(`reviews_${foodId}`, JSON.stringify(reviews));
      
      if (ratingChart) {
        ratingChart.data.datasets[0].data = getRatingDistribution();
        ratingChart.update();
      }
      
      updateAverageRating();
      renderReviews();
    }
  }

  function getPendingReviewsCount() {
    const pendingReviews = JSON.parse(localStorage.getItem('pendingReviews')) || [];
    return pendingReviews.length;
  }

  // Initialize on page load
  updateAverageRating();
  renderReviews();
  processPendingReviews();

  // Star rating hover effect
  const stars = document.querySelectorAll('input[name="rating"]');
  stars.forEach(star => {
    star.addEventListener('mouseover', () => { 
      if (avgRatingEl) avgRatingEl.textContent = `${star.value} ⭐`; 
    });
    star.addEventListener('mouseout', () => { updateAverageRating(); });
  });
});