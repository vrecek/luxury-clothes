import React from 'react'
import '../../css/Footer.css'
import logo from '../../images/logo.png'
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiOutlinePhone } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'
import Button from '../reusable/Button'

const Footer = () => {
   return (
      <footer>
         <section className='infos'>

            <section className='logo'>
               <figure>
                  <img src={ logo } alt='logo' />
               </figure>

               <p>Lorem ipsum dolor sita met co Suspendisse potenti. Donec sit amet euismod magna. Nulla at pellentesque ligula. Sed turpis tellus, lobortis ac eros sed, elementum placerat metus.</p>

               <ol>
                  <li> <AiFillFacebook /> </li>
                  <li> <AiFillTwitterSquare /> </li>
                  <li> <FaGithubSquare /> </li>
                  <li> <AiFillInstagram /> </li>
               </ol>
            </section>

            <ul className='links'>
               <li className='first-li'>Navigation</li>
               <li>Homepage</li>
               <li>Shop</li>
               <li>Location</li>
               <li>About</li>
               <li>Contact</li>
            </ul>

            <section className='contact'>
               <h3>#Contact us</h3>
               <p>21-200 Cityname, Country - Streetname 12</p>

               <p>BOSS - John doe - 993 443 998 <AiOutlinePhone /> </p>
            </section>

            <section className='subscribe'>
               <h4>Subscribe to our newsletter</h4>
               <p>Mauris faucibus diam in lectus pharetra rutrum. Nulla euismod ipsum lorem.</p>
               <div>
                  <input spellCheck='false' type='text' placeholder='Your mail...' />
                  <Button text='Submit' cname='' action={ () => {} } />
               </div>
            </section>

         </section>

         <section className='paragraphs'>
            <p>&copy; All rights reserved by owners &copy;</p>
            <p>Lorem ipsum dolor sit amet</p>
         </section>
      </footer>
   )
}

export default Footer