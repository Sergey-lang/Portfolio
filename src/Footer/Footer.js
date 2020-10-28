import React from 'react'
import s from './Footer.module.css'
import sContainer from './../common/styles/Container.module.css'

export const Footer = React.memo(() => {
	return (
		<div className={s.footerBlock}>
			<div className={`${sContainer.container} ${s.footerContainer}`}>
				<h2 className={s.title}>Sergey Kykharynok</h2>
				<div className={s.socialLinksBlock}>
					<div className={s.socialLink}>1</div>
					<div className={s.socialLink}>2</div>
					<div className={s.socialLink}>3</div>
					<div className={s.socialLink}>4</div>
				</div>
				<h2>@2020 All rights reserved</h2>
			</div>
		</div>
	)
})
