import React from 'react';
import people from '../../assets/people.png';
import femmes from '../../assets/Femmes.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Construisons quelque chose d&apos;incroyable avec DJIGUEN-DEV</h1>
      </div>
      <p>Pourtant, lit tout pour l&apos;indulgence de l&apos;assistance voyage déplaisante. Toutes les pensées n&apos;exercent pas de bénédiction. Indulgence façon tout changement de joie bruyant l&apos;attachement. Parti nous années pour commander permettent demandé.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Commencer</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>600 personnes ont demandé l&apos;accès à une visite au cours des dernières 24 heures</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={femmes} />
    </div>
  </div>
);

export default Header;
