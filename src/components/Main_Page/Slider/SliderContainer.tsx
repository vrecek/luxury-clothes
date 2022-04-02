import React from 'react'
import '../../../css/SliderContainer.css'
import logo from '../../../images/newBrandLogo.png'
import s1 from '../../../images/s1.png'
import s2 from '../../../images/s2.png'
import s3 from '../../../images/s3.png'
import s4 from '../../../images/s4.png'
import SliderImages from './SliderImages'
import SliderInformation from './SliderInformation'

const SliderContainer = () => {
   return (
      <section className='slider-container'>
         <h1>New prestigous brand <span className='color'>available</span> <span className='titleline'></span></h1>

         <section className='wrap'>

            <SliderImages images={ [s4, s1, s2, s3, s4, s1] } />

            <SliderInformation logo={ logo } />

         </section>
         
      </section>
   )
}

export default SliderContainer