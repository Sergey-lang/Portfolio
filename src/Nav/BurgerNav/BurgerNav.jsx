import React from 'react'
import s from './BurgerNav.module.scss'

export const BurgerNav = (props) => {

   const Show = {
      right: 0
   }

   const Hide = {
      right: '-900px'
   }

   return (
      <ul className={s.mainMenu}
          style={props.state ? Show : Hide}>
         <li className={s.menuItem}>
            <a href="">Main</a>
         </li>
         <li className={s.menuItem}>
            <a href="">Skills</a>
         </li>
         <li className={s.menuItem}>
            <a href="">Projects</a>
         </li>
         <li className={s.menuItem}>
            <a href="">Contacts</a>
         </li>
      </ul>
   )
}
