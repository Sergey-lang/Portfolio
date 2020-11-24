import React from 'react'
import s from './Footer.module.css'
import sContainer from './../common/styles/Container.module.css'
import socialIn from './../common/assets/images/icons8-linkedin-2.svg'
import socialVk from './../common/assets/images/icons8-vkontakte.svg'
import socialInst from './../common/assets/images/icons8-instagram.svg'

export const Footer = React.memo(() => {
   return (
      <div className={s.footerWrapper}>
         <div className={`${sContainer.container} ${s.footerContainer}`}>
            <div className={s.wrapper}>
               <div className={s.innerText}>
                  <ul className={s.socialShare}>
                     <li>
                        <a href="#">
                           <img src={socialIn} alt=""/>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <img src={socialVk} alt=""/>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <img src={socialInst} alt=""/>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <img src={socialIn} alt=""/>
                        </a>
                     </li>
                  </ul>
               </div>
               <p>© 2020. All rights reserved by Sergey</p>
            </div>
         </div>
      </div>
   )
})
