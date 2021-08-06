import React from 'react';
import { Link } from 'react-router-dom';
import s from './intro.module.css'

function Intro() {
  
  return (
    <div className={s.intro}>
      <div className={s.card}>
        <div className={s.flex}>
          <h1>Добро<br/> Пожаловать</h1>
          <h6>Dapplets</h6>
        </div>
        <p>в тестовое задание на должность Frontend Developer</p>
        <p>Мы строим платформу Аугментированного веба, состоящую из браузерного плагина и децентрализованных приложений (дапплетов), основанных на крипто-технологиях.</p>
        <p>Наша платформа создается по принципу open-source и доступна для разработчиков со всего мира.</p>
        <Link to='/dapplets' className={`${s.desktop} ${s.button}`}>DESKTOP</Link>
        <Link to='/dapplets2' className={`${s.mobile} ${s.button}`}>MOBILE</Link>
      </div>
    </div>
  );
}

export default Intro;
