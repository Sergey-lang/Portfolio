import React from 'react'
import s from './MyWorks.module.css'
import sContainer from './../common/styles/Container.module.css'
import {Title} from '../common/styles/components/Title/Title'

export const About = () => {
   return (
      <div className={s.worksBlock}>
         <div className={`${sContainer.container} ${s.worksContainer}`}>
            <div>
               <img src="" alt=""/>
            </div>
            <div>
               <Title title={'About Me'}
                      titleDescription={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum'}
               />
            </div>

         </div>
      </div>
   )
}
