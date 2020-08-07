import _ from 'lodash';
import { navBar } from './navBar'
import { footer } from './footer'
import { home } from './home'

function component() {
  navBar()
  home()
  footer()
}
  
document.body.appendChild(component());