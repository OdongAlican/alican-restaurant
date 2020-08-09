const menu = () => {
  const content = document.getElementById('content');

  const mainMenuSection = document.createElement('div');
  mainMenuSection.setAttribute('class', 'main-menu-section hide-main-menu-section');
  content.appendChild(mainMenuSection);

  function startersFunction() {
    const mainPrices = [['$18.50', '$18.90', '$24.90', '$15.90'], ['$18.90', '$24.90', '$15.90', '$10.90'],
      ['$7.90', '$6.00', '$6.40', '$5.90'], ['$18.40', '$10.90', '$11.90', '$13.50']];

    const mainFoods = [['CRAB CAKES', 'WHITEBAIT & DILL MAYO', 'WATERMELON & FETA SALAD', 'HALLOUMI WITH GRIDDLED VEGETABLES'],
      ['SPAGHETTI ALLA CARBONARA', 'BAKED TERIYAKI CHICKEN', 'APPLE CIDER SAUCE AND PORK LOIN CHOPS', 'CHICKEN ENCHILADAS '],
      ['ACORD CANDY COOKIES', 'APPLE SLAB PIE', 'APPLE PIE WITH CINNAMON & ICECREAM', 'CARROT CAKE'],
      ['HOT COCOA MIX IN A JAR', 'HOT APPLE CIDER', 'BIKINI MARTINI', 'ICED MOCHA FUSION SHAKE'],
    ];

    const foodIngredients = [['Onions / Fresh flat-leaf parsley / Mashed potatoes / Pepper / Eggs / Tartare sauce',
      'Fish / Lemon / Mayo / Fennel seeds', 'Watermelon / Red onion / Feta cheese / Fresh mint / Olive oil',
      'Onions / Fresh flat-leaf parsley / Mashed potatoes / Pepper / Eggs / Tartare sauce',
    ], [
      'Spaghetti alla carbonara in its authentic form: peppery, creamy without using cream, cheesy, and delicious.',
      'Fish / Lemon / Mayo / Fennel seeds', 'Watermelon / Red onion / Feta cheese / Fresh mint / Olive oil',
      'Beans / Halloumi cheese / Asparagus / Courgettes / Cherry tomatoes',
    ], [
      'Onions / Fresh flat-leaf parsley / Mashed potatoes / Pepper / Eggs / Tartare sauce',
      'Fish / Lemon / Mayo / Fennel seeds', 'Watermelon / Red onion / Feta cheese / Fresh mint / Olive oil',
      'Beans / Halloumi cheese / Asparagus / Courgettes / Cherry tomatoes',
    ], [
      'Onions / Fresh flat-leaf parsley / Mashed potatoes / Pepper / Eggs / Tartare sauce',
      'Fish / Lemon / Mayo / Fennel seeds', 'Watermelon / Red onion / Feta cheese / Fresh mint / Olive oil',
      'Watermelon / Red onion / Feta cheese / Fresh mint / Olive oil',
    ]];

    const generalContent = [
      {
        name: 'ASPARAGUS & HALLOUMI SALAD',
        ingredients: 'Beans / Halloumi cheese / Asparagus / Courgettes /',
        ingredientsTwo: 'Cherry tomatoes',
        price: '$18.90',
        bgClass: 'first-starters',
        mainHeader: 'Tasty',
        secondHeader: 'STARTERS',
      },
      {
        name: 'GONG BAO CHICKEN',
        ingredients: ' Halloumi cheese / Chilli / Macaroni /Spargetti /',
        ingredientsTwo: 'Green Chilli',
        price: '$19.40',
        bgClass: 'second-starters',
        mainHeader: 'Delicious',
        secondHeader: 'MAIN',
      },
      {
        name: 'CHERRY PIE',
        ingredients: 'Mayoneeze / Croisant cheese / Burgers / Courgettes /',
        ingredientsTwo: 'Red Papper',
        price: '$16.75',
        bgClass: 'third-starters',
        mainHeader: 'Sweet',
        secondHeader: 'DESSERT',
      },
      {
        name: 'MOJITO',
        ingredients: 'Beer / Black Label / Champigne / Cold Soda /',
        ingredientsTwo: 'Cold Water',
        price: '$8.05',
        bgClass: 'fourth-starters',
        mainHeader: 'Flavour',
        secondHeader: 'DRINKS',
      },
    ];

    for (let j = 0; j <= 3; j += 1) {
      const startersSection = document.createElement('div');
      startersSection.setAttribute('class', 'starters-section');
      mainMenuSection.appendChild(startersSection);

      const startersLeft = document.createElement('div');
      startersLeft.setAttribute('class', `starters-left ${generalContent[j].bgClass}`);
      startersSection.appendChild(startersLeft);

      const startersLeftOne = document.createElement('p');
      startersLeftOne.setAttribute('class', 'food-name');
      startersLeftOne.innerHTML = generalContent[j].name;
      const startersLeftTwo = document.createElement('p');
      startersLeftTwo.setAttribute('class', 'fat-content');
      startersLeftTwo.innerHTML = '(250 G)';
      const startersLeftThree = document.createElement('p');
      startersLeftThree.setAttribute('class', 'food-ingredients');
      startersLeftThree.innerHTML = generalContent[j].ingredients;
      const startersLeftFour = document.createElement('p');
      startersLeftFour.setAttribute('class', 'food-ingredients');
      startersLeftFour.innerHTML = generalContent[j].ingredientsTwo;
      const startersLeftFive = document.createElement('p');
      startersLeftFive.setAttribute('class', 'food-price');
      startersLeftFive.innerHTML = generalContent[j].price;
      startersLeft.appendChild(startersLeftOne);
      startersLeft.appendChild(startersLeftTwo);
      startersLeft.appendChild(startersLeftThree);
      startersLeft.appendChild(startersLeftFour);
      startersLeft.appendChild(startersLeftFive);

      const startersRight = document.createElement('div');
      startersRight.setAttribute('class', 'starters-right');
      startersSection.appendChild(startersRight);

      const startersHeading = document.createElement('div');
      startersHeading.setAttribute('class', 'starters-heading');
      startersRight.appendChild(startersHeading);

      const startersHeadingH2 = document.createElement('h2');
      startersHeadingH2.innerHTML = generalContent[j].mainHeader;

      const startersHeadingH1 = document.createElement('h1');
      startersHeadingH1.innerHTML = generalContent[j].secondHeader;
      startersHeading.appendChild(startersHeadingH2);
      startersHeading.appendChild(startersHeadingH1);

      const displayPrices = () => {
        for (let i = 0; i <= 3; i += 1) {
          const priceDetails = document.createElement('div');
          priceDetails.setAttribute('class', 'price-details');
          startersRight.appendChild(priceDetails);

          const priceDetailsFirst = document.createElement('div');
          priceDetailsFirst.setAttribute('class', 'price-details-first');
          priceDetails.appendChild(priceDetailsFirst);

          const priceDetailsFirstH4 = document.createElement('h4');
          priceDetailsFirstH4.innerHTML = ` ${mainFoods[j][i]} <small>(250 G)</small>`;
          priceDetailsFirst.appendChild(priceDetailsFirstH4);

          const priceDetailsSecond = document.createElement('div');
          priceDetailsSecond.setAttribute('class', 'price-details-second');
          priceDetails.appendChild(priceDetailsSecond);

          const priceDetailsThird = document.createElement('div');
          priceDetailsThird.setAttribute('class', 'price-details-third');
          priceDetails.appendChild(priceDetailsThird);
          priceDetailsThird.innerHTML = mainPrices[j][i];

          const startersPrices = document.createElement('div');
          startersPrices.setAttribute('class', 'starters-prices');
          startersRight.appendChild(startersPrices);

          const startersPricesPg = document.createElement('p');
          startersPrices.appendChild(startersPricesPg);
          startersPricesPg.innerHTML = foodIngredients[j][i];
        }
      };

      displayPrices();
    }
  }

  startersFunction();
};

export default menu;