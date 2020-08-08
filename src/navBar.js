const navBar = () => {
    let content = document.getElementById('content');
    content.setAttribute("class","container");

    let topSection = document.createElement('div');
    content.appendChild(topSection);
    topSection.setAttribute('class', 'top-section');

    let navBarElements = document.createElement('div');
    topSection.appendChild(navBarElements);
    navBarElements.setAttribute("class","nav-bar-elements");
    
    let logoSection = document.createElement('div');
    logoSection.setAttribute('class', 'logo-section');
    navBarElements.appendChild(logoSection);

    let pageAnchor = document.createElement('a');
    pageAnchor.innerHTML = "RESTAURANT";
    logoSection.appendChild(pageAnchor)

    let innerContent = document.createElement('div');
    innerContent.setAttribute('class', 'inner-content');
    navBarElements.appendChild(innerContent);
  

    // home section
    let homeSection = document.createElement('div');
    homeSection.setAttribute('class', 'home-section');
    let homeSectionAnchor = document.createElement('button')
    homeSectionAnchor.setAttribute('id', 'homeNav')
    homeSectionAnchor.innerHTML = "HOME";
    homeSection.appendChild(homeSectionAnchor)
    innerContent.appendChild(homeSection);

    // menu section

    let menuSection = document.createElement('div');
    menuSection.setAttribute('class', 'menu-section')
    let menuSectionAnchor = document.createElement('button')
    menuSectionAnchor.setAttribute('id', 'menuNav')
    menuSectionAnchor.innerHTML = "MENU";
    menuSection.appendChild(menuSectionAnchor)
    innerContent.appendChild(menuSection);

     // about section

     let aboutSection = document.createElement('div');
     aboutSection.setAttribute('class', 'about-section')
     let aboutSectionAnchor = document.createElement('button')
     aboutSectionAnchor.setAttribute('id', 'aboutNav')
     aboutSectionAnchor.innerHTML = "ABOUT";
     aboutSection.appendChild(aboutSectionAnchor)
     innerContent.appendChild(aboutSection);

    // contact section

    let contactSection = document.createElement('div');
    contactSection.setAttribute('class', 'contact-section')
    let contactSectionAnchor = document.createElement('a')
    contactSectionAnchor.innerHTML = "CONTACT";
    contactSection.appendChild(contactSectionAnchor)
    innerContent.appendChild(contactSection);

    let reservations = document.createElement('div');
    reservations.setAttribute('class', 'reservations');
    navBarElements.appendChild(reservations);

    let reservationInnerItem = document.createElement('div')
    reservationInnerItem.setAttribute('class', 'reservation-inner reservation-inner-item')
    reservations.appendChild(reservationInnerItem)

    let iconSection = document.createElement('div')
    iconSection.setAttribute('class', 'icon-section')
    reservationInnerItem.appendChild(iconSection)

    let faShoppingBasket = document.createElement('i')
    faShoppingBasket.setAttribute('class', 'fas fa-shopping-basket')
    iconSection.appendChild(faShoppingBasket)

    // item-section
    let itemSection = document.createElement('div')
    itemSection.setAttribute('class', 'item-section');
    reservationInnerItem.appendChild(itemSection);

    let itemSectionParagOne = document.createElement('p');
    let itemSectionParagTwo = document.createElement('p');
    itemSection.appendChild(itemSectionParagOne)
    itemSection.appendChild(itemSectionParagTwo)
    let itemSectionSmallOne = document.createElement('small');
    let itemSectionSmallTwo = document.createElement('small');
    itemSectionParagOne.appendChild(itemSectionSmallOne)
    itemSectionParagTwo.appendChild(itemSectionSmallTwo)
    itemSectionSmallOne.innerHTML = 'ITEM(S)';
    itemSectionSmallTwo.setAttribute('class', 'small-one');
    itemSectionParagTwo.innerHTML = '0';
    
    // total-section

    let totalSection = document.createElement('div')
    totalSection.setAttribute('class', 'total-section');
    reservationInnerItem.appendChild(totalSection);

    let totalSectionParagOne = document.createElement('p');
    let totalSectionParagTwo = document.createElement('p');
    totalSectionParagTwo.setAttribute('class', 'small-two');
    totalSection.appendChild(totalSectionParagOne)
    totalSection.appendChild(totalSectionParagTwo)
    let totalSectionSmallOne = document.createElement('small')
    let totalSectionSmallTwo = document.createElement('small')
    totalSectionParagOne.appendChild(totalSectionSmallOne)
    totalSectionParagTwo.appendChild(totalSectionSmallTwo)
    totalSectionSmallOne.innerHTML = 'TOTAL'
    totalSectionSmallTwo.innerHTML = '$0.00'

    let reservationInner = document.createElement('div');
    reservationInner.setAttribute('class', 'reservation-inner');
    reservationInner.innerHTML = 'RESERVATIONS';
    reservations.appendChild(reservationInner)

    // restaurant-details

    let restaurantDetails = document.createElement('div')
    restaurantDetails.setAttribute('class', 'restaurant-details');
    topSection.appendChild(restaurantDetails)

    let restaurantDetailsPg = document.createElement('p')
    restaurantDetailsPg.innerHTML = 'RESTAURANT'
    let restaurantDetailsH4 = document.createElement('h4')
    restaurantDetailsH4.innerHTML = "ALICAN'S"
    let restaurantDetailsSpan = document.createElement('span')
    restaurantDetailsSpan.innerHTML = 'Delicious flavours'
    let restaurantDetailsH5 = document.createElement('p')
    restaurantDetailsH5.innerHTML = 'FRESH AND DELICIOUS'
    restaurantDetails.appendChild(restaurantDetailsPg)
    restaurantDetails.appendChild(restaurantDetailsH4)
    restaurantDetails.appendChild(restaurantDetailsSpan)
    restaurantDetails.appendChild(restaurantDetailsH5)
    


}

export { navBar }