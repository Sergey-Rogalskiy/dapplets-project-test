import React from 'react';
import s from './test.module.css'

function Intro() {
  
  return (
    <div className={s.intro}>
      <div className={s.card}>
        <h1>Добро Пожаловать</h1>
        <span>Dapplets</span>
        <p>в тестовое задание на должность Frontend Developer</p>
        <p>Мы строим платформу Аугментированного веба, состоящую из браузерного плагина и децентрализованных приложений (дапплетов), основанных на крипто-технологиях.</p>
        <p>Наша платформа создается по принципу open-source и доступна для разработчиков со всего мира.</p>
        <button>DESTOP</button>
        <button>MOBILE</button>
      </div>
    </div>
  );
}

export default Intro;
