const home = () => {
  const content = document.getElementById('content');

  const restaurantMenu = document.createElement('div');
  restaurantMenu.setAttribute('class', 'restaurant-menu');
  content.appendChild(restaurantMenu);

  const listingsection = document.createElement('div');
  listingsection.setAttribute('class', 'listing-section');
  restaurantMenu.appendChild(listingsection);

  const listingsectionOne = document.createElement('p');
  listingsectionOne.innerHTML = 'RESTAURANT';
  const listingsectionNine = document.createElement('h1');
  listingsectionNine.innerHTML = 'MENU';
  const listingsectionTwo = document.createElement('p');
  listingsectionTwo.innerHTML = 'ALL';
  const listingsectionThree = document.createElement('p');
  listingsectionThree.innerHTML = 'STARTERS';
  const listingsectionFour = document.createElement('p');
  listingsectionFour.innerHTML = 'MAIN';
  const listingsectionFive = document.createElement('p');
  listingsectionFive.innerHTML = 'DESERT';
  const listingsectionSix = document.createElement('p');
  listingsectionSix.innerHTML = 'DAILY MENU';
  const listingsectionSeven = document.createElement('p');
  listingsectionSeven.innerHTML = "CHEF'S SPECIALITY";
  const listingsectionEight = document.createElement('p');
  listingsectionEight.innerHTML = 'OFFERS';
  listingsection.appendChild(listingsectionOne);
  listingsection.appendChild(listingsectionNine);
  listingsection.appendChild(listingsectionTwo);
  listingsection.appendChild(listingsectionThree);
  listingsection.appendChild(listingsectionFour);
  listingsection.appendChild(listingsectionFive);
  listingsection.appendChild(listingsectionSix);
  listingsection.appendChild(listingsectionSeven);
  listingsection.appendChild(listingsectionEight);

  const gridSection = document.createElement('div');
  gridSection.setAttribute('class', 'grid-section');
  restaurantMenu.appendChild(gridSection);


  const gridFunction = () => {
    const classArray = ['grid-element first', 'grid-element second',
      'grid-element third', 'grid-element fourth',
      'grid-element fifth', 'grid-element sixth'];
    const className = ['Apple cider and Pork', 'Aubergine Dip',
      'Baked Teriyaki chicken', 'Beef and Barley Bun with Horseradish',
      'Chicken wings, agrodolce style', 'Creamy rice pudding'];
    const classPrice = ['$15.90', '$14.50', '$24.90', '$11.00', '$12.00', '$9.90'];

    for (let i = 0; i < classArray.length; i += 1) {
      const secondGridElement = document.createElement('div');
      secondGridElement.setAttribute('class', classArray[i]);
      gridSection.appendChild(secondGridElement);

      const centralsecond = document.createElement('div');
      centralsecond.setAttribute('class', 'central');
      secondGridElement.appendChild(centralsecond);

      const addCartsecond = document.createElement('div');
      addCartsecond.setAttribute('class', 'add-cart');
      addCartsecond.innerHTML = 'ADD TO CART';
      centralsecond.appendChild(addCartsecond);

      const centralParagraphTwo = document.createElement('p');
      const centralSpanTwo = document.createElement('span');

      centralParagraphTwo.innerHTML = className[i];
      centralSpanTwo.innerHTML = classPrice[i];
      centralsecond.appendChild(centralParagraphTwo);
      centralsecond.appendChild(centralSpanTwo);
    }
  };

  gridFunction();

  const testimonialsSection = document.createElement('div');
  testimonialsSection.setAttribute('class', 'testimonials-section');
  content.appendChild(testimonialsSection);

  const testimonialsSectionH2 = document.createElement('h2');
  testimonialsSectionH2.innerHTML = 'Clients';
  const testimonialsSectionH1 = document.createElement('h1');
  testimonialsSectionH1.innerHTML = 'TESTIMONIALS';
  const testimonialsSectionPgOne = document.createElement('p');
  testimonialsSectionPgOne.innerHTML = `"It was a fantastic evening in your superb restaurant which was 
                                            enjoyed by everyone who was <br> fortunate to be there"`;
  const testimonialsSectionItag = document.createElement('i');
  testimonialsSectionItag.setAttribute('class', 'fas fa-comment');
  const testimonialsSectionPgTwo = document.createElement('p');
  testimonialsSectionPgTwo.innerHTML = 'John Doe';
  testimonialsSection.appendChild(testimonialsSectionH2);
  testimonialsSection.appendChild(testimonialsSectionH1);
  testimonialsSection.appendChild(testimonialsSectionPgOne);
  testimonialsSection.appendChild(testimonialsSectionItag);
  testimonialsSection.appendChild(testimonialsSectionPgTwo);
};

export default home;