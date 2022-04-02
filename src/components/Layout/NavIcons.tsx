import React from 'react'
import { NavigateIcons } from '../../interfaces/nav_interfaces'

const NavIcons = ({ cartIcon, logIcon, regIcon, showMenu }:NavigateIcons) => {
   return (
      <ul className='icons'>
         <li className='cart'> { cartIcon } <span>99</span> </li>
         <li className='datahover' data-text='Sign in'> { logIcon } </li>
         <li className='datahover' data-text='Register'> { regIcon } </li>
         <li onClick={ showMenu } className='menu'>
            <span></span>
            <span></span>
            <span></span>
         </li>
      </ul>
   )
}

export default NavIcons