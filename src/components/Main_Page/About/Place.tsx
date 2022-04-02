import React from 'react'

const Place = ({ image, hoverText }:{ image: string, hoverText: string }) => {
   return (
      <div>

         <figure className='entry-image'>
            <img src={ image } alt='place' />
         </figure>
         
         <section>
            <h3>{ hoverText }</h3>
         </section>

      </div>
   ) 
}

export default Place