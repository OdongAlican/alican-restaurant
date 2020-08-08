import _ from 'lodash';
import { navBar } from './navBar'
import { footer } from './footer'
import { home } from './home'
import { menu } from './menu'
import { about } from './about'

function component() {

  
navBar()
  
  home()
  menu()
  about()

  document.getElementById('homeNav').addEventListener('click', function(){

    let displayContentHome = document.querySelector('.hide-restaurant-menu');
    
    document.querySelector('.main-menu-section').classList.add('hide-main-menu-section')

    if(displayContentHome){
      document.querySelector('.restaurant-menu').classList.remove('hide-restaurant-menu')
      document.querySelector('.testimonials-section').classList.remove('hide-testimonials-section')
      document.querySelector('.about-us-section').classList.add('hide-about-us-section')
    }
  });

  document.getElementById('menuNav').addEventListener('click', function(){
    document.querySelector('.restaurant-menu').classList.add('hide-restaurant-menu')
    document.querySelector('.testimonials-section').classList.add('hide-testimonials-section')
    document.querySelector('.main-menu-section').classList.remove('hide-main-menu-section')
    document.querySelector('.about-us-section').classList.add('hide-about-us-section')

  })

  document.getElementById('aboutNav').addEventListener('click', function(){
    document.querySelector('.restaurant-menu').classList.add('hide-restaurant-menu')
    document.querySelector('.main-menu-section').classList.add('hide-main-menu-section')
    document.querySelector('.testimonials-section').classList.add('hide-testimonials-section')
    document.querySelector('.about-us-section').classList.remove('hide-about-us-section')
  })

  footer()
}
  
document.body.appendChild(component());