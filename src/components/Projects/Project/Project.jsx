import React from 'react';
import s from './Project.module.css';
import js from '../../../img/React.jpg'


function Project() {

    return (

    <div className={s.project}>
          <div className={s.look}
               style = {{ backgroundImage: 'url(' + js + ')',
                   backgroundSize: 'cover',
                   backgroundPosition: 'center center',
                   backgroundRepeat: 'no-repeat',
               }}>

            <button>Смотреть</button>
          </div>
        <h3>Описание проекта</h3>
        <p className={s.parLook}>Текст рыба, текст рыба текст рыба текст рыба текст рыба текст рыба текст рыба текст рыба </p>
        </div>
    );
}

export default Project;
