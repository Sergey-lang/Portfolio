import React from 'react'

import s from './Button.module.scss'
import {Link} from 'react-scroll'

export const Button = (
    {className, name, newStyle, button, ...props}
) => {
   const finalClassName = newStyle ? `${className} ${s.defaultBtn}` : `${s.buttonWrapper} ${className}`
   return (
       <>
          {!button
              ?
              // <a href='#' className={finalClassName}>{name}</a>

              <Link activeClass={s.active}
                    className={finalClassName}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
              >{name}</Link>
              : <button type={'submit'} className={finalClassName}>
                 <span>{name}</span>
              </button>
          }
       </>
   )
}
