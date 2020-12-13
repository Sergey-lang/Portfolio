import React from 'react'

import sContainer from '../../u0-common/u0.2-components/Container.module.css'

import s from './Main.module.scss'
import Fade from 'react-reveal/Fade'
import ReactTypingEffect from 'react-typing-effect'

export const Main = () => {

   return (
       <div className={s.mainBlock} id='main'>
          <div className={sContainer.container}>
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
          </div>
       </div>
   )
}
