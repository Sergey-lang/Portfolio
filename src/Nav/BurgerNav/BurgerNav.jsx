import React from 'react'
import s from './BurgerNav.module.scss'
import close from './../../common/assets/images/closeTrigger.png'

export const BurgerNav = (props) => {

   const Show = {
      right: 0
   }

   const Hide = {
      right: '-900px'
   }

   const ShowTrigger = {
      visibility: 'visible',
      opacity: 1,
      zIndex: 9999,
      background: '#000',
   }

   const HideTrigger = {
      right: '-900px',
      zIndex: -10,
      visibility: 'hidden',
   }

   return (
      <ul className={s.mainMenuNav}
          style={props.state ? Show : Hide}>
         {/*<div className={s.closeMenu} style={props.state ? ShowTrigger : HideTrigger}>*/}
         {/*   <span className={s.closeTrigger}>*/}
         {/*      <img src={close} alt="" onClick={() => props.changeState(false)}/>*/}
         {/*   </span>*/}
         {/*</div>*/}
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
