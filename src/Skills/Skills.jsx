import React from 'react'
import s from './Skills.module.scss'
import sContainer from './../common/styles/Container.module.css'
import {Skill} from './Skill/Skill'
import {Title} from '../common/styles/components/Title/Title'

export const Skills = () => {

   return (
      <div className={s.skillsBlock} id='#skills'>
         <div className={`${sContainer.container} ${s.skillsContainer}`}>
            <Title title={'Skills'}
                   titleDescription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores harum officia tempore!'}
            />
            <div className={s.skills}>
               <Skill
                  title={'Java Script'}
                  discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
               />
               <Skill
                  title={'Css/Html'}
                  discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
               />
               <Skill
                  title={'React'}
                  discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
               />
               <Skill
                  title={'Native React'}
                  discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
               />
               <Skill
                  title={'TypeScript'}
                  discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
               />
               <Skill
                  title={'Unit Testing'}
                  discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
               />
               <Skill
                  title={'NodeJS'}
                  discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
               />
               <Skill
                  title={'GraphQL'}
                  discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
               />
            </div>
         </div>
      </div>
   )
}
