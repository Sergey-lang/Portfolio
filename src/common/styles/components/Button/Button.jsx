import React from 'react'
import s from './Button.module.css'

export const Button = React.memo((
   {className, name, newStyle, button, ...props}
) => {
   console.log('button')
   const finalClassName = newStyle ? `${className} ${s.defaultBtn}` : `${s.buttonWrapper} ${className}`
   return (
      <>
         {!button
            ? <a href='#' className={finalClassName}>{name}</a>
            : <button type={'submit'} className={finalClassName}>
               <span>{name}</span>
            </button>
         }
      </>
   )
})
