import React from 'react'
import Fade from 'react-reveal/Fade'
import {Skill} from './Skill/Skill'
import {Title} from '../../u0-common/u0.2-components/Title/Title'

import react from '../../u0-common/u0.1-assets/images/skills/icons8-react.svg'
import typescript from '../../u0-common/u0.1-assets/images/skills/icons8-typescript.svg'
import js from '../../u0-common/u0.1-assets/images/skills/icons8-javascript.svg'
import redux from '../../u0-common/u0.1-assets/images/skills/icons8-redux.svg'
import material from '../../u0-common/u0.1-assets/images/skills/icons8-material-ui.svg'
import story from '../../u0-common/u0.1-assets/images/skills/story.svg'
import node from '../../u0-common/u0.1-assets/images/skills/icons8-nodejs.svg'
import ql from '../../u0-common/u0.1-assets/images/skills/graphql.svg'
import db from '../../u0-common/u0.1-assets/images/skills/mongodb.svg'

import s from './Skills.module.scss'

export const Skills = () => {

    return (
        <div className={s.skillsBlock}>
            <div className={s.container} id='skills'>
                <Title title={'Skills'}
                       titleDescription={'I use the following technologies in my work.'}
                />
                <Fade left>
                    <div className={s.skills}>
                        <Skill
                            icon={react}
                            title={'React'}
                            discription={'JavaScript library for building user interfaces or UI components.'}
                        />
                        <Skill
                            icon={redux}
                            title={'Redux'}
                            discription={'JavaScript library for managing application state.'}
                        />
                        <Skill
                            icon={typescript}
                            title={'TypeScript'}
                            discription={'Strict syntactical superset of JavaScript and adds optional static typing to the language'}
                        />
                        <Skill
                            icon={material}
                            title={'Material UI'}
                            discription={'One of the most popular react component libraries!'}
                        />
                        <Skill
                            icon={js}
                            title={'Java Script'}
                            discription={'Programming language that conforms to the ECMAScript specification.'}
                        />
                        <Skill
                            icon={story}
                            title={'Story Book'}
                            discription={'Tool for UI development!'}
                        />
                        <Skill
                            icon={node}
                            title={'NodeJS'}
                            discription={'Back-end JavaScript runtime environment '}
                        />
                        <Skill
                            icon={ql}
                            title={'GraphQl'}
                            discription={'Query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.'}
                        />
                        <Skill
                            icon={db}
                            title={'MongoDB'}
                            discription={'Document database, which means it stores data in JSON-like documents'}
                        />
                    </div>
                </Fade>
            </div>
        </div>
    )
}
