import { ReactElement } from "react"

export interface NavigateIcons {
   cartIcon: ReactElement,
   logIcon: ReactElement,
   regIcon: ReactElement
   showMenu: React.MouseEventHandler
}

export interface NavigateSearch {
   toggleSearch: React.MouseEventHandler,
   searchIcon: ReactElement
}