import React from 'react'
import '../../../css/Card.css'
import { CardType } from '../../../interfaces/cards_interfaces'
import Button from '../../reusable/Button'
import { AiOutlineEnter } from 'react-icons/ai'

const Card = ({ image, fillStyle, title, paragraph, action, listObject }:CardType) => {
  const styles = fillStyle === 'width' ? { width: '100%' } : { height: '100%' }

  return (
    <div className='card'>
      <figure>
        <img 
          style={ styles } 
          src={ image } 
          alt='product' 
        />
        <span className='enter-icon'> <AiOutlineEnter /> </span>
      </figure>

      <section>
        <h2>{ title }</h2>
        <p className='text'>{ paragraph }</p>
        <ul>
          {
            listObject.map((x, i:number) => (
              <li key={ i }>{ x.icon } { x.text }</li>
            ))
          }
        </ul>
        <Button text='shop' action={ action } cname='card-btn' />
      </section>
    </div>
  )
}

export default Card