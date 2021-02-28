import React from 'react'
import {Work} from './Work/Work'
import {Title} from '../../u0-common/u0.2-components/Title/Title'

import one from '../../u0-common/u0.1-assets/images/projects/dp-big-portfolio-01.jpg'
import pizzaShop from '../../u0-common/u0.1-assets/images/projects/Pizza-shop.jpg'
import socialNetwork from '../../u0-common/u0.1-assets/images/projects/Social.jpg'
import cards from '../../u0-common/u0.1-assets/images/projects/learning.jpg'
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
    const cardPacks = {
        backgroundImage: `url(${cards})`,
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
                          link={'https://sergey-lang.github.io/Social-TypeScript/#/profile'}
                          repLink={'https://github.com/Sergey-lang/Social-TypeScript'}
                          projectName={'Social Network'}
                          description={
                              'It is the most biggest project which I refresh every month and learning new technologies. It helps me to be in trends.'
                          }
                    />
                    <Work style={oneWork}
                          link={'https://sergey-lang.github.io/Todo-list/#/'}
                          repLink={'https://github.com/Sergey-lang/Todo-list'}
                          projectName={'Todo List'}
                          description={
                              'Redux-toolkit contains the best practice from all React developers. This project shows redux-toolkit and his strict limits.'
                          }
                    />
                    <Work style={pizzas}
                          link={'https://react-pizza-one.herokuapp.com/#/'}
                          repLink={'https://github.com/Sergey-lang/React-pizza'}
                          projectName={'Pizza - shop'}
                          description={
                              'Convert project from React js to TypeScript and using Redux-toolkit it is necessary if you want to get stable app and easy debugging in the future.'
                          }
                    />
                    <Work style={cardPacks}
                          link={'https://sergey-lang.github.io/Card-Learning-app/'}
                          repLink={'https://github.com/Sergey-lang/Card-Learning-app'}
                          projectName={'Card learning App'}
                          description={
                              'This project in progress. Will be added users page, video loading and images for cards, also chat between users.'
                          }
                    />
                    <Work style={components}
                          link={'https://sergey-lang.github.io/Simple-React-HW/#/pre-junior'}
                          repLink={'https://github.com/Sergey-lang/Simple-React-HW'}
                          projectName={'Components'}
                          description={
                              'Simple components which I can take for my project and upgrade their.'
                          }
                    />
                </div>
            </div>
        </div>
    )
}
