import React from 'react'
import s from './OfferWork.module.css'
import sContainer from './../common/styles/Container.module.css'
import {Button} from '../common/styles/components/Button/Button'
import {Title} from '../common/styles/components/Title/Title'

export function OfferWork() {
   return (
      <div className={s.offerBlock}>
         <div className={`${sContainer.container} ${s.offerContainer}`}>
            <Title title={`Let's get to work`}
                   titleDescription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur eos ipsa, nihil provident quibusdam.'}
            />
            <Button name={'Hire me'} className={s.offerBtn}/>
         </div>
      </div>
   )
}
