import React from 'react'
import s from './Header.module.css'
import { Nav } from '../Nav/Nav'

export const Header = React.memo(() => {
	return (
		<div className={s.header}>
			<Nav />
		</div>
	)
})
