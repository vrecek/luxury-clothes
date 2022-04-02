import React from 'react'
import '../../../css/BrandsList.css'
import b1 from '../../../images/brand1.png'
import b2 from '../../../images/brand2.png'
import b3 from '../../../images/brand3.png'
import b4 from '../../../images/brand4.png'

const BrandsList = () => {
   return (
      <section className='brands-list'>
         <h2>Other available brands</h2>

         <div>
            <img src={ b1 } alt='brand' />
            <img src={ b2 } alt='brand' />
            <img src={ b3 } alt='brand' />
            <img src={ b4 } alt='brand' />
         </div>
      </section>
   )
}

export default BrandsList