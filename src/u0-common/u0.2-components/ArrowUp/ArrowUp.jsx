import React from 'react'

import s from './ArrowUp.module.scss'
import {Link} from 'react-scroll'

export const ArrowUp = () => {

   return (
       <>
          <div className={s.arrow}>
             <Link activeClass={s.active}
                   className={s.arrow}
                   to="main"
                   spy={true}
                   smooth={true}
                   offset={-71}
                   duration={500}
             />
          </div>
       </>
   )
}
