const header = document.querySelector('.header');

// Array to store header background images
const headerImages = [
  "multimedia_content/images/main_background_1.jpg",
  "multimedia_content/images/main_background_4.jpg",
  "multimedia_content/images/main_background_3.jpg",
  "multimedia_content/images/main_background_2.jpg"
];
let currentIndex = 0;

function changeHeaderImage() {
  header.style.backgroundImage = `url('${headerImages[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % headerImages.length;
}

// Change image every 10 seconds
setInterval(changeHeaderImage, 10000);

changeHeaderImage();

function searchCountries() {

  const input = document.getElementById('searchBar').value.toLowerCase();
  const cards = document.getElementsByClassName('countries-card');
     
 for (let i = 0; i < cards.length; i++) {
    const country = cards[i].getElementsByTagName('span')[0].innerText.toLowerCase();
    const foodElement = cards[i].getElementsByClassName('food-keywords')[0];
    const foods = foodElement ? foodElement.innerText.toLowerCase() : "";

    if (country.includes(input) || foods.includes(input)) {
      cards[i].parentElement.style.display = "flex"; 
    } else {
      cards[i].parentElement.style.display = "none";
    }
  }
}
// functions for cookie getter and setter
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  const expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let c of ca) {
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}





// Cookie Consent Banner
document.addEventListener("DOMContentLoaded", function() {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("acceptCookies");

  // check if cookies have been accepted
  if (!getCookie("cookiesAccepted")) {
    cookieBanner.style.display = "block";
  }
  else {
    cookieBanner.style.display = "none";
  }

  acceptBtn.addEventListener("click", function() {
    setCookie("cookiesAccepted", "true",30);
    cookieBanner.style.display = "none";
  });
});




const countryPages = {
  "United States": "us.html",
  "Germany": "germany.html",
  "Thailand": "thailand.html",
  "Japan": "japan.html",
  "China": "china.html",
  "Turkey": "turkey.html",
  "Malaysia": "malaysia.html",
  "Kiribati": "kiribati.html"
};
// display Featured Foods
function displayFeaturedFoods() {
  const foodList = document.getElementById("food-list");
  foodList.innerHTML = "";

  const foodKeys = Object.keys(foodData);
  const shuffled = foodKeys.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  selected.forEach(foodKey => {
    const food = foodData[foodKey];
    const countryPage = countryPages[food.country] || "index.html";

    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
      <a href="${countryPage}" class="text-decoration-none text-dark">
        <div class="card food-card shadow-sm h-100">
          <img src="${food.image}" class="card-img-top" alt="${food.name}">
          <div class="food-card-body">
            <h5 class="card-title">${food.name}</h5>
            <p>${food.description.substring(0, 80)}...</p>
            <p class="text-muted"><strong>${food.country}</strong></p>
          </div>
        </div>
      </a>
    `;

    foodList.appendChild(col);
  });
}

// call when page is loaded
document.addEventListener("DOMContentLoaded", function() {
  displayFeaturedFoods();

  // refresh button handler
  document.getElementById("refreshFoods").addEventListener("click", function() {
    displayFeaturedFoods();
  });
});


// Scroll-triggered animations
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, { threshold: 0.2 }); // 20% visible triggers

  // Function to observe highlight & food cards
  function observeCards() {
    document.querySelectorAll(".highlight-card, .food-card").forEach(el => {
      if (!el.classList.contains("visible")) {
        observer.observe(el);
      }
    });
  }

  // Initial observation
  observeCards();

  // 🔄 Re-run after refresh button generates new food cards
  const refreshBtn = document.getElementById("refreshFoods");
  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      setTimeout(observeCards, 100); 
      // small delay so new DOM elements exist before observing
    });
  }
});
