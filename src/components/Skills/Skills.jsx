import React from 'react';
import s from './Skills.module.css';
import Skill from "./Skill/Skill";


function Skills() {
    return (
        <div className={s.skills}>
            <din className={s.container}>
              <div className={s.mySkills}>
                <h3>Мои скилы</h3>
              </div>
              <div className={s.skillsBlock}>
                <Skill/>
                <Skill/>
                <Skill/>
              </div>
            </din>
        </div>
    );
}

export default Skills;
