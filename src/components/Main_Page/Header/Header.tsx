import React from 'react'
import '../../../css/Header.css'
import png from '../../../images/header.png'
import Button from '../../reusable/Button'
import { FaShopify } from 'react-icons/fa'
import { AiFillRead } from 'react-icons/ai'

const Header = () => {
   return (
      <header className='main-page-header'>
         <figure>
            <img src={ png } alt='header' />
         </figure>

         <section>
            <h1>Lorem ipsum dolor sit amet <span>conqestaur</span></h1>
            <p className='header-text'>Aliquam vitae tellus blandit, pharetra orci a, cursus enim. In tincidunt diam dolor, vitae porta nisl porta sit amet. Donec sagittis et ex vel cursus.</p>
            <div>
               <Button text='Check our shop' action={ () => {} } cname='btn btn-shop' additional={ <FaShopify /> } />
               <Button text='Learn about us' action={ () => {} } cname='btn btn-learn' additional={ <AiFillRead /> } />
            </div>     
         </section>
      </header>
   )
}

export default Header