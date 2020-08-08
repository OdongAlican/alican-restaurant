import { mainImage } from './logo' 

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
  
    const navButtons = () => {
        let navContents = [
            {
                className: 'home-section',
                contentID: 'homeNav',
                contentDetails: 'HOME'
            },
            {
                className: 'menu-section',
                contentID: 'menuNav',
                contentDetails: 'MENU'
            },
            {
                className: 'about-section',
                contentID: 'aboutNav',
                contentDetails: 'ABOUT'
            },
            {
                className: 'contact-section',
                contentID: 'contactNav',
                contentDetails: 'CONTACT'
            }
        ]

        for(let i = 0; i < navContents.length; i++){
            let homeSection = document.createElement('div');
            homeSection.setAttribute('class', `${ navContents[i].className }`);
            let homeSectionAnchor = document.createElement('button')
            homeSectionAnchor.setAttribute('id', `${ navContents[i].contentID }`)
            homeSectionAnchor.innerHTML = navContents[i].contentDetails
            homeSection.appendChild(homeSectionAnchor)
            innerContent.appendChild(homeSection);
        }   
    }

    navButtons()

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

    const itemsSection = () => {

        let itemsTotal = [
            {
                className: 'item-section',
                paragraphClass: 'small-one',
                items: 'ITEM(S)',
                total: '0'
            },
            {
                className: 'total-section',
                paragraphClass: 'small-two',
                items: 'TOTAL',
                total: '$0.00'
            }
        ]

        for(let j = 0; j < itemsTotal.length; j++){

            let itemSection = document.createElement('div')
            itemSection.setAttribute('class', `${ itemsTotal[j].className }`);
            reservationInnerItem.appendChild(itemSection);
            let itemSectionParagOne = document.createElement('p');
            let itemSectionParagTwo = document.createElement('p');
            itemSectionParagTwo.setAttribute('class', `${ itemsTotal[j].paragraphClass }`);
            itemSection.appendChild(itemSectionParagOne)
            itemSection.appendChild(itemSectionParagTwo)
            let itemSectionSmallOne = document.createElement('small');
            let itemSectionSmallTwo = document.createElement('small');
            itemSectionParagOne.appendChild(itemSectionSmallOne)
            itemSectionParagTwo.appendChild(itemSectionSmallTwo)
            itemSectionSmallOne.innerHTML = itemsTotal[j].items
            itemSectionParagTwo.innerHTML = itemsTotal[j].total

        }
    }

    itemsSection()

    let reservationInner = document.createElement('div');
    reservationInner.setAttribute('class', 'reservation-inner');
    reservationInner.innerHTML = 'RESERVATIONS';
    reservations.appendChild(reservationInner)

    topSection.appendChild(mainImage.homeLogo())
    topSection.appendChild(mainImage.menuLogo())
    topSection.appendChild(mainImage.aboutLogo())
    topSection.appendChild(mainImage.contactLogo())

}

export { navBar }