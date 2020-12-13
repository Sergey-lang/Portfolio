import React from 'react'

import {Skill} from './Skill/Skill'
import {Title} from '../../u0-common/u0.2-components/Title/Title'

import react from '../../u0-common/u0.1-assets/images/skills/icons8-react.svg'
import typescript from '../../u0-common/u0.1-assets/images/skills/icons8-typescript.svg'
import node from '../../u0-common/u0.1-assets/images/skills/icons8-nodejs.svg'
import native from '../../u0-common/u0.1-assets/images/skills/icons8-react-native.svg'
import js from '../../u0-common/u0.1-assets/images/skills/icons8-javascript.svg'
import redux from '../../u0-common/u0.1-assets/images/skills/icons8-redux.svg'
import material from '../../u0-common/u0.1-assets/images/skills/icons8-material-ui.svg'
import story from '../../u0-common/u0.1-assets/images/skills/story.svg'
import heroku from '../../u0-common/u0.1-assets/images/skills/icons8-heroku.svg'

import s from './Skills.module.scss'
import Fade from 'react-reveal/Fade'

export const Skills = () => {

   return (
       <div className={s.skillsBlock}>
          <div className={s.container} id='skills'>
             <Fade left>
                <Title title={'Skills'}
                       titleDescription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores harum officia tempore!'}
                />
                <div className={s.skills}>
                   <Skill
                       icon={react}
                       title={'React'}
                       discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
                   />
                   <Skill
                       icon={redux}
                       title={'Redux'}
                       discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
                   />
                   <Skill
                       icon={typescript}
                       title={'TypeScript'}
                       discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
                   />
                   <Skill
                       icon={native}
                       title={'React Native '}
                       discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
                   />
                   <Skill
                       icon={material}
                       title={'Material UI'}
                       discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
                   />
                   <Skill
                       icon={js}
                       title={'Java Script'}
                       discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
                   />
                   <Skill
                       icon={heroku}
                       title={'Heroku'}
                       discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
                   />
                   <Skill
                       icon={story}
                       title={'Story Book'}
                       discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
                   />
                   <Skill
                       icon={node}
                       title={'NodeJS'}
                       discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
                   />
                </div>
             </Fade>
          </div>
       </div>
   )
}
