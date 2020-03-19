import React from 'react';
import s from './Skill.module.css';
import logo from '../../../img/logo.svg'

function Skill() {
    return (
        <div className={s.skill}>
            <img src={logo} alt="logo"/>
            <h3>React</h3>
            <p>React — это JavaScript-библиотека для разработки пользовательского интерфейса.</p>
        </div>
    );
}

export default Skill;
