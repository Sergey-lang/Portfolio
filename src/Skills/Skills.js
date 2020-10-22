import React from 'react'
import s from './Skills.module.css'
import sContainer from './../common/styles/Container.module.css'
import { Skill } from './Skill/Skill'

export function Skills() {
	return (
		<div className={s.skillsBlock}>
			<div className={`${sContainer.container} ${s.skillsContainer}`}>
				<h2 className={s.title}>Skills</h2>
				<div className={s.skills}>
					<Skill
						title={'JS'}
						discription={
							'lorem15 gsdsdgdg dsg dwg  sgf dsf gsd fgdf f sdg dfs gsdfg sdf gsdf gds g'
						}
					/>
					<Skill
						title={'CSS'}
						discription={
							'lorem15 gsdsdgdg dsg dwg  sgf dsf gsd fgdf f sdg dfs gsdfg sdf gsdf gds g'
						}
					/>
					<Skill
						title={'REACT'}
						discription={
							'lorem15 gsdsdgdg dsg dwg  sgf dsf gsd fgdf f sdg dfs gsdfg sdf gsdf gds g'
						}
					/>
				</div>
			</div>
		</div>
	)
}
