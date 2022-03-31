import React from 'react'
import '../../css/Nav.css'
import logo from '../../images/logo.png'
import { BiLogIn, BiUserPlus } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import NavMenu from './NavMenu'
import NavIcons from './NavIcons'
import NavSearch from './NavSearch'
import NavLinks from './NavLinks'

const Nav = () => {
  const showMenu = (e:React.MouseEvent):void => {
    const t = e.target as HTMLElement

    const spans:Array<HTMLElement> = Array.from(t.children).map(x => x as HTMLElement)
    
    t.classList.toggle('clicked')
    const isClicked:boolean = t.classList.contains('clicked')

    const menu = t.parentElement?.parentElement?.lastChild as HTMLElement
    menu.style.transform = `translateX(${ isClicked ? 0 : 100 }%)`

    const top:Array<number> = isClicked ? [50, 50, 50] : [0, 50, 100]
    const rotate:Array<number> = isClicked ? [50, 50, 130] : [0, 0, 0]

    for(let i = 0; i <= 2; i++) {
      Object.assign(spans[i].style, {
        top: `${ top[i] }%`,
        transform: `translateY(-50%) rotate(${ rotate[i] }deg)`,
        background: isClicked ? 'red' : 'white'
      })
    }
  }

  const toggleSearch = (e:React.MouseEvent) => {
    const t = e.target as HTMLElement
    const input = t.parentElement!.children[1] as HTMLElement

    if(!t.classList.contains('toggled') && input.clientWidth) return

    const section = t.parentElement! as HTMLElement

    t.classList.toggle('toggled')

    if(t.classList.contains('toggled')) {
      section.style.position = 'absolute'
      section.style.top = '50%'
      section.style.left = '0'
      section.style.transform = 'translateY(-50%)'
      section.style.background = 'rgba(23,23,23,1)'
  
      input.style.width = '350px'
      input.style.maxWidth = '63vw'
      input.style.border = '1px solid #1F75FE'
      input.style.padding = '.5em'

      return
    }

    input.style.width = '0'

    setTimeout(() => {
      section.style.position = 'static'
      section.style.top = 'auto'
      section.style.left = 'auto'
      section.style.transform = 'translateY(0)'
      section.style.background = 'none'

      input.style.border = '0'
      input.style.padding = '0'
    }, 800);
  }

  return (
    <nav className='layout-nav'>
      <figure className='nav-logo'>
        <img src={ logo } alt='logo' />
      </figure>

      <NavLinks />
      
      <NavSearch toggleSearch={ toggleSearch } searchIcon={ <AiOutlineSearch /> } />

      <NavIcons cartIcon={ <FiShoppingCart /> } logIcon={ <BiLogIn /> } regIcon={ <BiUserPlus /> } showMenu={ showMenu } />

      <NavMenu logo={ logo } />
    </nav>
  )
}

export default Nav