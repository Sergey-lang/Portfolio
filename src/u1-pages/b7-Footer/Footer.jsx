import React from 'react'

import sContainer from './../../u0-common/u0.2-components/Container.module.css'
import socialIn from './../../u0-common/u0.1-assets/images/footer/icons8-linkedin-2.svg'
import socialVk from './../../u0-common/u0.1-assets/images/footer/icons8-vkontakte.svg'
import socialInst from './../../u0-common/u0.1-assets/images/footer/icons8-instagram.svg'

import s from './Footer.module.scss'
import Fade from 'react-reveal/Fade'

export const Footer = () => {

   return (
       <div className={s.footerWrapper}>
          <div className={`${sContainer.container} ${s.footerContainer}`}>
             <div className={s.wrapper}>
                <div className={s.innerText}>
                   <ul className={s.socialShare}>
                      <Fade bottom>
                         <li>
                            <a href="#">
                               <img src={socialIn} alt=""/>
                            </a>
                         </li>
                      </Fade>
                      <Fade bottom>
                         <li>
                            <a href="https://vk.com/19sergey_k">
                               <img src={socialVk} alt=""/>
                            </a>
                         </li>
                      </Fade>
                      <Fade bottom>
                         <li>
                            <a href="https://www.instagram.com/?hl=ru">
                               <img src={socialInst} alt=""/>
                            </a>
                         </li>
                      </Fade>
                      <Fade bottom>
                         <li>
                            <a href="#">
                               <img src={socialIn} alt=""/>
                            </a>
                         </li>
                      </Fade>
                   </ul>
                </div>
                <p>© 2020. All rights reserved by Sergey</p>
             </div>
          </div>
       </div>
   )
}
