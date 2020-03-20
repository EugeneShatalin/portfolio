import React from 'react';
import s from './Slogan.module.css';

function Skills() {
    return (
        <div className={s.slogan}>
          <div className={s.container}>
            <h3>Рассматриваю варианты удаленной работы</h3>
            <button>Нанять меня</button>
          </div>
        </div>
    );
}

export default Skills;
