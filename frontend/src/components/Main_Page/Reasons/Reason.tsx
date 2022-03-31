import React from 'react'
import Button from '../../reusable/Button'

const Reason = ({ icon, text, btnText, ifText}:any) => {
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