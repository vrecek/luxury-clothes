import React from 'react'
import { BiArrowFromRight, BiArrowFromLeft } from 'react-icons/bi'
import { useEffect, useRef } from 'react'

const SliderImages = ({ images }:{ images: string[] }) => {
   const initialMove = useRef<HTMLDivElement>(null)
   const radios = useRef<HTMLDivElement>(null)
   
   let interval:NodeJS.Timer
   let counter:number = 1
   let finished:boolean = true

   const moveImage = (e:React.MouseEvent, dir:string) => {
      if(!finished) return

      finished = false

      clearInterval(interval)

      const t = e.target as HTMLElement
      const container = t.parentElement!.children[2].children[0] as HTMLElement

      dir === 'right' ? ++counter : --counter

      let radioNum = counter - 1
      if(counter >= images.length - 1) radioNum = 0
      else if(counter === 0) radioNum = images.length - 3
      radioClass(radioNum)

      container.style.transition = '1s'
      container.style.transform = `translateX(-${ 100 * counter }%)`
      interval = setInterval(() => intervalFunc(container), 5000)
   }

   useEffect(() => {
      const sliderCont = initialMove.current! as HTMLElement

      sliderCont.style.transform = 'translateX(-100%)'
   
      radios.current!.children[0].className = 'active'


      // interval
      interval = setInterval(() => intervalFunc(sliderCont), 5000)


      // circle buttons
      for(let i = 0; i <= images.length - 3; i++) {
         radios.current!.children[i].addEventListener('click', () => {
            clearInterval(interval)

            radioClass(i)

            sliderCont.style.transition = '1s'
            sliderCont.style.transform = `translateX(-${ 100 * (i + 1) }%)`
            counter = i + 1

            interval = setInterval(() => intervalFunc(sliderCont), 5000)
         })
      }
      

      // transition end
      sliderCont.addEventListener('transitionend', () => {
         finished = true

         if(counter >= images.length - 1) {
            sliderCont.style.transition = '0s'
            sliderCont.style.transform = 'translateX(-100%)'
            counter = 1

         }else if(counter === 0) {
            console.log(images.length);
            sliderCont.style.transition = '0s'
            sliderCont.style.transform = `translateX(-${ 100 * (images.length - 2) }%)`
            counter = images.length - 2
         }
      })
   }, [])

   function radioClass(num:number):void {
      const children = Array.from(radios.current!.children)

      for(let x of children) x.className = ''

      children[num].className = 'active'
   }

   function intervalFunc(sliderCont:HTMLElement):void {
      if(!document.hasFocus()) return

      ++counter

      sliderCont.style.transition = '1s'
      sliderCont.style.transform = `translateX(-${ 100 * counter }%)`
      radioClass(counter >= images.length - 1 ? 0 : counter - 1)
   }

   return (
      <figure className='slider-figure'>
         <section ref={ radios }>
            {
               [...Array(images.length - 2)].map((x, i) => (
                  <div key={ i }></div>
               ))
            }
         </section>

         <span onClick={ (e) => moveImage(e, 'left') }> <BiArrowFromRight /> </span>

         <div className='figure'>
            <div ref={ initialMove }>
               {
                  images.map((x, i) => (
                     <img key={ i } src={ x } alt='image' />
                  ))
               }
            </div>
         </div>

         <span onClick={ (e) => moveImage(e, 'right') }> <BiArrowFromLeft /> </span>
      </figure>
   )
}

export default SliderImages