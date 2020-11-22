import React from 'react'
import s from './MyWorks.module.css'
import sContainer from './../common/styles/Container.module.css'
import { Work } from './Work/Work'
import { Title } from '../common/styles/components/Title/Title'

export const MyWorks = React.memo(() => {
	return (
		<div className={s.worksBlock}>
			<div className={`${sContainer.container} ${s.worksContainer}`}>
				<Title title={'My works'}
						 titleDescription={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}
				/>
				<div className={s.works}>
					<Work
						projectName={'First Project'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
						}
					/>
					<Work
						projectName={'Second Project'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur delectus, dignissimos dolor.'
						}
					/>
					<Work
						projectName={'Second Project'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur delectus.'
						}
					/>
					<Work
						projectName={'Second Project'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur delectus.'
						}
					/>
				</div>
			</div>
		</div>
	)
})
