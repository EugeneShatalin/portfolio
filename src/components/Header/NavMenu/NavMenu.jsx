import React from 'react';
import s from './NavMenu.module.css';

function NavMenu() {
  return (
      <div className={s.nav}>
        <a href="" className={s.link}>Главная</a>
        <a href="" className={s.link}>Скилы</a>
        <a href="" className={s.link}>Проекты</a>
        <a href="" className={s.link}>Контакты</a>
      </div>
  );
}

export default NavMenu;
