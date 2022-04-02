import React from 'react'
import '../../../css/AboutSection.css'
import png from '../../../images/aboutman1.png'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const AboutSection = () => {
   return (
      <section className='about-section'>
         <LeftSection />

         <figure>
            <img src={ png } alt='man' />
         </figure>

         <RightSection />
      </section>
   )
}

export default AboutSection