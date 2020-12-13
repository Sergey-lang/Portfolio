import React from 'react'
import {Work} from './Work/Work'
import {Title} from '../../u0-common/u0.2-components/Title/Title'

import sContainer from '../../u0-common/u0.2-components/Container.module.css'

import one from '../../u0-common/u0.1-assets/images/projects/dp-big-portfolio-01.jpg'
import two from '../../u0-common/u0.1-assets/images/projects/dp-big-portfolio-02.jpg'
import three from '../../u0-common/u0.1-assets/images/projects/dp-big-portfolio-03.jpg'

import s from './MyWorks.module.scss'
import Fade from 'react-reveal/Fade'

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
          <div className={`${sContainer.container} ${s.worksContainer}`} id='works'>
             <Fade left>
                <Title title={'My works'}
                       titleDescription={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}
                       id='works'
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
             </Fade>
          </div>
       </div>
   )
}
