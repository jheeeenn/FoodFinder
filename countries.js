 // Food data
    const foodData = {
      /* US Food Data */
      'corndog': {
        name: 'Corn Dog',
        country: 'United States',
        flag: 'https://flagcdn.com/w320/us.png',
        image: 'multimedia_content/images/corndog.jpg ',
        category: 'Snack',
        description: "The corn dog is a popular American snack that originated in the early 20th century. It consists of a hot dog sausage coated in a thick layer of cornmeal batter, which is then deep-fried to a golden brown. The exact origins of the corn dog are debated, but it is widely believed to have been invented at state fairs and carnivals in the United States during the 1920s and 1930s. The corn dog quickly gained popularity due to its convenient handheld format and delicious combination of savory sausage and crispy cornmeal coating. Today, corn dogs are a beloved treat enjoyed at fairs, sporting events, and fast-food establishments across the country.",
        ingredients: [
          { name: 'Hot Dog', icon: 'multimedia_content/images/hotdog.png' },
          { name: 'Cornmeal', icon: 'multimedia_content/images/cornmeal.jpg' },
          { name: 'Flour', icon: 'multimedia_content/images/flour.png' },
          { name: 'Milk', icon: 'multimedia_content/images/milk.png' },
          { name: 'Eggs', icon: 'multimedia_content/images/egg.png' },
          { name: 'Baking Soda', icon: 'multimedia_content/images/bakingsoda.jpg' },
          { name: 'Salt', icon: 'multimedia_content/images/salt.png' },
          { name: 'Oil', icon: 'multimedia_content/images/oil.png' },
          { name: 'Sugar', icon: 'multimedia_content/images/sugar.jpg' }
        ],
        recipe: [
          'Preheat oil in a deep fryer or large pot to 175°C (350°F).',
          'In a mixing bowl, combine cornmeal, flour, sugar, baking powder, and salt.',
          'In a separate bowl, whisk together milk and eggs.',
          'Pour the wet ingredients into the dry ingredients and mix until just combined. The batter should be thick.',
          'Insert wooden sticks into each hot dog, leaving enough of the stick exposed to hold onto.',
          'Dip each hot dog into the batter, ensuring it is fully coated. Let any excess batter drip off.',
          'Carefully place the coated hot dogs into the hot oil and fry until golden brown, about 3-5 minutes.',
          'Remove the corn dogs from the oil and drain on paper towels.',
          'Serve hot with mustard, ketchup, or your favorite dipping sauce. Enjoy your homemade corn dogs!'
        ]
      },

      /* German Food Data */
      'pretzel': {
        name: 'Pretzel',
        country: 'Germany',
        flag: 'https://flagcdn.com/w320/de.png',
        image: 'multimedia_content/images/pretzel.jpg ', 
        category: 'Bread',
        description: "Pretzels have a long history in Europe, with origins believed to date back to the Early Middle Ages. They were created by monks as a reward for children who learned their prayers, symbolizing folded arms in devotion. In Germany, pretzels became an iconic street food, especially in the southern regions such as Bavaria and Swabia. Today, pretzels are enjoyed worldwide, often sold fresh by street vendors or in bakeries. Their characteristic knot shape, chewy texture, and crunchy salted crust make them a beloved snack and a cultural symbol of Germany.",

        ingredients: [
          { name: 'Flour', icon: 'multimedia_content/images/flour.png' },
          { name: 'Yeast', icon: 'multimedia_content/images/yeast.jpg' },
          { name: 'Water', icon: 'multimedia_content/images/water.jpg' },
          { name: 'Salt', icon: 'multimedia_content/images/salt.png' },
          { name: 'Butter', icon: 'multimedia_content/images/butter.jpg' },
          { name: 'Baking Soda', icon: 'multimedia_content/images/bakingsoda.jpg' }
        ],
        recipe: [
          'In a large bowl, combine warm water, sugar, and yeast. Let it sit for 5-10 minutes until frothy.',
          'Add flour, salt, and melted butter to the yeast mixture. Knead the dough until smooth and elastic, about 5-7 minutes.',
          'Place the dough in a greased bowl, cover with a damp cloth, and let it rise in a warm place for about 1 hour or until doubled in size.',
          'Preheat the oven to 230°C (450°F). Line a baking sheet with parchment paper.',
          'Divide the dough into equal portions and roll each portion into a long rope. Shape each rope into a pretzel shape.',
          'Bring a large pot of water to a boil and add baking soda. Boil each pretzel for about 30 seconds on each side, then remove with a slotted spoon and place on the prepared baking sheet.',
          'Brush the pretzels with beaten egg and sprinkle with coarse salt.',
          'Bake in the preheated oven for 12-15 minutes or until golden brown.',
          'Remove from the oven and let cool slightly before serving. Enjoy your homemade pretzels!'
        ]
      },

      /* Thailand Food Data */
      'pad-thai': {
        name: 'Pad Thai',
        country: 'Thailand',
        flag: 'https://flagcdn.com/w320/th.png',
        image: 'multimedia_content/images/padthai.png ', 
        category: 'Noodle',
        description: 'Pad Thai originated in the mid-20th century during a period of national reform in Thailand. It was promoted as a national dish to encourage rice noodle consumption and quickly became popular as affordable street food. Pad Thai is a classic Thai stir-fried noodle dish with eggs, tofu, tamarind sauce, peanuts, and shrimp or chicken. Often served with lime wedges and fresh bean sprouts, this street food favorite is flavorful, tangy, and slightly sweet.',
        ingredients: [
          { name: 'Chicken', icon: 'multimedia_content/images/chicken.png' },
          { name: 'Shrimp', icon: 'multimedia_content/images/shrimp.png' },
          { name: 'Bean Sprouts', icon: 'multimedia_content/images/bean.png' },
          { name: 'Garlic', icon: 'multimedia_content/images/garlic.png' },
          { name: 'Noodle', icon: 'multimedia_content/images/noodle.png' },
          { name: 'Peanut', icon: 'multimedia_content/images/peanut.png' },
          { name: 'Tamarind', icon: 'multimedia_content/images/tamarind.png' },
          { name: 'Tofu', icon: 'multimedia_content/images/tofu.png' },
          { name: 'Onion', icon: 'multimedia_content/images/onion.png' },
          { name: 'Eggs', icon: 'multimedia_content/images/egg.png' },
          { name: 'Lime', icon: 'multimedia_content/images/lime.png' },
          { name: 'Chilli', icon: 'multimedia_content/images/chilli.png' },
          { name: 'Oil', icon: 'multimedia_content/images/oil.png' },
          { name: 'Brown Sugar', icon: 'multimedia_content/images/brownsugar.png' },
          { name: 'Fish Sauce', icon: 'multimedia_content/images/fishsauce.png' }
        ],
        recipe: [
          'Place noodles in a large bowl, pour over boiling water. Soak 5 minutes, then drain.',
          'Mix Sauce: tamarind puree, brown sugar, fish sauce, oyster sauce.',
          'Heat oil in a pan over high heat, add garlic and onion 🧅, cook 30s.',
          'Add chicken, cook 1½ mins, push aside. Pour in eggs 🥚, scramble, then mix with chicken.',
          'Add bean sprouts, tofu, noodles, then pour in Sauce. Toss 1½ mins until absorbed.',
          'Add garlic chives and half the peanuts 🥜. Toss, remove from heat.',
          'Serve immediately with remaining peanuts, lime wedges, chilli 🌶️, and extra bean sprouts.'
        ]
      },
      'tom-yum-goong': {
        name: 'Tom Yum Goong',
        country: 'Thailand',
        flag: 'https://flagcdn.com/w320/th.png',
        image: 'multimedia_content/images/tomyum.png',
        category: 'Soup',
        description: 'Tom Yum Goong is a hot and sour Thai soup, typically cooked with shrimp. It is flavored with fragrant herbs like lemongrass, kaffir lime leaves, galangal, and chili peppers. This iconic Thai dish is known for its bold, refreshing flavors.',
        ingredients: [
          { name: 'Shrimp', icon: 'multimedia_content/images/shrimp.png' },
          { name: 'Lemongrass', icon: 'multimedia_content/images/lemongrass.png' },
          { name: 'Kaffir Lime', icon: 'multimedia_content/images/kaffirlime.png' },
          { name: 'Galangal', icon: 'multimedia_content/images/galangal.png' },
          { name: 'Chilli', icon: 'multimedia_content/images/chilli.png' },
          { name: 'Mushroom', icon: 'multimedia_content/images/mushroom.png' },
          { name: 'Lime', icon: 'multimedia_content/images/lime.png' },
          { name: 'Fish Sauce', icon: 'multimedia_content/images/fishsauce.png' }
        ],
        recipe: [
          'Bring water to a boil in a pot, add lemongrass, galangal, and kaffir lime leaves.',
          'Add mushrooms and cook for 2 minutes.',
          'Add shrimp and cook until they turn pink.',
          'Add fish sauce, lime juice, and chili paste to taste.',
          'Garnish with fresh cilantro and serve hot.'
        ]
      },
      'green-curry': {
        name: 'Green Curry',
        country: 'Thailand',
        flag: 'https://flagcdn.com/w320/th.png',
        image: 'multimedia_content/images/greencurry.png',
        category: 'Curry',
        description: 'Green Curry is one of the most popular Thai curries, known for its spiciness and vibrant green color from green chilies. It is made with coconut milk, meat, Thai eggplant, and fresh basil.',
        ingredients: [
          { name: 'Coconut Milk', icon: 'multimedia_content/images/coconutmilk.png' },
          { name: 'Green Chilli', icon: 'multimedia_content/images/greenchilli.png' },
          { name: 'Basil', icon: 'multimedia_content/images/basil.png' },
          { name: 'Eggplant', icon: 'multimedia_content/images/eggplant.png' },
          { name: 'Chicken', icon: 'multimedia_content/images/chicken.png' },
          { name: 'Fish Sauce', icon: 'multimedia_content/images/fishsauce.png' },
          { name: 'Garlic', icon: 'multimedia_content/images/garlic.png' },
          { name: 'Shallot', icon: 'multimedia_content/images/shallot.png' }
        ],
        recipe: [
          'Heat a portion of coconut milk in a wok until it separates.',
          'Add green curry paste and fry until fragrant.',
          'Add meat and cook until done.',
          'Add remaining coconut milk and bring to a boil.',
          'Add eggplant and other vegetables, simmer until tender.',
          'Season with fish sauce and palm sugar.',
          'Add basil leaves just before serving.'
        ]
      },
      'som-tam': {
        name: 'Som Tam',
        country: 'Thailand',
        flag: 'https://flagcdn.com/w320/th.png',
        image: 'multimedia_content/images/somtam.png',
        category: 'Salad',
        description: 'Som Tam is a spicy green papaya salad that combines all four tastes - sour, chili-hot, sweet, and salty. It is a popular street food dish throughout Thailand and Southeast Asia.',
        ingredients: [
          { name: 'Papaya', icon: 'multimedia_content/images/papaya.png' },
          { name: 'Garlic', icon: 'multimedia_content/images/garlic.png' },
          { name: 'Chilli', icon: 'multimedia_content/images/chilli.png' },
          { name: 'Lime', icon: 'multimedia_content/images/lime.png' },
          { name: 'Tomato', icon: 'multimedia_content/images/tomato.png' },
          { name: 'Peanut', icon: 'multimedia_content/images/peanut.png' },
          { name: 'Fish Sauce', icon: 'multimedia_content/images/fishsauce.png' },
          { name: 'Palm Sugar', icon: 'multimedia_content/images/palmSugar.png' }
        ],
        recipe: [
          'Peel and shred green papaya into thin strips.',
          'Pound garlic and chilies in a mortar to release flavors.',
          'Add long beans and tomatoes, pound lightly.',
          'Add papaya, pound to combine and soften slightly.',
          'Add fish sauce, lime juice, and palm sugar, mix well.',
          'Adjust seasoning to balance sweet, sour, salty, and spicy.',
          'Top with peanuts and serve with sticky rice.'
        ]
      },
      'mango-sticky-rice': {
        name: 'Mango Sticky Rice',
        country: 'Thailand',
        flag: 'https://flagcdn.com/w320/th.png',
        image: 'multimedia_content/images/mangosticky.png',
        category: 'Dessert',
        description: 'Mango Sticky Rice is a traditional Thai dessert made with glutinous rice, fresh mango, and coconut milk. It is sweet, creamy, and a perfect end to any Thai meal.',
        ingredients: [
          { name: 'Mango', icon: 'multimedia_content/images/mango.png' },
          { name: 'Rice', icon: 'multimedia_content/images/rice.png' },
          { name: 'Coconut Milk', icon: 'multimedia_content/images/coconutmilk.png' },
          { name: 'Sugar', icon: 'multimedia_content/images/sugar.png' },
          { name: 'Salt', icon: 'multimedia_content/images/salt.png' }
        ],
        recipe: [
          'Soak glutinous rice for at least 4 hours or overnight.',
          'Steam the rice for 20-25 minutes until cooked.',
          'Heat coconut milk with sugar and salt until sugar dissolves.',
          'Pour half of the coconut mixture over the cooked rice and let it absorb for 30 minutes.',
          'Slice mango and arrange alongside the rice.',
          'Drizzle with remaining coconut sauce before serving.'
        ]
      },
      'satay': {
        name: 'Satay',
        country: 'Thailand',
        flag: 'https://flagcdn.com/w320/th.png',
        image: 'multimedia_content/images/satay.png',
        category: 'Grilled',
        description: 'Satay is a popular Thai street food consisting of marinated, skewered, and grilled meat served with a spicy peanut sauce. It is often made with chicken, beef, or pork.',
        ingredients: [
          { name: 'Chicken', icon: 'multimedia_content/images/chicken.png' },
          { name: 'Turmeric', icon: 'multimedia_content/images/turmeric.png' },
          { name: 'Lemongrass', icon: 'multimedia_content/images/lemongrass.png' },
          { name: 'Peanut', icon: 'multimedia_content/images/peanut.png' },
          { name: 'Garlic', icon: 'multimedia_content/images/garlic.png' },
          { name: 'Cumin', icon: 'multimedia_content/images/cumin.png' },
          { name: 'Coriander', icon: 'multimedia_content/images/coriander.png' }
        ],
        recipe: [
          'Cut meat into thin strips and thread onto skewers.',
          'Prepare marinade with turmeric, lemongrass, garlic, and spices.',
          'Marinate meat for at least 2 hours or overnight.',
          'Grill satay until cooked through and slightly charred.',
          'Serve with peanut sauce and cucumber relish.'
        ]
      },
      'massaman-curry': {
        name: 'Massaman Curry',
        country: 'Thailand',
        flag: 'https://flagcdn.com/w320/th.png',
        image: 'multimedia_content/images/massaman.png',
        category: 'Curry',
        description: 'Massaman Curry is a rich, flavorful Thai curry with Muslim origins. It is milder than other Thai curries and features spices like cardamom, cinnamon, and star anise.',
        ingredients: [
          { name: 'Beef', icon: 'multimedia_content/images/beef.png' },
          { name: 'Potato', icon: 'multimedia_content/images/potato.png' },
          { name: 'Onion', icon: 'multimedia_content/images/onion.png' },
          { name: 'Peanut', icon: 'multimedia_content/images/peanut.png' },
          { name: 'Cardamom', icon: 'multimedia_content/images/cardamom.png' },
          { name: 'Cinnamon', icon: 'multimedia_content/images/cinnamon.png' },
          { name: 'Coconut Milk', icon: 'multimedia_content/images/coconutmilk.png' },
          { name: 'Tamarind', icon: 'multimedia_content/images/tamarind.png' }
        ],
        recipe: [
          'Heat oil in a pot and fry massaman curry paste until fragrant.',
          'Add beef and cook until browned on all sides.',
          'Add coconut milk and bring to a simmer.',
          'Add potatoes, onions, and whole spices.',
          'Simmer until beef is tender and potatoes are cooked.',
          'Season with fish sauce, palm sugar, and tamarind paste.',
          'Garnish with roasted peanuts before serving.'
        ]
      }
    };

    // Review system
    let reviews = {};
    let ratingChart = null;

    // Initialize reviews for each food item
    Object.keys(foodData).forEach(foodId => {
      reviews[foodId] = [];
    });

    // Flip card function
    function flipCard(card) {
      card.classList.toggle('flipped');
    }

    // Show food detail modal
    function showFoodDetail(foodId) {
      const food = foodData[foodId];
      if (!food) return;
      
      document.getElementById('modalFoodName').textContent = food.name;
      document.getElementById('modalFoodFlag').src = food.flag;
      document.getElementById('modalFoodCountry').textContent = food.country;
      document.getElementById('modalFoodImage').src = food.image;
      document.getElementById('modalDescription').textContent = food.description;
      
      // Populate ingredients
      const ingredientsContainer = document.getElementById('modalIngredients');
      ingredientsContainer.innerHTML = '';
      food.ingredients.forEach(ingredient => {
        const ingredientItem = document.createElement('div');
        ingredientItem.className = 'icon-item';
        ingredientItem.innerHTML = `
          <img src="${ingredient.icon}" alt="${ingredient.name}">
          <span>${ingredient.name}</span>
        `;
        ingredientsContainer.appendChild(ingredientItem);
      });
      
      // Populate recipe
      const recipeContainer = document.getElementById('modalRecipe');
      recipeContainer.innerHTML = '';
      food.recipe.forEach((step, index) => {
        const stepElement = document.createElement('p');
        stepElement.innerHTML = `<span class="step-number">${index + 1}</span> ${step}`;
        recipeContainer.appendChild(stepElement);
      });
      
      // Initialize reviews for this food
      initReviews(foodId);
      
      // Show modal
      document.getElementById('foodModal').style.display = 'block';
    }

    // Close modal and flip back all cards
    function closeModal() {
      document.getElementById('foodModal').style.display = 'none';
      
      // Flip back all cards to front
      const allCards = document.querySelectorAll('.food-card');
      allCards.forEach(card => {
        card.classList.remove('flipped');
      });
    }

    // Close modal if clicked outside
    window.onclick = function(event) {
      const modal = document.getElementById('foodModal');
      if (event.target === modal) {
        closeModal();
      }
    };

    // Search function
    function searchFood() {
      const input = document.getElementById('searchBar').value.toLowerCase();
      const cards = document.querySelectorAll('.food-card-front h5');
      for (let i = 0; i < cards.length; i++) {
        const cardTitle = cards[i].textContent.toLowerCase();
        const cardContainer = cards[i].closest('.food-card-container');
        cardContainer.style.display = cardTitle.includes(input) ? "block" : "none";
      }
    }

    // API function
    $("#getFoodBtn").click(function() {
      $.get("https://www.themealdb.com/api/json/v1/1/random.php", function(data) {
        $("#foodImage").attr("src", data.meals[0].strMealThumb);
      });
    });

    // Welcome message
    if(!localStorage.getItem("visitedThailand")) {
      alert("Welcome to Thailand Street Food Page!");
      localStorage.setItem("visitedThailand", "true");
    }

    if(!sessionStorage.getItem("sessionVisit")) {
      console.log("New session started");
      sessionStorage.setItem("sessionVisit", "true");
    }

    document.cookie = "username=FoodLover; path=/;";

    // Initialize reviews for a specific food
    function initReviews(foodId) {
      const avgRatingEl = document.getElementById("average-rating");
      const ctx = document.getElementById("ratingChart");
      const reviewsList = document.getElementById("reviewsList");
      const reviewForm = document.getElementById("reviewForm");
      
      // Destroy previous chart if it exists
      if (ratingChart) {
        ratingChart.destroy();
      }
      
      // Create new chart
      ratingChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
          datasets: [{
            label: "Number of Reviews",
            data: getRatingDistribution(foodId),
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
      
      // Update average rating
      updateAverageRating(foodId, avgRatingEl);
      
      // Render reviews
      renderReviews(foodId, reviewsList);
      
      // Set up form submission
      reviewForm.onsubmit = function(e) {
        e.preventDefault();
        const username = window.loggedInUser || "Guest";
        const rating = parseInt(document.querySelector('input[name="rating"]:checked')?.value);
        const comment = document.getElementById("comment").value.trim();
        const photo = document.getElementById("photoUpload").files[0] || null;

        if (!rating || !comment) {
          alert("Please complete all fields!");
          return;
        }

        reviews[foodId].push({ username, rating, comment, photo });

        ratingChart.data.datasets[0].data = getRatingDistribution(foodId);
        ratingChart.update();
        updateAverageRating(foodId, avgRatingEl);
        renderReviews(foodId, reviewsList);
        this.reset();
      };
      
      // Star hover effect
      const stars = document.querySelectorAll('input[name="rating"]');
      stars.forEach(star => {
        star.addEventListener('mouseover', () => { 
          avgRatingEl.textContent = `${star.value} ⭐`; 
        });
        star.addEventListener('mouseout', () => { 
          updateAverageRating(foodId, avgRatingEl); 
        });
      });
    }

    // Get rating distribution for a food
    function getRatingDistribution(foodId) {
      const distribution = [0, 0, 0, 0, 0];
      reviews[foodId].forEach(r => {
        if (r.rating >= 1 && r.rating <= 5) distribution[r.rating - 1]++;
      });
      return distribution;
    }

    // Update average rating display
    function updateAverageRating(foodId, avgRatingEl) {
      if (reviews[foodId].length === 0) {
        avgRatingEl.textContent = "0.0";
        return;
      }
      const total = reviews[foodId].reduce((sum, r) => sum + r.rating, 0);
      const avg = (total / reviews[foodId].length).toFixed(1);
      avgRatingEl.textContent = `${avg}`;
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

    // Render reviews for a food
    function renderReviews(foodId, reviewsList) {
      reviewsList.innerHTML = "";
      reviews[foodId].forEach(review => {
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


    