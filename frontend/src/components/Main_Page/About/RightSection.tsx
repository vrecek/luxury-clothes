import React from 'react'
import shop from '../../../images/shop.png'
import Place from './Place'

const RightSection = () => {
   return (
      <article className='right-section'>
         <h1>Our main direct place</h1>

         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6191.337796660277!2d-100.47428187412926!3d39.11400769258838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87a072252aaf6747%3A0x71dd52d68304ed53!2sGrainfield%2C%20Kansas%2067737%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1648759489051!5m2!1spl!2spl" loading="lazy" ></iframe>

         <h1>Other places</h1>

         <section>
            <Place hoverText='Blandit diam' image={ shop } />
            <Place hoverText='Suscipit faucibus' image={ shop } />
            <Place hoverText='Pulvinar orci' image={ shop } />
         </section>
      </article>
   )
}

export default RightSection