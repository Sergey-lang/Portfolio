import React from 'react';
import s from './MyWorks.module.css'
import sContainer from './../common/styles/Container.module.css'
import { Work } from './Work/Work';

export function MyWorks() {
    return (
        <div className={s.worksBlock}>
            <div className={`${sContainer.container} ${s.worksContainer}`}>
                <h2 className={s.title}>My works</h2>
                <div className={s.works}>
                    <Work projectName={'First Project'}
                        description={'erngrrt rtg rtg rtg rthrthrhrt rth rth rthrh  yhythrthrthtyjtjjttgergergerg'}
                    />
                    <Work projectName={'Second Project'}
                        description={'erngrrt rtg rtg rtg rthrthrhrt rth rth rthrh  yhythrthrthtyjtjjttergergergergergegerg'}
                    />
                </div>
            </div>
        </div>
    );
}

