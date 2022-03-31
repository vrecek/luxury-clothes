import React from 'react'
import Card from './Card'
import { FiShoppingCart } from 'react-icons/fi'
import card1 from '../../../images/card1.png'
import card2 from '../../../images/card2.png'
import card3 from '../../../images/card3.png'
import card4 from '../../../images/card4.png'
import card5 from '../../../images/card5.png'
import card6 from '../../../images/card6.png'

const CardsCards = () => {
   return (
      <article className='cards-cards'>
         <section className='card-row'>
            <Card 
               fillStyle='width' 
               image={ card1 } 
               title='Tuxedos' 
               paragraph='Lorem ipsum dolor sit amet' 
               action={ () => {} }
               listObject={ [{ icon: <FiShoppingCart />, text: 'Saggitisgggg' }, { icon: <FiShoppingCart />, text: 'Quisquet' }, { icon: <FiShoppingCart />, text: 'Tincidunt' }] }
            />
            
            <Card 
               fillStyle='width' 
               image={ card2 } 
               title='Suit pants' 
               paragraph='Lorem ipsum dolor sit amet' 
               action={ () => {} }
               listObject={ [{ icon: <FiShoppingCart />, text: 'Saggitisgggg' }, { icon: <FiShoppingCart />, text: 'Quisquet' }, { icon: <FiShoppingCart />, text: 'Tincidunt' }] }
            />

            <Card 
               image={ card3 } 
               title='Suit shoes' 
               paragraph='Lorem ipsum dolor sit amet' 
               action={ () => {} }
               listObject={ [{ icon: <FiShoppingCart />, text: 'Saggitisgggg' }, { icon: <FiShoppingCart />, text: 'Quisquet' }, { icon: <FiShoppingCart />, text: 'Tincidunt' }] }
            />
         </section>

         <section className='card-row'>
            <Card 
               image={ card4 } 
               title='Watches' 
               paragraph='Lorem ipsum dolor sit amet' 
               action={ () => {} }
               listObject={ [{ icon: <FiShoppingCart />, text: 'Saggitisgggg' }, { icon: <FiShoppingCart />, text: 'Quisquet' }, { icon: <FiShoppingCart />, text: 'Tincidunt' }] }
            />

            <Card 
               image={ card5 } 
               title='Ties' 
               paragraph='Lorem ipsum dolor sit amet' 
               action={ () => {} }
               listObject={ [{ icon: <FiShoppingCart />, text: 'Saggitisgggg' }, { icon: <FiShoppingCart />, text: 'Quisquet' }, { icon: <FiShoppingCart />, text: 'Tincidunt' }] }
            />

            <Card 
               image={ card6 } 
               title='Rings' 
               paragraph='Lorem ipsum dolor sit amet' 
               action={ () => {} }
               listObject={ [{ icon: <FiShoppingCart />, text: 'Saggitisgggg' }, { icon: <FiShoppingCart />, text: 'Quisquet' }, { icon: <FiShoppingCart />, text: 'Tincidunt' }] }
            />
         </section>
      </article>
   )
}

export default CardsCards