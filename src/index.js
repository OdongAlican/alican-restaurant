import _ from 'lodash';
import { navBar } from './navBar'
import { footer } from './footer'
import { home } from './home'


function component() {

  
navBar()
  
  home()
  document.getElementById('homeNav').addEventListener('click', function(){

    let displayContentHome = document.querySelector('.hide-restaurant-menu');

    if(displayContentHome){
      document.querySelector('.restaurant-menu').classList.remove('hide-restaurant-menu')
      document.querySelector('.testimonials-section').classList.remove('hide-testimonials-section')
    }
  });

  document.getElementById('menuNav').addEventListener('click', function(){
    document.querySelector('.restaurant-menu').classList.add('hide-restaurant-menu')
    document.querySelector('.testimonials-section').classList.add('hide-testimonials-section')
  })

  footer()
}
  
document.body.appendChild(component());