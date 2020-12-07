import React from 'react'
import s from './Footer.module.scss'
import sContainer from './../common/styles/Container.module.css'
import socialIn from './../common/assets/images/footer/icons8-linkedin-2.svg'
import socialVk from './../common/assets/images/footer/icons8-vkontakte.svg'
import socialInst from './../common/assets/images/footer/icons8-instagram.svg'

export const Footer = () => {

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
                        <a href="https://vk.com/19sergey_k">
                           <img src={socialVk} alt=""/>
                        </a>
                     </li>
                     <li>
                        <a href="https://www.instagram.com/?hl=ru">
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
}
