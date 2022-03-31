import React from 'react'
import '../../css/NavMenu.css'
import { FaUserPlus } from 'react-icons/fa'
import { GoSignIn } from 'react-icons/go'
import { GiLoincloth } from 'react-icons/gi'
import { BiPhoneCall } from 'react-icons/bi'
import { BsFillInfoCircleFill, BsWatch } from 'react-icons/bs'
import { MdExpandMore } from 'react-icons/md'
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai'

const NavMenu = ( { logo }:{ logo: string } ) => {
   const expand = (e:React.MouseEvent) => {
      const t = e.target as HTMLElement
      const ol = t.children[1] as HTMLElement
      const div = t.children[0] as HTMLElement
      const arrow = t.children[0].children[1] as HTMLElement

      ol.classList.toggle('active')

      const isActive = ol.classList.contains('active')

      if(isActive) {
         ol.style.height = 'auto'

         arrow.style.transform = 'translateY(-50%) rotate(180deg)'

         div.style.background = '#505050'

         const height = ol.clientHeight
   
         ol.style.height = '0'
   
         setTimeout(() => {
            ol.style.height = `${ height }px`
         }, 10);

         return
      }

      arrow.style.transform = 'translateY(-50%) rotate(0deg)'
      div.style.background = 'none'
      ol.style.height = '0px'
   }

   return (
      <aside className='nav-menu'>
         <figure>
            <img src={ logo } />
         </figure>
         <ul>
            <li> <GoSignIn /> Sign in</li>
            <li> <FaUserPlus /> Register</li>
            <li onClick={ expand } className='expand'>
               <div> <GiLoincloth /> Shop <MdExpandMore /> </div>
               <ol>
                  <li> <AiOutlineMan /> For men</li>
                  <li> <AiOutlineWoman /> For women</li>
                  <li> <BsWatch /> Accessories</li>
               </ol>
            </li>
            <li> <BsFillInfoCircleFill /> About</li>
            <li> <BiPhoneCall /> Contact</li>
         </ul>
      </aside>
   )
}

export default NavMenu