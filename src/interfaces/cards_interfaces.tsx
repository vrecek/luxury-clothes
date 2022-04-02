import { ReactElement } from "react"

export interface CardType {
   title: string,
   paragraph: string,
   action: React.MouseEventHandler,
   image: string,
   fillStyle?: string,
   listObject: Array<{
      icon: ReactElement,
      text: string
   }>
}

export interface CardTextContentType {
   headerText: string,
   p1: string,
   p2: string
}