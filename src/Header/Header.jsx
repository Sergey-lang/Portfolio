import React, {useState} from 'react'
import s from './Header.module.css'
import {Nav} from '../Nav/MainNav/Nav'
import sContainer from '../common/styles/Container.module.css';
import triggerMenu from './../common/assets/images/hamburger-menu.svg'
import close from '../common/assets/images/closeTrigger.png';

import socialIn from './../common/assets/images/icons8-linkedin-2.svg'
import socialVk from './../common/assets/images/icons8-vkontakte.svg'
import socialInst from './../common/assets/images/icons8-instagram.svg'
import {Button} from '../common/styles/components/Button/Button';

export const Header = () => {

   let [trigger, setTrigger] = useState(false)

   return (
      <div className={s.headerArea}>
         <div className={sContainer.container}>
            <div className={s.headerWrapper}>
               <div className={s.headerLeft}>
                  <Nav/>
               </div>
               <div className={s.headerRight}>
                  <div className={s.socialShareInner}>
                     <ul className={s.socialShare}>
                        <li>
                           <a href="">
                              <div className={s.links}>
                                 <img src={socialIn} alt=""/>
                              </div>
                           </a>
                        </li>
                        <li>
                           <a href="">
                              <div className={s.links}>
                                 <img src={socialIn} alt=""/>
                              </div>
                           </a>
                        </li>
                        <li>
                           <a href="">
                              <div className={s.links}>
                                 <img src={socialIn} alt=""/>
                              </div>
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div className={s.headerBtnWrapper}>
                     <Button name={`LET'S TALK`} className={s.headerBtn} newStyle={true}/>
                  </div>
                  <div className={s.hamburgerMenu}>
                                        <span className={s.menuTrigger} onClick={() => setTrigger(true)}>
                        {
                           !trigger
                              ? <img src={triggerMenu} alt="menu"/>
                              : <img src={close} alt="" onClick={() => setTrigger(false)}/>
                        }
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
