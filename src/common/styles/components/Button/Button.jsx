import React from 'react'
import s from './Button.module.css'

export const Button = React.memo(({ className, name, ...props }) => {
	console.log('button')
	const finalClassName = `${s.button} ${className}`
	return (
		<>
			<button className={finalClassName}>{name}</button>
		</>
	)
})
