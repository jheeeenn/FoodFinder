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