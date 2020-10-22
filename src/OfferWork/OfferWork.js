import React from 'react'
import s from './OfferWork.module.css'
import sContainer from './../common/styles/Container.module.css'
import { Button } from './../common/styles/components/Button'

export function OfferWork() {
	return (
		<div className={s.offerBlock}>
			<div className={`${sContainer.container} ${s.offerContainer}`}>
				<h2 className={s.title}>Сonsidering work options</h2>
				<Button name={'Hire me'} />
			</div>
		</div>
	)
}
