import React from 'react'
import Button from '../../reusable/Button'
import ReasonType from '../../../interfaces/reason_interface'

const Reason = ({ icon, text, btnText, ifText}:ReasonType) => {
   return (
      <article>
         <span className='icon'>{ icon }</span>
         <p>{ text }</p>
         <span className='separate'></span>
         <h3>{ ifText }</h3>
         <Button text={ btnText } cname='reason-btn' action={ () => {} } />
      </article>
   )
}

export default Reason