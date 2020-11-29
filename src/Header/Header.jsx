import React, {useState} from 'react'
import s from './Header.module.css'
import {Nav} from '../Nav/MainNav/Nav'
import sContainer from '../common/styles/Container.module.css';
import triggerMenu from './../common/assets/images/hamburger-menu.svg'
import {BurgerNav} from '../Nav/BurgerNav/BurgerNav';

export const Header = () => {

   let [trigger, setTrigger] = useState(false)

   return (
      <div className={s.headerArea}>
         <div className={sContainer.container}>
            <div className={s.headerWrapper}>
               <div className={s.headerLeft}>
                  <Nav/>
               </div>
               <BurgerNav changeState={setTrigger}
                          state={trigger}
               />
               <div className={s.headerRight}
                    style={trigger ? {display: 'none'} : {display: 'block'}}>
                  <div className={s.hamburgerMenu}>
                     <span className={s.menuTrigger} onClick={() => setTrigger(true)}>
                           <img src={triggerMenu} alt="menu"/>
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
