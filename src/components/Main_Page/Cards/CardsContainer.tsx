import React from 'react'
import '../../../css/CardsContainer.css'
import CardsTextArticle from './CardsText.Article'
import CardsCards from './CardsCards'

const CardsContainer = () => {
   return (
      <section className='cards-container'>
         <CardsTextArticle />         

         <CardsCards />
      </section>
   )
}

export default CardsContainer