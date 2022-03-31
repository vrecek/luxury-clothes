import React from 'react'
import { CardTextContentType } from '../../../interfaces/cards_interfaces'

const CardsTextContent = ({ headerText, p1, p2 }:CardTextContentType) => {
   return (
      <section>
         <h1>{ headerText }</h1>
         <p>{ p1 }</p>
         <p>{ p2 }</p>
      </section>
   )
}

export default CardsTextContent