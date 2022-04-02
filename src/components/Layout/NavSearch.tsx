import React from 'react'
import { NavigateSearch } from '../../interfaces/nav_interfaces'

const NavSearch = ({ toggleSearch, searchIcon }:NavigateSearch) => {
   return (
      <section className='search-outer'>
        <section>
          <span onClick={ toggleSearch }> { searchIcon } </span>
          <input type='text' spellCheck='false' />
        </section>
      </section>
   )
}

export default NavSearch