import React from 'react'
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai'
import { FaPhoneSquareAlt } from 'react-icons/fa'

const SliderInformation = ({ logo }:{ logo: string }) => {
   return (
      <article>

         <figure>
            <img src={ logo } alt='newlogo' />
            <figcaption>Lorem ipsum</figcaption>
         </figure>

         <p>Suspendisse nec tellus feugiat, pretium turpis volutpat, porttitor nulla. Pellentesque auctor pulvinar libero, eu aliquam ante ornare at. Mauris justo ipsum, suscipit quis imperdiet at, venenatis sed lorem. Morbi convallis quis felis vitae tincidunt</p>

         <section>
            <span data-text='Phone'><FaPhoneSquareAlt /> </span>
            <span data-text='Instagram'><AiFillInstagram /> </span>
            <span data-text='Twitter'><AiFillTwitterSquare /> </span>
            <span data-text='Facebook'><AiFillFacebook /> </span>
         </section>

      </article>
   )
}

export default SliderInformation