import React from 'react'
import s from './Header.module.css'
import {Nav} from '../Nav/Nav'
import sContainer from '../common/styles/Container.module.css';

export const Header = React.memo(() => {
   return (
      <div className={s.headerArea}>
         <div className={sContainer.container}>
            <div className={s.headerWrapper}>
               <div className={s.headerLeft}>
                  <Nav/>
               </div>
            </div>
         </div>
      </div>
   )
})
