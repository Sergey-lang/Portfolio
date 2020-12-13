import React from 'react'

import s from './Button.module.scss'
import {Link} from 'react-scroll'

export const Button = (
    {className, name, newStyle, button,children, ...props}
) => {
   const finalClassName = newStyle ? `${className} ${s.defaultBtn}` : `${s.buttonWrapper} ${className}`
   return (
       <>
          {!button
              ? <Link activeClass={s.active}
                    className={finalClassName}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-71}
                    duration={500}
              >{name}</Link>
              : <button type={'submit'} className={finalClassName}>
                 <span>{children}</span>
              </button>
          }
       </>
   )
}
