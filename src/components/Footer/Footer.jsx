import React from 'react';
import s from './Footer.module.css';
import img1 from '../../img/Social Icons by Dreamstale (1).png'
import img2 from '../../img/Social Icons by Dreamstale (2).png'
import img3 from '../../img/Social Icons by Dreamstale (3).png'
import img4 from '../../img/Social Icons by Dreamstale (4).png'
import img5 from '../../img/Social Icons by Dreamstale (5).png'

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.container}>
          <h3>Шаталин Евгений</h3>
        <div className={s.images}>
          <img src={img1} alt=""/>
          <img src={img2} alt=""/>
          <img src={img3} alt=""/>
          <img src={img4} alt=""/>
          <img src={img5} alt=""/>
        </div>
        <div>&copy; Все права защищены</div>
      </div>
    </div>
  );
}

export default Footer;
