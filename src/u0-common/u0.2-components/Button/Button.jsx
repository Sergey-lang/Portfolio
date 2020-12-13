import React from 'react'
import s from './Button.module.scss'

export const Button = (
    {className, name, newStyle, button, ...props}
) => {
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
}
