import React from 'react'
import s from './Contact.module.css'
import sContainer from './../common/styles/Container.module.css'
import {Button} from '../common/styles/components/Button/Button'
import {Title} from '../common/styles/components/Title/Title'

export const Contact = React.memo(() => {
   return (
      <div className={s.contactBlock}>
         <div className={`${sContainer.container} ${s.contactContainer}`}>
            <Title title={'Contact'}
                   titleDescription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, repellendus?'}
            />
            <form className={s.contactForm}>
               <input type="text" id="fname" name="fname" placeholder={'Your Name'}/>
               <input type="text" id="lname" name="lname" placeholder={'Your Last Name'}/>
               <textarea type="text" id="larea" name="larea" placeholder={'Your Message'}/>
            </form>
            <Button name={'Send message'}
                    className={s.contactBtn}
                    newStyle
                    button
            />
         </div>
      </div>
   )
})
