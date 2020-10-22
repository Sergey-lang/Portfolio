import React from 'react'
import s from './MyWorks.module.css'
import sContainer from './../common/styles/Container.module.css'
import { Work } from './Work/Work'

export function MyWorks() {
	return (
		<div className={s.worksBlock}>
			<div className={`${sContainer.container} ${s.worksContainer}`}>
				<h2 className={s.title}>My works</h2>
				<div className={s.works}>
					<Work
						projectName={'First Project'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque cupiditate esse nulla optio vel? Aspernatur autem dolores labore modi.'
						}
					/>
					<Work
						projectName={'Second Project'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur delectus, dignissimos dolor ducimus eaque esse facere inventore nam nobis nostrum officia omnis quae quidem sint vel vero vitae voluptatibus!'
						}
					/>
				</div>
			</div>
		</div>
	)
}
