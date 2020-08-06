import _ from 'lodash';

function component() {

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
    homeSection.setAttribute('class', 'home-section')
    let homeSectionAnchor = document.createElement('a')
    homeSectionAnchor.innerHTML = "HOME";
    homeSection.appendChild(homeSectionAnchor)
    innerContent.appendChild(homeSection);

    // menu section

    let menuSection = document.createElement('div');
    menuSection.setAttribute('class', 'menu-section')
    let menuSectionAnchor = document.createElement('a')
    menuSectionAnchor.innerHTML = "MENU";
    menuSection.appendChild(menuSectionAnchor)
    innerContent.appendChild(menuSection);

     // about section

     let aboutSection = document.createElement('div');
     aboutSection.setAttribute('class', 'about-section')
     let aboutSectionAnchor = document.createElement('a')
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

    
    let restaurantHeader = document.createElement('p');
    restaurantHeader.innerHTML = 'RESTAURANT';
    let ownerName = document.createElement('h4');
    ownerName.innerHTML = "ALICAN'S";
    console.log('test')

    return content;
  }
  
  document.body.appendChild(component());