import React from 'react'
import s from './MyWorks.module.scss'
import sContainer from './../common/styles/Container.module.css'
import {Work} from './Work/Work'
import {Title} from '../common/styles/components/Title/Title'
import one from '../common/assets/images/projects/dp-big-portfolio-01.jpg';
import two from '../common/assets/images/projects/dp-big-portfolio-02.jpg';
import three from '../common/assets/images/projects/dp-big-portfolio-03.jpg';

export const MyWorks = () => {

   const oneWork = {
      backgroundImage: `url(${one})`,
   }

   const twoWork = {
      backgroundImage: `url(${two})`,
   }

   const threeWork = {
      backgroundImage: `url("${three}")`,
   }

   return (
      <div className={s.worksBlock}>
         <div className={`${sContainer.container} ${s.worksContainer}`}>
            <Title title={'My works'}
                   titleDescription={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}
            />
            <div className={s.works}>
               <Work style={oneWork}
                     projectName={'Social Network'}
                     description={
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                     }
               />
               <Work style={twoWork}
                     projectName={'Todo List'}
                     description={
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur delectus, dignissimos dolor.'
                     }
               />
               <Work style={threeWork}
                     projectName={'Simple Components'}
                     description={
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur delectus.'
                     }
               />
            </div>
         </div>
      </div>
   )
}
