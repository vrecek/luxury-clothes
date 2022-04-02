import { ReactElement } from "react";

export default interface ButtonExtended {
   text: string,
   action: React.MouseEventHandler,
   cname: string,
   additional?: string | ReactElement
}