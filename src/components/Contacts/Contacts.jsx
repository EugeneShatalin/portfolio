import React from 'react';
import s from './Contacts.module.css';

function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
              <h3>Контакты</h3>
              <form action="">
                <input type="text" placeholder="Ваше имя"/><br/><br/>
                <input type="text" placeholder="Ваши контакты"/><br/><br/>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </form>
              <button>Отправить</button>
            </div>
        </div>
    );
}

export default Contacts;
