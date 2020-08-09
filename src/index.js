import navBar from './navBar';
import footer from './footer';
import home from './home';
import menu from './menu';
import about from './about';
import contact from './contact';

function component() {
  navBar();

  home();
  menu();
  about();
  contact();
  document.getElementById('homeNav').addEventListener('click', () => {
    const displayContentHome = document.querySelector('.hide-restaurant-menu');

    document.querySelector('.main-menu-section').classList.add('hide-main-menu-section');

    if (displayContentHome) {
      document.querySelector('.restaurant-menu').classList.remove('hide-restaurant-menu');
      document.querySelector('.testimonials-section').classList.remove('hide-testimonials-section');
      document.querySelector('.about-us-section').classList.add('hide-about-us-section');
      document.querySelector('.contact-inputs').classList.add('hide-contact-inputs');
      document.querySelector('.restaurant-menu-menu').classList.add('hide-menu-logo');
      document.querySelector('.restaurant-details').classList.remove('hide-home-logo');
      document.querySelector('.restaurant-menu-about').classList.add('hide-about-logo');
      document.querySelector('.restaurant-menu-contact').classList.add('hide-contact-logo');

      document.getElementById('homeNav').classList.add('active-button');
      document.getElementById('menuNav').classList.remove('active-button');
      document.getElementById('aboutNav').classList.remove('active-button');
      document.getElementById('contactNav').classList.remove('active-button');
    }
  });

  document.getElementById('menuNav').addEventListener('click', () => {
    document.querySelector('.restaurant-menu').classList.add('hide-restaurant-menu');
    document.querySelector('.testimonials-section').classList.add('hide-testimonials-section');
    document.querySelector('.main-menu-section').classList.remove('hide-main-menu-section');
    document.querySelector('.about-us-section').classList.add('hide-about-us-section');
    document.querySelector('.contact-inputs').classList.add('hide-contact-inputs');
    document.querySelector('.restaurant-menu-menu').classList.remove('hide-menu-logo');
    document.querySelector('.restaurant-details').classList.add('hide-home-logo');
    document.querySelector('.restaurant-menu-about').classList.add('hide-about-logo');
    document.querySelector('.restaurant-menu-contact').classList.add('hide-contact-logo');

    document.getElementById('homeNav').classList.remove('active-button');
    document.getElementById('menuNav').classList.add('active-button');
    document.getElementById('aboutNav').classList.remove('active-button');
    document.getElementById('contactNav').classList.remove('active-button');
  });

  document.getElementById('aboutNav').addEventListener('click', () => {
    document.querySelector('.restaurant-menu').classList.add('hide-restaurant-menu');
    document.querySelector('.main-menu-section').classList.add('hide-main-menu-section');
    document.querySelector('.testimonials-section').classList.add('hide-testimonials-section');
    document.querySelector('.about-us-section').classList.remove('hide-about-us-section');
    document.querySelector('.contact-inputs').classList.add('hide-contact-inputs');
    document.querySelector('.restaurant-menu-about').classList.remove('hide-about-logo');
    document.querySelector('.restaurant-menu-menu').classList.add('hide-menu-logo');
    document.querySelector('.restaurant-details').classList.add('hide-home-logo');
    document.querySelector('.restaurant-menu-contact').classList.add('hide-contact-logo');


    document.getElementById('homeNav').classList.remove('active-button');
    document.getElementById('menuNav').classList.remove('active-button');
    document.getElementById('aboutNav').classList.add('active-button');
    document.getElementById('contactNav').classList.remove('active-button');
  });

  document.getElementById('contactNav').addEventListener('click', () => {
    document.querySelector('.restaurant-menu').classList.add('hide-restaurant-menu');
    document.querySelector('.main-menu-section').classList.add('hide-main-menu-section');
    document.querySelector('.testimonials-section').classList.add('hide-testimonials-section');
    document.querySelector('.about-us-section').classList.add('hide-about-us-section');
    document.querySelector('.contact-inputs').classList.remove('hide-contact-inputs');
    document.querySelector('.restaurant-menu-contact').classList.remove('hide-contact-logo');
    document.querySelector('.restaurant-menu-about').classList.add('hide-about-logo');
    document.querySelector('.restaurant-menu-menu').classList.add('hide-menu-logo');
    document.querySelector('.restaurant-details').classList.add('hide-home-logo');


    document.getElementById('homeNav').classList.remove('active-button');
    document.getElementById('menuNav').classList.remove('active-button');
    document.getElementById('aboutNav').classList.remove('active-button');
    document.getElementById('contactNav').classList.add('active-button');
  });

  footer();
}

document.body.appendChild(component());