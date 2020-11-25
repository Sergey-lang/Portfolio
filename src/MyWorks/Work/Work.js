import React from 'react'
import s from './Work.module.css'
import {Button} from './../../common/styles/components/Button/Button'

export const Work = ({projectName, description, ...props}) => {
   return (
      <div className={s.workItem}>
         <div className={s.workBlock}>
            <div className={s.projectImg} style={props.style}>
               <Button className={s.projectBtn} name={'Watch'}/>
            </div>
            <div className={s.description}>
               <h3>{projectName}</h3>
               <p>{description}</p>
            </div>
         </div>
      </div>
   )
}
