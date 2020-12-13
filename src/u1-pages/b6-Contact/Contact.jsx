import React from 'react'
import {Title} from '../../u0-common/u0.2-components/Title/Title'
import {Button} from '../../u0-common/u0.2-components/Button/Button'

import s from './Contact.module.scss'
import Fade from 'react-reveal/Fade'

export const Contact = () => {

   return (
       <div className={s.contactBlock}>
          <div className={s.container} id='contact'>
             <Fade clear>
                <Title title={'Contact'}
                       titleDescription={`If you wanna get in touch, talk to me about a project collaboration or just say hi,
                       fill up the awesome form below or send an email to 
                       sergei.kuharyonok@yandex.by and let's talk.`}
                />
                <div className={s.formWrapper}>
                   <form className={s.contactForm}>
                      <input type="text" id="fname" name="fname" placeholder={'Your Name'}/>
                      <input type="text" id="lname" name="lname" placeholder={'Your Last Name'}/>
                      <textarea type="text" id="larea" name="larea" placeholder={'Your Message'}/>
                      <Button name={'Send message'}
                              className={s.contactBtn}
                              newStyle
                              button
                      />
                   </form>
                </div>
             </Fade>
          </div>
       </div>
   )
}
