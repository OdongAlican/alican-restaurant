import _ from 'lodash';
import { navBar } from './navBar'
import { footer } from './footer'
import { home } from './home'
import { menu } from './menu'
import { about } from './about'
import { contact } from './contact'

function component() {

  
navBar()
  
  home()
  menu()
  about()
  contact()
  document.getElementById('homeNav').addEventListener('click', function(){

    let displayContentHome = document.querySelector('.hide-restaurant-menu');
    
    document.querySelector('.main-menu-section').classList.add('hide-main-menu-section')

    if(displayContentHome){
      document.querySelector('.restaurant-menu').classList.remove('hide-restaurant-menu')
      document.querySelector('.testimonials-section').classList.remove('hide-testimonials-section')
      document.querySelector('.about-us-section').classList.add('hide-about-us-section')
      document.querySelector('.contact-inputs').classList.add('hide-contact-inputs')
      document.querySelector('.restaurant-menu-menu').classList.add('hide-menu-logo')
      document.querySelector('.restaurant-details').classList.remove('hide-home-logo')
      document.querySelector('.restaurant-menu-about').classList.add('hide-about-logo')
      document.querySelector('.restaurant-menu-contact').classList.add('hide-contact-logo')
    }
  });

  document.getElementById('menuNav').addEventListener('click', function(){
    document.querySelector('.restaurant-menu').classList.add('hide-restaurant-menu')
    document.querySelector('.testimonials-section').classList.add('hide-testimonials-section')
    document.querySelector('.main-menu-section').classList.remove('hide-main-menu-section')
    document.querySelector('.about-us-section').classList.add('hide-about-us-section')
    document.querySelector('.contact-inputs').classList.add('hide-contact-inputs')
    document.querySelector('.restaurant-menu-menu').classList.remove('hide-menu-logo')
    document.querySelector('.restaurant-details').classList.add('hide-home-logo')
    document.querySelector('.restaurant-menu-about').classList.add('hide-about-logo')
    document.querySelector('.restaurant-menu-contact').classList.add('hide-contact-logo')
  })

  document.getElementById('aboutNav').addEventListener('click', function(){
    document.querySelector('.restaurant-menu').classList.add('hide-restaurant-menu')
    document.querySelector('.main-menu-section').classList.add('hide-main-menu-section')
    document.querySelector('.testimonials-section').classList.add('hide-testimonials-section')
    document.querySelector('.about-us-section').classList.remove('hide-about-us-section')
    document.querySelector('.contact-inputs').classList.add('hide-contact-inputs')
    document.querySelector('.restaurant-menu-about').classList.remove('hide-about-logo')
    document.querySelector('.restaurant-menu-menu').classList.add('hide-menu-logo')
    document.querySelector('.restaurant-details').classList.add('hide-home-logo')
    document.querySelector('.restaurant-menu-contact').classList.add('hide-contact-logo')
  })

  document.getElementById('contactNav').addEventListener('click', function(){
    document.querySelector('.restaurant-menu').classList.add('hide-restaurant-menu')
    document.querySelector('.main-menu-section').classList.add('hide-main-menu-section')
    document.querySelector('.testimonials-section').classList.add('hide-testimonials-section')
    document.querySelector('.about-us-section').classList.add('hide-about-us-section')
    document.querySelector('.contact-inputs').classList.remove('hide-contact-inputs')
    document.querySelector('.restaurant-menu-contact').classList.remove('hide-contact-logo')
    document.querySelector('.restaurant-menu-about').classList.add('hide-about-logo')
    document.querySelector('.restaurant-menu-menu').classList.add('hide-menu-logo')
    document.querySelector('.restaurant-details').classList.add('hide-home-logo')
  })

  footer()
}
  
document.body.appendChild(component());