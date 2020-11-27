import React from 'react'
import s from './Header.module.css'
import {Nav} from '../Nav/Nav'
import sContainer from '../common/styles/Container.module.css';
import triggerMenu from  './../common/assets/images/hamburger-menu.svg'

export const Header = React.memo(() => {
   return (
      <div className={s.headerArea}>
         <div className={sContainer.container}>
            <div className={s.headerWrapper}>
               <div className={s.headerLeft}>
                  <Nav/>
               </div>
               <div className={s.headerRight}>
                  <div className={s.hamburgerMenu}>
                     <span className={s.menuTrigger}>
                           <img src={triggerMenu} alt="menu"/>
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
})
