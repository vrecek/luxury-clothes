import React from 'react'
import '../../../css/ReasonsCont.css'
import Reason from './Reason'
import { RiRefund2Line } from 'react-icons/ri'
import { BiSupport } from 'react-icons/bi'
import { FiShoppingCart } from 'react-icons/fi'

const ReasonsCont = () => {
   return (
      <section className='reasons-container'>
         <Reason 
            text='Lorem ipsum dolor sit amet ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame' 
            icon={ <RiRefund2Line /> }
            btnText='Refund here'
            ifText='Want to refund?'
         />

         <Reason 
            text='Lorem ipsum dolor sit amet ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame' 
            icon={ <FiShoppingCart /> }
            btnText='Visit shop'
            ifText='Want new outfit?'
         />

         <Reason 
            text='Lorem ipsum dolor sit amet ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame' 
            icon={ <BiSupport /> }
            btnText='Contact here'
            ifText='Have an issue?'
         />
      </section>
   )
}

export default ReasonsCont