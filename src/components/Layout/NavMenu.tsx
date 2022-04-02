import React from 'react'
import '../../css/NavMenu.css'
import { FaUserPlus } from 'react-icons/fa'
import { GoSignIn } from 'react-icons/go'
import { GiLoincloth } from 'react-icons/gi'
import { BiPhoneCall } from 'react-icons/bi'
import { BsFillInfoCircleFill, BsWatch } from 'react-icons/bs'
import { MdExpandMore } from 'react-icons/md'
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai'
import { Navigation } from '../../functions/UsefulClasses'

const NavMenu = ( { logo }:{ logo: string } ) => {
   const navigation = new Navigation()

   const expand = (e:React.MouseEvent) => {
      const t = e.target as HTMLElement
      const ol = t.children[1] as HTMLElement
      const div = t.children[0] as HTMLElement
      const arrow = t.children[0].children[1] as HTMLElement

      navigation.dropDown(t, ol, arrow, { element: div, color: '#505050', defaultColor: 'none' })
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