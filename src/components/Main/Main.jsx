import React from 'react';
import s from './Main.module.css';

function Main() {
    return (
        <div className={s.main}>
            <din className={s.container}>
                <div className={s.greeting}>
                    <span>Привет!</span>
                    <span>Меня зовут Евгений</span>
                    <span>Я frond-end разработчик</span>
                </div>
                <div className={s.photo}>
                    <img src="" alt=""/>
                </div>
            </din>
        </div>
    );
}

export default Main;
