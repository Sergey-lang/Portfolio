import React from 'react'
import s from './Main.module.css'
import sContainer from './../common/styles/Container.module.css'

export const Main = React.memo(() => {

   return (
      <div className={s.mainBlock}>
         <div className={sContainer.container}>
            <div className={s.greeting}>
               <span className={s.profession}>Front-end developer</span>
               <h1>Hello, I'm <span className={s.name}>Sergey</span>
                  Welcome to my World.</h1>
            </div>
         </div>
      </div>
   )
})
