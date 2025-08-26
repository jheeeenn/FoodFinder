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

      'chicagodog': {
        name: 'Chicago-Style Hot Dog',
        country: 'United States',
        flag: 'https://flagcdn.com/w320/us.png',
        image: 'multimedia_content/images/chicagohotdog.jpg',
        category: 'Snack',
        description: "The Chicago-style hot dog is an iconic American street food that originated during the Great Depression as an affordable, filling meal. Served on a steamed poppy seed bun, it features an all-beef hot dog topped with yellow mustard, neon-green relish, chopped onions, tomato wedges, a pickle spear, spicy sport peppers, and a sprinkle of celery salt—never ketchup. Known as being 'dragged through the garden,' it reflects Chicago’s immigrant influences and remains a beloved symbol of the city’s food culture.",

        ingredients: [
          { name: 'All-Beef Hot Dog', icon: 'multimedia_content/images/hotdog.png' },
          { name: 'Poppy Seed Bun', icon: 'multimedia_content/images/hotdogbun.jpg' },
          { name: 'Yellow Mustard', icon: 'multimedia_content/images/mustard.png' },
          { name: 'Neon-Green Relish', icon: 'multimedia_content/images/relish.jpg' },
          { name: 'Chopped Onion', icon: 'multimedia_content/images/onion.png' },
          { name: 'Tomato Wedges', icon: 'multimedia_content/images/tomato.png' },
          { name: 'Pickle Spear', icon: 'multimedia_content/images/pickle.png' },
          { name: 'Sport Peppers', icon: 'multimedia_content/images/pepper.png' },
          { name: 'Celery Salt', icon: 'multimedia_content/images/salt.png' }
        ],
        recipe: [
          'Steam or grill an all-beef hot dog until heated through.',
          'Place it inside a freshly steamed poppy seed bun.',
          'Top with yellow mustard, neon-green relish, and chopped onions.',
          'Add tomato wedges on one side and a pickle spear on the other.',
          'Place two spicy sport peppers on top.',
          'Finish with a light sprinkle of celery salt.',
          'Serve hot — and remember, never add ketchup!'
        ]
      },

      'nypizza': {
        name: 'New York-Style Pizza',
        country: 'United States',
        flag: 'https://flagcdn.com/w320/us.png',
        image: 'multimedia_content/images/newyorkstylepizza.jpg',
        category: 'Pizza',
        description: "New York-style pizza is famous for its thin, foldable crust with a crisp edge and chewy base. Typically topped with tomato sauce, mozzarella, and oregano, it’s baked in high-heat ovens and served by the slice. Beloved for its convenience and flavor, it has become a global symbol of New York City street food.",
        
        ingredients: [
          { name: 'Pizza Dough', icon: 'multimedia_content/images/flour.png' },
          { name: 'Tomato Sauce', icon: 'multimedia_content/images/tomato.png' },
          { name: 'Mozzarella Cheese', icon: 'multimedia_content/images/cheese.png' },
          { name: 'Olive Oil', icon: 'multimedia_content/images/oliveoil.png' },
          { name: 'Oregano', icon: 'multimedia_content/images/oregano.png' },
        ],
        recipe: [
          'Prepare pizza dough and stretch into a thin, round base.',
          'Spread tomato sauce evenly across the dough.',
          'Top generously with mozzarella and a drizzle of olive oil.',
          'Bake in a high-heat oven until crust is crisp and cheese is bubbling.',
          'Sprinkle oregano before serving.',
          'Slice large portions that can be folded and eaten on the go.'
        ]
      },

      'texasbrisket': {
        name: 'Texas BBQ Brisket Sandwich',
        country: 'United States',
        flag: 'https://flagcdn.com/w320/us.png',
        image: 'multimedia_content/images/Brisketsandwich.jpg',
        category: 'BBQ Sandwich',
        description: "A Texas BBQ brisket sandwich is made with smoky, slow-smoked beef brisket served on a soft bun, usually topped with tangy BBQ sauce, onions, and pickles. The brisket is cooked low and slow over wood for hours, resulting in tender, flavorful meat that captures the essence of Texas barbecue tradition.",

        ingredients: [
          { name: 'Beef Brisket', icon: 'multimedia_content/images/meat.png' },
          { name: 'Bun', icon: 'multimedia_content/images/bread.png' },
          { name: 'BBQ Sauce', icon: 'multimedia_content/images/sauce.png' },
          { name: 'Onions', icon: 'multimedia_content/images/onion.png' },
          { name: 'Pickles', icon: 'multimedia_content/images/pickle.png' },
        ],
        recipe: [
          'Season the brisket with a dry rub of salt, pepper, and spices.',
          'Smoke the brisket low and slow over wood for 10–12 hours until tender.',
          'Slice the brisket thinly across the grain.',
          'Place brisket slices on a soft bun.',
          'Top with BBQ sauce, onions, and pickles.',
          'Serve hot as a hearty Texas street food classic.'
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

      'bratwurst': {
        name: 'Bratwurst',
        country: 'Germany',
        flag: 'https://flagcdn.com/w320/de.png',
        image: 'multimedia_content/images/bratwurst.jpg',
        category: 'Sausage',
        description: "Bratwurst is a traditional German sausage made from pork, beef, or veal, seasoned with spices like nutmeg, marjoram, and ginger. It is usually grilled and served in a crusty bun with mustard or alongside sauerkraut, making it one of the most iconic German street foods.",
        
        ingredients: [
          { name: 'Pork or Beef', icon: 'multimedia_content/images/meat.png' },
          { name: 'Bun', icon: 'multimedia_content/images/bread.png' },
          { name: 'Mustard', icon: 'multimedia_content/images/mustard.png' },
          { name: 'Sauerkraut (optional)', icon: 'multimedia_content/images/cabbage.png' }
        ],
        recipe: [
          'Prepare sausage mixture with pork, beef, and spices.',
          'Stuff mixture into natural casings.',
          'Grill sausages until browned and cooked through.',
          'Serve in a bun with mustard or with sauerkraut.'
        ]
      },

        'currywurst': {
        name: 'Currywurst',
        country: 'Germany',
        flag: 'https://flagcdn.com/w320/de.png',
        image: 'multimedia_content/images/currywurst.jpg',
        category: 'Sausage Dish',
        description: "Currywurst is one of Germany’s most famous street foods, consisting of sliced sausage topped with a tangy tomato-based sauce and dusted with curry powder. First created in Berlin in 1949, it has become a beloved snack often served with fries or bread rolls.",
        
        ingredients: [
          { name: 'Pork Sausage', icon: 'multimedia_content/images/meat.png' },
          { name: 'Tomato Sauce', icon: 'multimedia_content/images/tomato.png' },
          { name: 'Curry Powder', icon: 'multimedia_content/images/chilli.png' }
        ],
        recipe: [
          'Grill or fry sausages until golden and cooked.',
          'Slice sausages into bite-sized pieces.',
          'Top with tomato ketchup mixed with curry powder.',
          'Serve hot with fries or bread rolls.'
        ]
      },

      'fischbrotchen': {
        name: 'Fischbrötchen',
        country: 'Germany',
        flag: 'https://flagcdn.com/w320/de.png',
        image: 'multimedia_content/images/fischbrotchen.jpg',
        category: 'Seafood Sandwich',
        description: "Fischbrötchen is a northern German street food classic, consisting of a crusty bread roll filled with fresh or pickled fish such as herring, mackerel, or salmon. Typically garnished with onions, lettuce, and pickles, it is especially popular in coastal regions and at seaside markets.",
        
        ingredients: [
          { name: 'Herring or Mackerel', icon: 'multimedia_content/images/fish.png' },
          { name: 'Bun', icon: 'multimedia_content/images/bread.png' },
          { name: 'Onions', icon: 'multimedia_content/images/onion.png' },
          { name: 'Lettuce', icon: 'multimedia_content/images/lettuce.png' },
          { name: 'Pickles (optional)', icon: 'multimedia_content/images/pickle.png' }
        ],
        recipe: [
          'Slice bun in half and lightly toast if desired.',
          'Add fish fillet (fresh, smoked, or pickled).',
          'Top with sliced onions, lettuce, and pickles.',
          'Close sandwich and serve fresh.'
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
        image: 'multimedia_content/images/tomyumgoong.png',
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
      'mango-sticky-rice': {
        name: 'Mango Sticky Rice',
        country: 'Thailand',
        flag: 'https://flagcdn.com/w320/th.png',
        image: 'multimedia_content/images/mangostickyrice.png',
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
      
      'massaman-curry': {
        name: 'Massaman Curry',
        country: 'Thailand',
        flag: 'https://flagcdn.com/w320/th.png',
        image: 'multimedia_content/images/massamancurry.png',
        category: 'Curry',
        description: 'Massaman Curry is a rich, flavorful Thai curry with Muslim origins. It is milder than other Thai curries and features spices like cardamom, cinnamon, and star anise.',
        ingredients: [
          { name: 'Beef', icon: 'multimedia_content/images/beef.png' },
          { name: 'Potato', icon: 'multimedia_content/images/potato.png' },
          { name: 'Onion', icon: 'multimedia_content/images/onion.png' },
          { name: 'Peanut', icon: 'multimedia_content/images/peanut.png' },
          { name: 'Cardamom', icon: 'multimedia_content/images/cardamom.png' },
          { name: 'Cinnamon', icon: 'multimedia_content/images/cinnamom.png' },
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
      },
       // Food data for Turkey
      'doner-kebab': {
        name: 'Döner Kebab',
        country: 'Turkey',
        flag: 'https://flagcdn.com/w320/tr.png',
        image: 'multimedia_content/images/donerkebab.png',
        category: 'Meat',
        description: 'Döner kebab was invented in the 19th century in the Ottoman Empire, with its modern form developing in the 1970s in Berlin, Germany, by Turkish immigrants. It consists of meat stacked in an inverted cone which is turned slowly on a vertical rotisserie next to a vertical cooking element. The outer layer is sliced into thin shavings as it cooks, typically served in a wrap or on a plate with rice and vegetables.',
        ingredients: [
          { name: 'Lamb', icon: 'multimedia_content/images/lamb.png' },
          { name: 'Bread', icon: 'multimedia_content/images/bread.png' },
          { name: 'Tomato', icon: 'multimedia_content/images/tomato.png' },
          { name: 'Onion', icon: 'multimedia_content/images/onion.png' },
          { name: 'Lettuce', icon: 'multimedia_content/images/lettuce.png' },
          { name: 'Yogurt', icon: 'multimedia_content/images/yogurt.png' },
          { name: 'Spices', icon: 'multimedia_content/images/spices.png' }
        ],
        recipe: [
          'Mix spices with minced lamb and form into a large cone shape.',
          'Place the meat cone on a vertical rotisserie and cook slowly.',
          'As the outer layer cooks, slice thin shavings off with a long knife.',
          'Serve the meat in warm flatbread with tomatoes, onions, lettuce, and yogurt sauce.',
          'Optionally add rice or fries as a side dish.'
        ]
      },
      'simit': {
        name: 'Simit',
        country: 'Turkey',
        flag: 'https://flagcdn.com/w320/tr.png',
        image: 'multimedia_content/images/simit.png',
        category: 'Bread',
        description: 'Simit is a circular bread, typically encrusted with sesame seeds. Found in Turkey, it is often sold by street vendors and is a popular breakfast food or snack. It has a long history dating back to the Ottoman Empire and is sometimes referred to as a "Turkish bagel".',
        ingredients: [
          { name: 'Flour', icon: 'multimedia_content/images/flour.png' },
          { name: 'Yeast', icon: 'multimedia_content/images/yeast.png' },
          { name: 'Sesame Seeds', icon: 'multimedia_content/images/sesameseeds.png' },
          { name: 'Molasses', icon: 'multimedia_content/images/molasses.png' },
          { name: 'Water', icon: 'multimedia_content/images/water.png' },
          { name: 'Salt', icon: 'multimedia_content/images/salt.png' }
        ],
        recipe: [
          'Mix flour, yeast, salt, and water to form a dough.',
          'Knead the dough until smooth and elastic.',
          'Let the dough rise until doubled in size.',
          'Divide the dough into equal portions and shape into rings.',
          'Boil the rings briefly in water with molasses.',
          'Coat with sesame seeds and bake until golden brown.'
        ]
      },
      'lahmacun': {
        name: 'Lahmacun',
        country: 'Turkey',
        flag: 'https://flagcdn.com/w320/tr.png',
        image: 'multimedia_content/images/lahmacun.png',
        category: 'Flatbread',
        description: 'Lahmacun is a round, thin piece of dough topped with minced meat, vegetables, herbs, and spices then baked. It is often rolled up with vegetables and lemon juice squeezed over it.',
        ingredients: [
          { name: 'Minced Meat', icon: 'multimedia_content/images/mincedmeat.png' },
          { name: 'Flour', icon: 'multimedia_content/images/flour.png' },
          { name: 'Tomato', icon: 'multimedia_content/images/tomato.png' },
          { name: 'Onion', icon: 'multimedia_content/images/onion.png' },
          { name: 'Parsley', icon: 'multimedia_content/images/parsley.png' },
          { name: 'Spices', icon: 'multimedia_content/images/spices.png' }
        ],
        recipe: [
          'Prepare the dough by mixing flour, water, and salt.',
          'Make the topping by mixing minced meat, finely chopped vegetables, and spices.',
          'Roll out the dough into thin circles.',
          'Spread the meat mixture evenly over the dough.',
          'Bake in a very hot oven for a few minutes until crispy.',
          'Serve with lemon wedges and fresh vegetables for rolling.'
        ]
      },
      'baklava': {
        name: 'Baklava',
        country: 'Turkey',
        flag: 'https://flagcdn.com/w320/tr.png',
        image: 'multimedia_content/images/baklava.png',
        category: 'Dessert',
        description: 'Baklava is a rich, sweet dessert pastry made of layers of filo filled with chopped nuts and sweetened with syrup or honey. It is characteristic of the cuisines of the former Ottoman Empire.',
        ingredients: [
          { name: 'Phyllo Dough', icon: 'multimedia_content/images/phyllodough.png' },
          { name: 'Nuts', icon: 'multimedia_content/images/nuts.png' },
          { name: 'Butter', icon: 'multimedia_content/images/butter.png' },
          { name: 'Sugar', icon: 'multimedia_content/images/sugar.png' },
          { name: 'Honey', icon: 'multimedia_content/images/honey.png' }
        ],
        recipe: [
          'Prepare the syrup by boiling sugar, water, and lemon juice.',
          'Layer phyllo dough sheets in a baking pan, brushing each with melted butter.',
          'Add a layer of finely chopped nuts after several sheets of phyllo.',
          'Repeat the layers until all ingredients are used.',
          'Cut into diamond or square shapes before baking.',
          'Bake until golden and crisp, then pour cool syrup over hot baklava.'
        ]
      },
      'borek': {
        name: 'Börek',
        country: 'Turkey',
        flag: 'https://flagcdn.com/w320/tr.png',
        image: 'multimedia_content/images/borek.png',
        category: 'Pastry',
        description: 'Börek is a family of baked filled pastries made of a thin flaky dough such as phyllo. It can be filled with cheese, minced meat, vegetables, or potatoes.',
        ingredients: [
          { name: 'Phyllo Dough', icon: 'multimedia_content/images/phyllodough.png' },
          { name: 'Cheese', icon: 'multimedia_content/images/cheese.png' },
          { name: 'Spinach', icon: 'multimedia_content/images/spinach.png' },
          { name: 'Egg', icon: 'multimedia_content/images/egg.png' },
          { name: 'Butter', icon: 'multimedia_content/images/butter.png' }
        ],
        recipe: [
          'Prepare the filling (cheese, spinach, meat, or potatoes).',
          'Layer phyllo sheets, brushing each with melted butter.',
          'Spread filling evenly over the dough.',
          'Roll or fold the dough into the desired shape.',
          'Brush the top with egg wash or more butter.',
          'Bake until golden brown and flaky.'
        ]
      },
      
      /* Japanese Food Data */
      'okonomiyaki': {
        name: 'Okonomiyaki',
        country: 'Japan',
        flag: 'https://flagcdn.com/w320/jp.png',
        image: 'multimedia_content/images/okonomiyaki.jpg', 
        category: 'Savory Pancake',
        description: "Okonomiyaki is a beloved Japanese street food often described as a savory pancake or 'Japanese pizza.' Its name comes from 'okonomi,' meaning 'as you like,' and 'yaki,' meaning 'grilled,' reflecting the dish’s versatility in ingredients and toppings. Typically made from a batter of flour, eggs, shredded cabbage, and grated yam, it can include additions like pork belly, shrimp, or squid. Cooked on a teppan (iron griddle), it is commonly topped with tangy okonomiyaki sauce, creamy Japanese mayonnaise, dried bonito flakes, and seaweed powder. Regional variations are popular, with Osaka-style mixing ingredients into the batter and Hiroshima-style layering noodles and toppings. Okonomiyaki has become an iconic comfort food in Japan, celebrated for its rich flavors and customizable nature.",

        ingredients: [
          { name: 'Flour', icon: 'multimedia_content/images/flour.png' },
          { name: 'Eggs', icon: 'multimedia_content/images/egg.png' },
          { name: 'Cabbage', icon: 'multimedia_content/images/cabbage.png' },
          { name: 'Green Onions', icon: 'multimedia_content/images/greenonion.png' },
          { name: 'Okonomiyaki Sauce', icon: 'multimedia_content/images/sauce.png' },
          { name: 'Japanese Mayonnaise', icon: 'multimedia_content/images/mayonaise.png' },
          { name: 'Bonito Flakes', icon: 'multimedia_content/images/bonito.jpg' },
          { name: 'Seaweed Flakes', icon: 'multimedia_content/images/seaweedflakes.jpg' }
        ],
        recipe: [
          'In a large bowl, whisk together flour, water, eggs, and dashi (optional) to form a smooth batter.',
          'Add shredded cabbage, green onions, and any desired fillings such as pork, shrimp, or squid. Mix well.',
          'Heat a lightly oiled skillet or teppan over medium heat. Pour in a portion of the batter and shape it into a round pancake.',
          'Cook until the bottom is golden brown, then carefully flip and cook the other side until fully set and cooked through.',
          'Transfer to a plate and brush the top with okonomiyaki sauce.',
          'Drizzle with Japanese mayonnaise, then sprinkle with bonito flakes and seaweed powder.',
          'Serve hot and enjoy your homemade okonomiyaki!'
        ]
      },
      'daifuku': {
        name: 'Daifuku Mochi',
        country: 'Japan',
        flag: 'https://flagcdn.com/w320/jp.png',
        image: 'multimedia_content/images/daifukumochi.jpg', 
        category: 'Dessert',
        description: "Daifuku Mochi is a traditional Japanese confection consisting of a soft, chewy outer layer of glutinous rice flour dough filled with a sweet filling, most commonly red bean paste. The name 'daifuku' means 'great luck,' and the treat is often enjoyed during celebrations and festivals as a symbol of good fortune. With its delicate texture and balanced sweetness, Daifuku Mochi has become one of Japan’s most popular wagashi (traditional sweets). Variations include fillings like strawberries, matcha cream, or ice cream, making it a versatile and beloved dessert enjoyed worldwide.",

        ingredients: [
          { name: 'Glutinous Rice Flour', icon: 'multimedia_content/images/flour.png' },
          { name: 'Red Bean Paste', icon: 'multimedia_content/images/redbeanpaste.png' },
          { name: 'Sugar', icon: 'multimedia_content/images/brownsugar.png' },
          { name: 'Cornstarch', icon: 'multimedia_content/images/cornstarch.png' }
        ],
        recipe: [
          'In a bowl, combine glutinous rice flour, sugar, and water to make a smooth batter.',
          'Steam the mixture for 10-15 minutes until it becomes a sticky, translucent dough.',
          'Dust a clean surface with cornstarch and transfer the dough onto it to prevent sticking.',
          'Flatten small portions of the dough and place a spoonful of red bean paste in the center.',
          'Carefully wrap the dough around the filling, pinching the edges to seal and shaping into a round ball.',
          'Lightly dust with cornstarch to finish.',
          'Serve fresh and enjoy your homemade Daifuku Mochi!'
        ]
      },
      'taiyaki': {
        name: 'Taiyaki',
        country: 'Japan',
        flag: 'https://flagcdn.com/w320/jp.png',
        image: 'multimedia_content/images/taiyaki.jpg', 
        category: 'Dessert',
        description: "Taiyaki is a traditional Japanese street food shaped like a fish, typically filled with sweet red bean paste. Made from a pancake-like batter, it is cooked in special fish-shaped molds, resulting in a crispy outside and fluffy interior. First created in Tokyo during the early 20th century, Taiyaki quickly became a festival favorite and is now sold across Japan at street stalls, fairs, and even convenience stores. While red bean paste remains the classic filling, modern variations include custard, chocolate, cheese, and sweet potato, making Taiyaki a versatile and beloved treat enjoyed by all ages.",

        ingredients: [
          { name: 'Flour', icon: 'multimedia_content/images/flour.png' },
          { name: 'Eggs', icon: 'multimedia_content/images/egg.png' },
          { name: 'Sugar', icon: 'multimedia_content/images/brownsugar.png' },
          { name: 'Milk', icon: 'multimedia_content/images/milk.png' },
          { name: 'Red Bean Paste', icon: 'multimedia_content/images/redbeanpaste.png' }
        ],
        recipe: [
          'In a bowl, whisk together flour, baking powder, sugar, eggs, and milk to form a smooth batter.',
          'Preheat a taiyaki mold and lightly grease it with oil.',
          'Pour a layer of batter into the mold, then add a spoonful of red bean paste (or other desired filling).',
          'Cover the filling with more batter and close the mold.',
          'Cook for 2-3 minutes on each side until golden brown and crisp.',
          'Remove from the mold and let cool slightly before serving.',
          'Enjoy your freshly made Taiyaki warm!'
        ]
      },
      'takoyaki': {
        name: 'Takoyaki',
        country: 'Japan',
        flag: 'https://flagcdn.com/w320/jp.png',
        image: 'multimedia_content/images/takoyaki.png', 
        category: 'Street Food',
        description: "Takoyaki is a famous Japanese street food originating from Osaka, consisting of savory round balls made from a wheat flour-based batter filled with diced octopus. Cooked in a special molded pan, the balls are crispy on the outside and soft inside. They are traditionally topped with takoyaki sauce, Japanese mayonnaise, dried bonito flakes, and seaweed powder. First popularized in the 1930s, Takoyaki quickly became a festival favorite across Japan, embodying the fun and flavorful spirit of Japanese street food culture.",

        ingredients: [
          { name: 'Flour', icon: 'multimedia_content/images/flour.png' },
          { name: 'Eggs', icon: 'multimedia_content/images/egg.png' },
          { name: 'Octopus', icon: 'multimedia_content/images/octopus.png' },
          { name: 'Green Onions', icon: 'multimedia_content/images/greenonion.png' },
          { name: 'Pickled Ginger', icon: 'multimedia_content/images/ginger.png' },
          { name: 'Takoyaki Sauce', icon: 'multimedia_content/images/sauce.png' },
          { name: 'Japanese Mayonnaise', icon: 'multimedia_content/images/mayonaise.png' },
          { name: 'Bonito Flakes', icon: 'multimedia_content/images/bonito.jpg' },
          { name: 'Seaweed Flakes', icon: 'multimedia_content/images/seaweedflakes.jpg' }
        ],
        recipe: [
          'In a bowl, mix flour, eggs, and dashi stock to create a smooth batter.',
          'Preheat a takoyaki pan and lightly grease each mold with oil.',
          'Pour batter into the molds, then add diced octopus, green onions, and pickled ginger.',
          'Cook until the edges begin to set, then use skewers to turn the batter and form round balls.',
          'Continue rotating until evenly golden and crispy on the outside.',
          'Remove from the pan and transfer to a plate.',
          'Top with takoyaki sauce, drizzle with mayonnaise, and sprinkle with bonito flakes and seaweed powder.',
          'Serve hot and enjoy!'
        ]
      },

      /* Chinese Food Data */
      'xiaolongxia': {
        name: 'Xiaolongxia (Spicy Crayfish)',
        country: 'China',
        flag: 'https://flagcdn.com/w320/cn.png',
        image: 'multimedia_content/images/xiaolongxia.jpg',
        category: 'Seafood',
        description: "Xiaolongxia, or spicy crayfish, is a hugely popular Chinese street food, especially during summer nights. First popularized in Hunan and Sichuan, it features freshwater crayfish braised with garlic, chili, and fragrant spices. Often eaten with beer and shared among friends, Xiaolongxia embodies the social and vibrant spirit of Chinese street dining, offering bold flavors and a fun hands-on eating experience.",

        ingredients: [
          { name: 'Crayfish', icon: 'multimedia_content/images/crayfish.jpg' },
          { name: 'Garlic', icon: 'multimedia_content/images/garlic.png' },
          { name: 'Ginger', icon: 'multimedia_content/images/ginger.png' },
          { name: 'Chili Peppers', icon: 'multimedia_content/images/chilli.png' },
          { name: 'Sichuan Peppercorns', icon: 'multimedia_content/images/peppercorn.png' },
          { name: 'Soy Sauce', icon: 'multimedia_content/images/soysauce.png' },
          { name: 'Beer', icon: 'multimedia_content/images/beer.png' }
        ],
        recipe: [
          'Clean and prepare the crayfish thoroughly.',
          'Heat oil in a large wok and stir-fry garlic, ginger, chili peppers, and Sichuan peppercorns until fragrant.',
          'Add crayfish and stir-fry until shells turn red.',
          'Pour in beer and soy sauce, cover, and simmer for 10–15 minutes.',
          'Reduce the sauce until slightly thickened, coating the crayfish.',
          'Serve hot, with plenty of napkins and cold drinks.'
        ]
      },

      'jianbing': {
        name: 'Jianbing',
        country: 'China',
        flag: 'https://flagcdn.com/w320/cn.png',
        image: 'multimedia_content/images/jianbing.jpg',
        category: 'Breakfast',
        description: "Jianbing is one of China’s most popular breakfast street foods, often described as a Chinese crepe. Made with a thin batter of wheat and mung bean flour cooked on a griddle, it is topped with eggs, scallions, cilantro, and a crispy fried cracker. Finished with savory sauces like hoisin and chili paste, Jianbing is folded up for an easy grab-and-go meal. Portable, flavorful, and customizable, Jianbing is a staple of morning street life in Chinese cities.",

        ingredients: [
          { name: 'Wheat Flour', icon: 'multimedia_content/images/flour.png' },
          { name: 'Mung Bean Flour', icon: 'multimedia_content/images/flour.png' },
          { name: 'Eggs', icon: 'multimedia_content/images/egg.png' },
          { name: 'Scallions', icon: 'multimedia_content/images/greenonion.png' },
          { name: 'Cilantro', icon: 'multimedia_content/images/cilantro.jpg' },
          { name: 'Crispy Cracker (Baocui)', icon: 'multimedia_content/images/cracker.png' },
          { name: 'Hoisin Sauce', icon: 'multimedia_content/images/sauce.png' },
          { name: 'Chili Paste', icon: 'multimedia_content/images/chilli.png' }
        ],
        recipe: [
          'Mix wheat and mung bean flour with water to make a smooth batter.',
          'Heat a griddle and spread a thin layer of batter evenly.',
          'Crack an egg on top and spread it across the surface.',
          'Add scallions, cilantro, and press a crispy cracker into the batter.',
          'Spread hoisin and chili sauce over the crepe.',
          'Fold into a portable wrap and serve hot.'
        ]
      },

      'tanghulu': {
        name: 'Tanghulu',
        country: 'China',
        flag: 'https://flagcdn.com/w320/cn.png',
        image: 'multimedia_content/images/tanghulu.jpg',
        category: 'Snack',
        description: "Tanghulu is a traditional Chinese street snack made by skewering fruits and coating them in a hard sugar glaze. The classic version uses hawthorn berries, but modern variations include strawberries, grapes, and other fruits. The crisp, sweet shell contrasts with the tart fruit inside, making it both refreshing and satisfying. Tanghulu is especially popular in northern China during winter, where its bright, glossy coating adds festive cheer to street markets.",

        ingredients: [
          { name: 'Hawthorn Berries (or Strawberries/Grapes)', icon: 'multimedia_content/images/strawberry.png' },
          { name: 'Sugar', icon: 'multimedia_content/images/brownsugar.png' },
          { name: 'Water', icon: 'multimedia_content/images/water.jpg' },
        ],
        recipe: [
          'Wash and dry the fruits thoroughly.',
          'Thread the fruits onto skewers.',
          'In a pot, melt sugar with a little water to make a syrup and cook until it reaches a hard crack stage.',
          'Dip the skewered fruits into the syrup to coat evenly.',
          'Place on parchment paper to harden.',
          'Enjoy immediately while the sugar shell is crisp.'
        ]
      },

      'chuanshao': {
        name: 'Chuan Shao (Grilled Skewers)',
        country: 'China',
        flag: 'https://flagcdn.com/w320/cn.png',
        image: 'multimedia_content/images/chuanshao.jpg',
        category: 'Street BBQ',
        description: "Chuan Shao, also called Chinese barbecue skewers, is a popular street food often enjoyed at night markets. Originating from Xinjiang but now widespread across China, it consists of skewered meats, seafood, or vegetables grilled over open flames. Seasoned with cumin, chili powder, and sesame seeds, the skewers are smoky, spicy, and bursting with flavor. Often paired with cold beer, Chuan Shao represents the lively, communal atmosphere of Chinese late-night dining.",

        ingredients: [
          { name: 'Lamb or Chicken', icon: 'multimedia_content/images/meat.png' },
          { name: 'Cumin', icon: 'multimedia_content/images/cumin.png' },
          { name: 'Chili Powder', icon: 'multimedia_content/images/chilli.png' },
          { name: 'Sesame Seeds', icon: 'multimedia_content/images/sesameseeds.png' },
          { name: 'Garlic', icon: 'multimedia_content/images/garlic.png' },
          { name: 'Vegetables (optional)', icon: 'multimedia_content/images/cabbage.png' },
        ],
        recipe: [
          'Cut meat and vegetables into bite-sized pieces and thread onto skewers.',
          'Mix cumin, chili powder, garlic, and sesame seeds to create a spice rub.',
          'Season the skewers generously with the spice mix.',
          'Grill over hot coals or an open flame, turning occasionally.',
          'Cook until meat is charred on the outside and juicy inside.',
          'Serve hot with extra spice seasoning and cold drinks.'
        ]
      },

       /* Malaysia Food */
      'nasi-lemak': {
        name: 'Nasi Lemak',
        country: 'Malaysia',
        flag: 'https://flagcdn.com/w320/my.png', 
        image: 'multimedia_content/images/nasilemak.png',
        category: 'Rice',
        description: 'Nasi Lemak is Malaysia’s national dish, often eaten for breakfast. It consists of fragrant rice cooked in coconut milk, served with sambal (spicy chili paste), fried crispy anchovies, roasted peanuts, boiled egg, and cucumber slices. Sometimes it comes with fried chicken or rendang.',
        ingredients: [
          { name: 'Rice', icon: 'multimedia_content/images/rice.png' },
          { name: 'Coconut Milk', icon: 'multimedia_content/images/coconut.png' },
          { name: 'Anchovies', icon: 'multimedia_content/images/anchovy.png' },
          { name: 'Peanut', icon: 'multimedia_content/images/peanut.png' },
          { name: 'Cucumber', icon: 'multimedia_content/images/cucumber.png' },
          { name: 'Eggs', icon: 'multimedia_content/images/egg.png' },
          { name: 'Chilli Sambal', icon: 'multimedia_content/images/chilli.png' }
        ],
        recipe: [
        'Wash rice and cook it with coconut milk, pandan leaves, and a pinch of salt.',
        'Prepare sambal by frying chili paste, onions, and tamarind until fragrant.',
        'Fry anchovies until crispy.',
        'Boil eggs and cut them in half.',
        'Serve rice with sambal, anchovies, peanuts, cucumber slices, and boiled egg.',
        'Optional: Add fried chicken, rendang, or squid sambal for extra flavor.'
        ]
      },

      'char-kway-teow': {
        name: 'Char Kway Teow',
        country: 'Malaysia',
        flag: 'https://flagcdn.com/w320/my.png', 
        image: 'multimedia_content/images/charkwayteow.png',
        category: 'Noodles',
        description: 'Char Kway Teow is a famous Malaysian stir-fried flat rice noodle dish. It is cooked over high heat with prawns, cockles, Chinese sausage, eggs, bean sprouts, and chives, giving it the distinct smoky flavor known as “wok hei.”',
        ingredients: [
          { name: 'Flat Rice Noodles', icon: 'multimedia_content/images/noodle.png' },
          { name: 'Prawns', icon: 'multimedia_content/images/shrimp.png' },
          { name: 'Chinese Sausage', icon: 'multimedia_content/images/hotdog.png' },
          { name: 'Cockles', icon: 'multimedia_content/images/cockles.png' },
          { name: 'Bean Sprouts', icon: 'multimedia_content/images/bean.png' },
          { name: 'Eggs', icon: 'multimedia_content/images/egg.png' },
          { name: 'Chives', icon: 'multimedia_content/images/chives.png' }

        ],
      recipe: [
        'Heat oil in a wok over high heat.',
        'Add garlic, prawns, and Chinese sausage; stir-fry until fragrant.',
        'Add flat rice noodles, soy sauce, and chili paste.',
        'Push noodles aside, crack an egg, and scramble before mixing in.',
        'Add bean sprouts and chives; stir-fry quickly to keep noodles smoky.',
        'Serve hot with extra chili paste on the side.'
        ]
      },

      'satay': {
        name: 'Satay',
        country: 'Malaysia',
        flag: 'https://flagcdn.com/w320/my.png', 
        image: 'multimedia_content/images/satay.jpg',
        category: 'Grilled Skewers',
        description: 'Satay is a popular Malaysian street food consisting of marinated meat skewers grilled over charcoal. It is served with a rich peanut sauce, ketupat (rice cakes), cucumber, and onions. The smoky, juicy meat makes it a crowd favorite.',
        ingredients: [
          { name: 'Chicken/Beef', icon: 'multimedia_content/images/meat.png' },
          { name: 'Peanut Sauce', icon: 'multimedia_content/images/peanut.png' },
          { name: 'Cucumber', icon: 'multimedia_content/images/cucumber.png' },
          { name: 'Onions', icon: 'multimedia_content/images/onion.png' },
          { name: 'Rice Cake (Ketupat)', icon: 'multimedia_content/images/ketupat.png' },
        ],
      recipe: [
        'Cut chicken or beef into small cubes.',
        'Marinate with spices, turmeric, lemongrass, and garlic for a few hours.',
        'Thread the meat onto skewers.',
        'Grill over charcoal until smoky and fully cooked.',
        'Serve with peanut sauce, cucumber, onions, and rice cakes.'
        ]
      },

      'roti-canai': {
        name: 'Roti Canai',
        country: 'Malaysia',
        flag: 'https://flagcdn.com/w320/my.png', 
        image: 'multimedia_content/images/roticanai.jpg',
        category: 'Flatbread',
        description: 'Roti Canai is a flaky and crispy flatbread that is soft inside. It is usually served with dhal curry, chicken curry, or fish curry. A popular breakfast or snack in Malaysia, especially loved for its layers and texture.',
        ingredients: [
          { name: 'Flour', icon: 'multimedia_content/images/flour.png' },
          { name: 'Water', icon: 'multimedia_content/images/water.jpg' },
          { name: 'Ghee', icon: 'multimedia_content/images/ghee.png' },
          { name: 'Salt', icon: 'multimedia_content/images/salt.png' },
          { name: 'Curry', icon: 'multimedia_content/images/curry.png' }
        ],
      recipe: [
        'Mix flour, water, ghee, and salt into a dough.',
        'Rest the dough for a few hours.',
        'Stretch and flip the dough until very thin.',
        'Fold into layers and fry on a hot flat pan until golden brown.',
        'Serve hot with dhal curry, chicken curry, or sambal.'
        ]
      },

    /* Kiribati Food Data */

    'batata-mash': {
      name: 'Batata Mash',
      country: 'Kiribati',
      flag: 'https://flagcdn.com/w320/ki.png', 
      image: 'multimedia_content/images/batata-mash.jpg',
      category: 'Root Vegetable Dish',
      description: 'Batata Mash is a simple and comforting dish from Kiribati made with mashed sweet potatoes. Often mixed with coconut milk for creaminess, it is enjoyed as a filling staple, usually served alongside fish or as part of a traditional island meal.',
      ingredients: [
        { name: 'Sweet Potatoes', icon: 'multimedia_content/images/sweetpotato.png' },
        { name: 'Coconut Milk', icon: 'multimedia_content/images/coconut.png' },
        { name: 'Salt', icon: 'multimedia_content/images/salt.png' }
      ],
      recipe: [
        'Boil or steam sweet potatoes until soft.',
        'Mash the sweet potatoes in a large bowl.',
        'Mix in coconut milk and a pinch of salt.',
        'Serve warm as a side dish or staple.'
      ]
     },

    'teinai': {
      name: 'Teinai (Pumpkin Coconut Soup)',
      country: 'Kiribati',
      flag: 'https://flagcdn.com/w320/ki.png', 
      image: 'multimedia_content/images/teinai.png',
      category: 'Soup',
      description: 'Teinai is a traditional Kiribati pumpkin soup enriched with creamy coconut milk. It is a nourishing dish that balances the sweetness of pumpkin with the richness of coconut, often eaten with bread or rice.',
      ingredients: [
        { name: 'Pumpkin', icon: 'multimedia_content/images/pumpkin.png' },
        { name: 'Coconut Milk', icon: 'multimedia_content/images/coconut.png' },
        { name: 'Onion', icon: 'multimedia_content/images/onion.png' },
        { name: 'Salt', icon: 'multimedia_content/images/salt.png' }
      ],
      recipe: [
        'Peel and cut pumpkin into chunks.',
        'Boil pumpkin with onions until soft.',
        'Mash or blend pumpkin into a smooth soup.',
        'Stir in coconut milk and season with salt.',
        'Simmer briefly and serve warm.'
      ]
    },

    'palusami': {
      name: 'Palusami',
      country: 'Kiribati',
      flag: 'https://flagcdn.com/w320/ki.png', 
      image: 'multimedia_content/images/palusami.jpg',
      category: 'Leaf-Wrapped Dish',
      description: 'Palusami is a beloved Kiribati and Pacific Island dish made with taro leaves stuffed with coconut cream and sometimes fish or meat. The bundles are baked or steamed until tender, creating a rich, savory, and creamy delicacy.',
      ingredients: [
        { name: 'Taro Leaves', icon: 'multimedia_content/images/parsley.png' },
        { name: 'Coconut Cream', icon: 'multimedia_content/images/coconut.png' },
        { name: 'Onion', icon: 'multimedia_content/images/onion.png' },
        { name: 'Fish or Meat (optional)', icon: 'multimedia_content/images/fish.png' },
        { name: 'Salt', icon: 'multimedia_content/images/salt.png' }
      ],
      recipe: [
        'Wash and prepare taro leaves.',
        'Mix coconut cream with chopped onions and salt.',
        'Fill taro leaves with coconut mixture (add fish/meat if desired).',
        'Wrap into bundles and place in an oven or underground earth oven.',
        'Cook until leaves are tender and serve hot.'
      ]
    },

    'breadfruit-chips': {
      name: 'Breadfruit Chips',
      country: 'Kiribati',
      flag: 'https://flagcdn.com/w320/ki.png', 
      image: 'multimedia_content/images/breadfruitchips.png',
      category: 'Snack',
      description: 'Breadfruit Chips are a popular snack in Kiribati, made by thinly slicing breadfruit and frying until golden and crispy. Lightly salted, they are crunchy, savory, and often enjoyed as a quick bite or side dish.',
      ingredients: [
        { name: 'Breadfruit', icon: 'multimedia_content/images/breadfruit.png' },
        { name: 'Oil', icon: 'multimedia_content/images/oil.png' },
        { name: 'Salt', icon: 'multimedia_content/images/salt.png' }
      ],
      recipe: [
        'Peel and slice breadfruit thinly.',
        'Heat oil in a pan until hot.',
        'Fry breadfruit slices until golden brown and crispy.',
        'Remove, drain excess oil, and sprinkle with salt.',
        'Serve warm as a snack or side dish.'
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