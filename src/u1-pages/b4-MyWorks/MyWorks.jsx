import React from 'react'
import {Work} from './Work/Work'
import {Title} from '../../u0-common/u0.2-components/Title/Title'

import one from '../../u0-common/u0.1-assets/images/projects/dp-big-portfolio-01.jpg'
import pizzaShop from '../../u0-common/u0.1-assets/images/projects/Pizza-shop.jpg'

import s from './MyWorks.module.scss'

export const MyWorks = () => {

   const oneWork = {
      backgroundImage: `url(${one})`,
   }

   const pizzas = {
      backgroundImage: `url(${pizzaShop})`,
   }


   return (
       <div className={s.worksBlock}>
          <div className={s.container} id='works'>
             <Title title={'My works'}
                    titleDescription={'Check out my latest web software development portfolio projects.'}
                    id='works'
             />
             <div className={s.works}>
                <Work style={oneWork}
                      link={"https://vk.com/19sergey_k"}
                      projectName={'Social Network'}
                      description={
                         'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                      }
                />
                <Work style={oneWork}
                      link={"https://vk.com/19sergey_k"}
                      projectName={'Todo List'}
                      description={
                         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur delectus, dignissimos dolor.'
                      }
                />
                <Work style={pizzas}
                      link={"https://react-pizza-one.herokuapp.com/#/"}
                      projectName={'Pizza - shop'}
                      description={
                         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur delectus, dignissimos dolor.'
                      }
                />
                <Work style={oneWork}
                      link={"https://vk.com/19sergey_k"}
                      projectName={'Simple Components'}
                      description={
                         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur delectus.'
                      }
                />
             </div>
          </div>
       </div>
   )
}
