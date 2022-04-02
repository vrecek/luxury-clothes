/* --------------------------------------------------------- NAVIGATION ------------------------------------------------ */

abstract class NavigationClass {
   protected abstract menuToggled: boolean
   protected abstract linesToggled: boolean

   public constructor() {  }

   public abstract animateThreeLines(
      threeSpansContainer: HTMLCollection, 
      showColor?: string,
      hideColor?: string
   ):void

   public abstract showMenu(
      menuToShow: HTMLElement, 
      menuShow_XValue?: number, 
      menuHide_XValue?: number
   ):void

   public abstract dropDown(
      targetList: HTMLElement,
      hiddenList: HTMLElement,
      arrowIcon?: HTMLElement,
      elementToColor?: {
         element: HTMLElement,
         color: string,
         defaultColor: string
      }
   ):void

   public abstract showScrollTop(
      element:HTMLElement,
      topScroll:number,
      styleOptions:any
   ):void
}

export class Navigation extends NavigationClass {
   protected menuToggled: boolean
   protected linesToggled: boolean

   public constructor() { 
      super() 
      this.menuToggled = false
      this.linesToggled = false
   }

   public showScrollTop(
      element:HTMLElement, 
      topScroll:number, 
      styleOptions:any
   ):void {

      let visible:boolean = false
      const defaultOptions:Array<{ x: string, v: string }> = []

      window.addEventListener('scroll', () => {
         if(!visible && window.scrollY > topScroll) {
            visible = true

            for(let x in styleOptions) {
               const defVal = window.getComputedStyle(element, null).getPropertyValue(x)

               defaultOptions.push({ x: x, v: defVal })

               element.style[x as any] = styleOptions[x]
            }

         }else if(window.scrollY < topScroll && visible) {
            visible = false

            for(let o of defaultOptions) {
               element.style[o.x as any] = o.v
            }
         }
      })
   }

   public showMenu(
      menuToShow:HTMLElement, 
      menuShow_XValue?:number, 
      menuHide_XValue?:number
   ):void {

      this.menuToggled = !this.menuToggled
      const clicked:boolean = this.menuToggled

      menuToShow.style.transform = `translateX(${ clicked ? menuShow_XValue || 0 : menuHide_XValue || 100 }%)`
   }

   public animateThreeLines(
      threeSpansContainer: HTMLCollection, 
      showColor?: string,
      hideColor?: string
   ):void {

      const spans:Array<HTMLElement> = Array.from(threeSpansContainer).map(x => x as HTMLElement)

      if(spans.length !== 3) {
         throw new Error('First argument must have exactly 3 children')
      }

      this.linesToggled = !this.linesToggled
      const clicked:boolean = this.linesToggled

      const top:Array<number> = clicked ? [50, 50, 50] : [0, 50, 100]
      const rotate:Array<number> = clicked ? [50, 50, 130] : [0, 0, 0]

      for(let i = 0; i <= 2; i++) {
         Object.assign(spans[i].style, {
            top: `${ top[i] }%`,
            transform: `translateY(-50%) rotate(${ rotate[i] }deg)`,
            background: clicked ? showColor || 'red' : hideColor || 'white'
         })
      }
   }

   public dropDown(
      targetList: HTMLElement,
      hiddenList: HTMLElement,
      arrowIcon?: HTMLElement,
      elementToColor?: {
         element: HTMLElement,
         color: string,
         defaultColor: string
      }
   ):void {

      targetList.classList.toggle('active')
      const isActive = targetList.classList.contains('active')

      // IF ACTIVE
      if(isActive) {
         hiddenList.style.height = 'auto'

         const height:number = hiddenList.clientHeight
   
         hiddenList.style.height = '0'

         if(arrowIcon) {
            arrowIcon.style.transform = 'translateY(-50%) rotate(180deg)'
         }
         if(elementToColor) {
            elementToColor.element.style.background = elementToColor.color
         }
         setTimeout(() => {
            hiddenList.style.height = `${ height }px`
         }, 10);

         return
      }

      // IF NOT ACTIVE
      if(arrowIcon) {
         arrowIcon.style.transform = 'translateY(-50%) rotate(0deg)'
      }
      if(elementToColor) {
         elementToColor.element.style.background = elementToColor.defaultColor
      }
      hiddenList.style.height = '0px'
   }
}

/* ---------------------------------------------------------------------------------------------------------------------- */