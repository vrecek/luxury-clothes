import React from 'react'
import '../../../css/Contact.css'
import Button from '../../reusable/Button'

const Contact = () => {
   const [msgResult, setMsgResult] = React.useState<{ succ: boolean, msg: string } | null>(null)

   const focus = (e:React.FormEvent) => {
      const t = e.target as HTMLInputElement

      t.style.borderColor = 'rgb(0, 147, 206)'
   }
   const blur = (e:React.FormEvent) => {
      const t = e.target as HTMLInputElement

      if(!t.value) t.style.borderColor = 'rgb(202, 202, 202)'
   }

   const sendMessage = (e:React.FormEvent) => {
      e.preventDefault()

      if(msgResult) return

      const t = e.target as HTMLFormElement

      const elements = Array.from(t.elements as HTMLCollectionOf<HTMLInputElement>)
      elements.pop()

      const [vname, vmail, vsubject, vtext] = elements.map(x => x.value)

      setTimeout(() => { setMsgResult(null) }, 3000)

      if(!vname || !vmail || !vsubject || !vtext) {
         setMsgResult({ succ: false, msg: 'All fields are required' })
         return
      }

      for(let x of elements) {
         x.value = ''
         x.style.borderColor = 'rgb(202, 202, 202)'
      }
      setMsgResult({ succ: true, msg: 'Successfully sent' })
   }

   return (
      <section className='contact-us'>
         <article>
            <section>
               <h1>Contact us directly</h1>
               <p>lorem ipsum dolor sit amet conqesteaur</p>
            </section>

            <form onSubmit={ sendMessage }>
               {
                  msgResult && <h2 className={ msgResult.succ.toString() }>{ msgResult.msg }</h2>
               }

               <div>
                  <input onBlur={ blur } onFocus={ focus } type='text' placeholder='Username...' />
                  <input onBlur={ blur } onFocus={ focus } type='text' placeholder='Mail...' />
               </div>

               <input onBlur={ blur } onFocus={ focus } className='subject' type='text' placeholder='Subject...' />

               <textarea onBlur={ blur } onFocus={ focus } spellCheck='false'></textarea>

               <Button text='SEND' cname='' action={ () => {} } />
            </form>
         </article>
      </section>
   )
}

export default Contact