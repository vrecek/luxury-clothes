import React from 'react'
import Button from '../../reusable/Button'

const LeftSection = () => {
   type txt = 'Service' | 'About'
   const texts:{ Service:Array<string>, About:Array<string> } = {
      About: [
         'Who are we ?', 

         'Mauris dolor nisi, tincidunt vel egestas nec, ornare at ante. In hac habitasse platea dictumst. Duis a quam id leo placerat vehicula. Proin pharetra, nibh cursus vestibulum fringilla, justo nisi tempor nunc, et tincidunt metus lorem nec ex.', 

         'Vivamus ornare fringilla mauris in faucibus. Nam non nibh vitae mi ornare tincidunt. Suspendisse consequat ex elit, in sollicitudin enim convallis eget. Curabitur id orci eu diam ultricies commodo.'
      ],

      Service: [
         'What services we provide ?', 

         'Aenean in arcu lobortis lacus finibus convallis. Donec sed lorem sit amet sapien auctor consectetur. Praesent convallis consequat elit, ac vulputate erat scelerisque eget. Nulla euismod ipsum lorem, vel maximus.',

         'Phasellus viverra fermentum tellus, in hendrerit lectus pretium in. Suspendisse sed nisi eget massa tincidunt viverra. Suspendisse potenti. Donec sit amet euismod magna. Vivamus in velit sed ligula egestas tristique non quis ex.'
      ]
   }

   const changeText = (e:React.MouseEvent) => {
      const t = e.target as HTMLElement

      const parent = t.parentElement as HTMLElement
      const btn = Array.from(parent.children).filter(x => x.className === 'active')

      const textSection = t.parentElement?.parentElement?.children[1] as HTMLElement
      const [h1, p1, p2] = Array.from(textSection.children)

      const btnText:txt = t.children[0].textContent! as txt
      btn[0].className = ''
      t.className = 'active'

      let i = 0
      for(let x of [h1, p1, p2] as Array<HTMLElement>) {
         x.style.transition = '.5s'
         x.style.opacity = '0'

         setTimeout(() => {
            x.textContent = texts[btnText][i]
            ++i
            x.style.opacity = '1'
         }, 500);
      }
   }

   return (
      <article className='left-section'>
         <section className='buttons'>
            <Button text='About' action={ changeText } cname='active' />
            <Button text='Service' action={ changeText } cname='' />
         </section>

         <section className='text'>
            <h1>Who are we ?</h1>
            <p>Mauris dolor nisi, tincidunt vel egestas nec, ornare at ante. In hac habitasse platea dictumst. Duis a quam id leo placerat vehicula. Proin pharetra, nibh cursus vestibulum fringilla, justo nisi tempor nunc, et tincidunt metus lorem nec ex. </p>

            <p>Vivamus ornare fringilla mauris in faucibus. Nam non nibh vitae mi ornare tincidunt. Suspendisse consequat ex elit, in sollicitudin enim convallis eget. Curabitur id orci eu diam ultricies commodo.  </p>
         </section>
      </article>
   )
}

export default LeftSection