import React from 'react'
import {Work} from './Work/Work'
import {Title} from '../../u0-common/u0.2-components/Title/Title'

import one from '../../u0-common/u0.1-assets/images/projects/dp-big-portfolio-01.jpg'
import pizzaShop from '../../u0-common/u0.1-assets/images/projects/Pizza-shop.jpg'
import socialNetwork from '../../u0-common/u0.1-assets/images/projects/Social.jpg'
import simpleComponents from '../../u0-common/u0.1-assets/images/projects/Component.jpg'

import s from './MyWorks.module.scss'

export const MyWorks = () => {

   const oneWork = {
      backgroundImage: `url(${one})`,
   }

   const pizzas = {
      backgroundImage: `url(${pizzaShop})`,
   }

    const social = {
        backgroundImage: `url(${socialNetwork})`,
    }

    const components = {
        backgroundImage: `url(${simpleComponents})`,
    }

   return (
       <div className={s.worksBlock}>
          <div className={s.container} id='works'>
             <Title title={'My works'}
                    titleDescription={'Check out my latest web software development portfolio projects.'}
                    id='works'
             />
             <div className={s.works}>
                <Work style={social}
                      link={"https://sergey-lang.github.io/Social-TypeScript/#/profile"}
                      repLink={'https://github.com/Sergey-lang/Social-TypeScript'}
                      projectName={'Social Network'}
                      description={
                         'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                      }
                />
                <Work style={oneWork}
                      link={"https://sergey-lang.github.io/Todo-list/#/"}
                      repLink={'https://github.com/Sergey-lang/Todo-list'}
                      projectName={'Todo List'}
                      description={
                         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur delectus, dignissimos dolor.'
                      }
                />
                <Work style={pizzas}
                      link={"https://react-pizza-one.herokuapp.com/#/"}
                      repLink={'https://github.com/Sergey-lang/React-pizza'}
                      projectName={'Pizza - shop'}
                      description={
                         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur delectus, dignissimos dolor.'
                      }
                />
                 <Work style={components}
                       link={"https://sergey-lang.github.io/Simple-React-HW/#/pre-junior"}
                       repLink={'https://github.com/Sergey-lang/Simple-React-HW'}
                       projectName={'Components'}
                       description={
                           'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur delectus, dignissimos dolor.'
                       }
                 />
             </div>
          </div>
       </div>
   )
}
