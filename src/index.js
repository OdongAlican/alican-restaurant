import _ from 'lodash';
import { navBar } from './navBar'
import { footer } from './footer'

function component() {
  navBar()
  footer()
}
  
document.body.appendChild(component());