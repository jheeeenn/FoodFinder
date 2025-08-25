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