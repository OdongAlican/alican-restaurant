import _ from 'lodash';
import { navBar } from './navBar'
import { footer } from './footer'
import { home } from './home'
import { menu } from './menu'

function component() {

  
navBar()
  
  home()
  menu()
  document.getElementById('homeNav').addEventListener('click', function(){

    let displayContentHome = document.querySelector('.hide-restaurant-menu');
    
    document.querySelector('.main-menu-section').classList.add('hide-main-menu-section')

    if(displayContentHome){
      document.querySelector('.restaurant-menu').classList.remove('hide-restaurant-menu')
      document.querySelector('.testimonials-section').classList.remove('hide-testimonials-section')
    }
  });

  document.getElementById('menuNav').addEventListener('click', function(){
    document.querySelector('.restaurant-menu').classList.add('hide-restaurant-menu')
    document.querySelector('.testimonials-section').classList.add('hide-testimonials-section')
    document.querySelector('.main-menu-section').classList.remove('hide-main-menu-section')
  })

  footer()
}
  
document.body.appendChild(component());