import React from 'react'
import Fade from 'react-reveal/Fade'
import ReactTypingEffect from 'react-typing-effect'

import s from './Main.module.scss'

export const Main = () => {

   return (
       <div className={s.mainBlock} id='main'>
          <dive className={s.container}>
             <Fade clear>
                <div className={s.greeting}>
                <span className={s.profession}>
                   <ReactTypingEffect text={['<Front-end developer/']}
                                      speed={100}
                                      eraseSpeed={10}
                                      cursor={'>'}
                   />
                </span>
                   <h1>Hello, I'm <span className={s.name}>Sergey</span><br/>
                      Welcome to my World.</h1>
                </div>
             </Fade>
          </dive>
       </div>
   )
}
