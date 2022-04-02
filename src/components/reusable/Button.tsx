import React from 'react'
import ButtonExtended from '../../interfaces/button_reusable'

const Button = ({ text, action, additional, cname }:ButtonExtended) => {
   return (
      <button onClick={ action } className={ cname }>
         <label>{ text }</label>
         <span>{ additional }</span>
      </button>
   )
}

export default Button