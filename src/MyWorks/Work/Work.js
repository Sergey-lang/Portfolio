import React from 'react';
import s from './Work.module.css'

export function Work({ projectName, description, ...props }) {
    return (
        <div className={s.workBlock}>
            <div className={s.projectImg}>
                <button className={s.watchButton}>Смотреть</button>
            </div>
            <div className={s.description}>
                <h3>{projectName}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}