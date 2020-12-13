import React from 'react'
import s from './Title.module.css'

export const Title = ({title, titleDescription, className}) => {
   const finalStyle = `${className} ${s.defaultStyle}`

   return <div className={finalStyle}>
      <h2>
         {title}
      </h2>
      <div>
         <p>{titleDescription}</p>
      </div>
   </div>
}
