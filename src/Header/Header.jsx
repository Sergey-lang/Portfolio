import React, {useState} from 'react'

import s from './Header.module.scss'
import {Nav} from '../Nav/MainNav/Nav'
import {BurgerNav} from '../Nav/BurgerNav/BurgerNav';
import sContainer from '../common/styles/Container.module.css';
import {Button} from '../common/styles/components/Button/Button';

import triggerMenu from './../common/assets/images/hamburger-menu.svg'


export const Header = () => {

   let [show, setShow] = useState(false)

   const finalStyle = show ? `${s.fullOverlay} ${s.activeFullOverlay}` : s.fullOverlay

   return (
      <div className={s.headerArea}>
         <div className={sContainer.container}>
            <div className={s.headerWrapper}>
               <div className={s.headerLeft}>
                  <Nav/>
               </div>
               <div className={s.headerRight}>
                  <div className={finalStyle}></div>
                  <div className={s.headerBtnWrapper}>
                     <Button name={`LET'S TALK`} className={s.headerBtn} newStyle={true}/>
                  </div>
                  <div className={s.hamburgerMenu}>
                     <span className={s.menuTrigger}>
                        <img src={triggerMenu} onClick={() => {
                           setShow(!show)
                        }}/>
                     </span>
                     <BurgerNav state={show} setState={setShow}/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
