import React from 'react'
import s from './Skills.module.scss'
import sContainer from './../common/styles/Container.module.css'
import {Skill} from './Skill/Skill'
import {Title} from '../common/styles/components/Title/Title'

import react from './../common/assets/images/skills/icons8-react.svg'
import typescript from './../common/assets/images/skills/icons8-typescript.svg'
import node from './../common/assets/images/skills/icons8-nodejs.svg'
import native from './../common/assets/images/skills/icons8-react-native.svg'
import js from './../common/assets/images/skills/icons8-javascript.svg'
import redux from './../common/assets/images/skills/icons8-redux.svg'
import material from './../common/assets/images/skills/icons8-material-ui.svg'
import story from './../common/assets/images/skills/story.svg'
import css from './../common/assets/images/skills/icons8-css3.svg'
import heroku from './../common/assets/images/skills/icons8-heroku.svg'

export const Skills = () => {

   return (
      <div className={s.skillsBlock} id='#skills'>
         <div className={`${sContainer.container} ${s.skillsContainer}`}>
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
         </div>
      </div>
   )
}
