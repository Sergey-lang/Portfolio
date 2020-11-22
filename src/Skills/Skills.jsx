import React from 'react'
import s from './Skills.module.css'
import sContainer from './../common/styles/Container.module.css'
import { Skill } from './Skill/Skill'
import { Title } from '../common/styles/components/Title/Title'

export const Skills = React.memo(() => {
	return (
		<div className={s.skillsBlock}>
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
						title={'Css and Html'}
						discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
					/>
					<Skill
						title={'React and Native'}
						discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
					/>
					<Skill
						title={'React and Native'}
						discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quas!'}
					/>
				</div>
			</div>
		</div>
	)
})
