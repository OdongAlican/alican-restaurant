import { mainImage } from './logo';

const navBar = () => {
  const content = document.getElementById('content');
  content.setAttribute('class', 'container');

  const topSection = document.createElement('div');
  content.appendChild(topSection);
  topSection.setAttribute('class', 'top-section');

  const navBarElements = document.createElement('div');
  topSection.appendChild(navBarElements);
  navBarElements.setAttribute('class', 'nav-bar-elements');

  const logoSection = document.createElement('div');
  logoSection.setAttribute('class', 'logo-section');
  navBarElements.appendChild(logoSection);

  const pageAnchor = document.createElement('a');
  pageAnchor.innerHTML = 'RESTAURANT';
  logoSection.appendChild(pageAnchor);

  const innerContent = document.createElement('div');
  innerContent.setAttribute('class', 'inner-content');
  navBarElements.appendChild(innerContent);

  const navButtons = () => {
    const navContents = [
      {
        className: 'home-section',
        contentID: 'homeNav',
        contentDetails: 'HOME',
      },
      {
        className: 'menu-section',
        contentID: 'menuNav',
        contentDetails: 'MENU',
      },
      {
        className: 'about-section',
        contentID: 'aboutNav',
        contentDetails: 'ABOUT',
      },
      {
        className: 'contact-section',
        contentID: 'contactNav',
        contentDetails: 'CONTACT',
      },
    ];

    for (let i = 0; i < navContents.length; i += 1) {
      const homeSection = document.createElement('div');
      homeSection.setAttribute('class', `${navContents[i].className}`);
      const homeSectionAnchor = document.createElement('button');
      homeSectionAnchor.setAttribute('id', `${navContents[i].contentID}`);
      homeSectionAnchor.innerHTML = navContents[i].contentDetails;
      homeSection.appendChild(homeSectionAnchor);
      innerContent.appendChild(homeSection);
    }
  };

  navButtons();

  const reservations = document.createElement('div');
  reservations.setAttribute('class', 'reservations');
  navBarElements.appendChild(reservations);

  const reservationInnerItem = document.createElement('div');
  reservationInnerItem.setAttribute('class', 'reservation-inner reservation-inner-item');
  reservations.appendChild(reservationInnerItem);

  const iconSection = document.createElement('div');
  iconSection.setAttribute('class', 'icon-section');
  reservationInnerItem.appendChild(iconSection);

  const faShoppingBasket = document.createElement('i');
  faShoppingBasket.setAttribute('class', 'fas fa-shopping-basket');
  iconSection.appendChild(faShoppingBasket);

  const itemsSection = () => {
    const itemsTotal = [
      {
        className: 'item-section',
        paragraphClass: 'small-one',
        items: 'ITEM(S)',
        total: '0',
      },
      {
        className: 'total-section',
        paragraphClass: 'small-two',
        items: 'TOTAL',
        total: '$0.00',
      },
    ];

    for (let j = 0; j < itemsTotal.length; j += 1) {
      const itemSection = document.createElement('div');
      itemSection.setAttribute('class', `${itemsTotal[j].className}`);
      reservationInnerItem.appendChild(itemSection);
      const itemSectionParagOne = document.createElement('p');
      const itemSectionParagTwo = document.createElement('p');
      itemSectionParagTwo.setAttribute('class', `${itemsTotal[j].paragraphClass}`);
      itemSection.appendChild(itemSectionParagOne);
      itemSection.appendChild(itemSectionParagTwo);
      const itemSectionSmallOne = document.createElement('small');
      const itemSectionSmallTwo = document.createElement('small');
      itemSectionParagOne.appendChild(itemSectionSmallOne);
      itemSectionParagTwo.appendChild(itemSectionSmallTwo);
      itemSectionSmallOne.innerHTML = itemsTotal[j].items;
      itemSectionParagTwo.innerHTML = itemsTotal[j].total;
    }
  };

  itemsSection();

  const reservationInner = document.createElement('div');
  reservationInner.setAttribute('class', 'reservation-inner');
  reservationInner.innerHTML = 'RESERVATIONS';
  reservations.appendChild(reservationInner);

  topSection.appendChild(mainImage.homeLogo());
  topSection.appendChild(mainImage.menuLogo());
  topSection.appendChild(mainImage.aboutLogo());
  topSection.appendChild(mainImage.contactLogo());
};

export { navBar };