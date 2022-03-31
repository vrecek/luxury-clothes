import React from 'react'
import CardsTextContent from './CardsTextContent'
import handleView from '../../../functions/isInViewport'
import { useRef, useEffect } from 'react'

const CardsTextArticle = () => {
   return (
      <article className='cards-text'>
         <CardsTextContent
            headerText='Everything you need'  
            p1='Curabitur consequat urna porta, mollis purus ut, tincidunt felis. Quisque felis eros, tincidunt vitae lectus sed, pharetra volutpat metus'
            p2='Aliquam vitae tellus blandit, pharetra orci a, cursus enim. In tincidunt diam dolor, vitae porta nisl porta sit amet. Donec sagittis et ex vel cursus.'
         />

         <section className='line'></section>

         <CardsTextContent
            headerText='Highest quality possible'  
            p1='Quisque justo tellus, ullamcorper a magna ac, lacinia laoreet est. Curabitur id magna varius, aliquet orci in, viverra odio. Etiam bibendum nec nisi suscipit gravida.'
            p2='Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis placerat purus quam, eget interdum tellus tincidunt sed.'
         />
      </article>
   )
}

export default CardsTextArticle