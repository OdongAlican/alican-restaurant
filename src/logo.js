const mainImage = (() => {
  const contactLogo = () => {
    const restaurantMenuContact = document.createElement('div');
    restaurantMenuContact.setAttribute('class', 'restaurant-menu-contact hide-contact-logo');

    const centralRestaurantSection = document.createElement('div');
    centralRestaurantSection.setAttribute('class', 'central-restaurant-section contact-restaurant');
    restaurantMenuContact.appendChild(centralRestaurantSection);

    const logoDetails = [
      {
        className: 'restaurant-label',
        text: "ALICAN'S",
      },
      {
        className: 'menu-label',
        text: 'Contact Us',
      },
      {
        className: 'flavour-label',
        text: 'Or call us at 00 40 555 1234 any day from',
      },
      {
        className: 'restaurant-label',
        text: '10:00 AM - 07:00 PM',
      },
    ];

    for (let i = 0; i < logoDetails.length; i += 1) {
      const contactLogoPg = document.createElement('p');
      contactLogoPg.setAttribute('class', `${logoDetails[i].className}`);
      contactLogoPg.innerHTML = logoDetails[i].text;
      centralRestaurantSection.appendChild(contactLogoPg);
    }

    return restaurantMenuContact;
  };

  const menuLogo = () => {
    const restaurantMenu = document.createElement('div');
    restaurantMenu.setAttribute('class', 'restaurant-menu-menu hide-menu-logo');

    const centralRestaurantSection = document.createElement('div');
    centralRestaurantSection.setAttribute('class', 'central-restaurant-section contact-restaurant');
    restaurantMenu.appendChild(centralRestaurantSection);

    const logoDetails = [
      {
        className: 'restaurant-label',
        text: 'RESTAURANT',
      },
      {
        className: 'menu-label',
        text: 'Menu',
      },
      {
        className: 'flavour-label',
        text: 'JUICY FLAVOURS',
      },
    ];

    for (let i = 0; i < logoDetails.length; i += 1) {
      const contactLogoPg = document.createElement('p');
      contactLogoPg.setAttribute('class', `${logoDetails[i].className}`);
      contactLogoPg.innerHTML = logoDetails[i].text;
      centralRestaurantSection.appendChild(contactLogoPg);
    }

    return restaurantMenu;
  };

  const aboutLogo = () => {
    const restaurantAbout = document.createElement('div');
    restaurantAbout.setAttribute('class', 'restaurant-menu-about hide-about-logo');

    const centralRestaurantSection = document.createElement('div');
    centralRestaurantSection.setAttribute('class', 'central-restaurant-section');
    restaurantAbout.appendChild(centralRestaurantSection);

    const logoDetails = [
      {
        className: 'restaurant-label',
        text: 'RESTAURANT',
      },
      {
        className: 'menu-label',
        text: 'About',
      },
      {
        className: 'flavour-label',
        text: 'We Cook & Blog to your liking',
      },
      {
        className: 'restaurant-label',
        text: "Danny's",
      },
    ];

    for (let i = 0; i < logoDetails.length; i += 1) {
      const contactLogoPg = document.createElement('p');
      contactLogoPg.setAttribute('class', `${logoDetails[i].className}`);
      contactLogoPg.innerHTML = logoDetails[i].text;
      centralRestaurantSection.appendChild(contactLogoPg);
    }

    return restaurantAbout;
  };

  const homeLogo = () => {
    const restaurantDetails = document.createElement('div');
    restaurantDetails.setAttribute('class', 'restaurant-details');

    const restaurantDetailsPg = document.createElement('p');
    restaurantDetailsPg.innerHTML = 'RESTAURANT';
    const restaurantDetailsH4 = document.createElement('h4');
    restaurantDetailsH4.innerHTML = "ALICAN'S";
    const restaurantDetailsSpan = document.createElement('span');
    restaurantDetailsSpan.innerHTML = 'Delicious flavours';
    const restaurantDetailsH5 = document.createElement('p');
    restaurantDetailsH5.innerHTML = 'FRESH AND DELICIOUS';
    restaurantDetails.appendChild(restaurantDetailsPg);
    restaurantDetails.appendChild(restaurantDetailsH4);
    restaurantDetails.appendChild(restaurantDetailsSpan);
    restaurantDetails.appendChild(restaurantDetailsH5);
    return restaurantDetails;
  };


  return {
    homeLogo, contactLogo, menuLogo, aboutLogo,
  };
})();

export default mainImage;