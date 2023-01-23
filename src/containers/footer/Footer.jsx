import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Voulez-vous entrer dans le futur avant les autres</h1>
    </div>
    <div className="gpt3__footer-btn">
      <p>Demander un accès anticipé</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Tous droits réservés</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Liens</h4>
        <p>Média Sociaux</p>
        <p>Compteurs</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Dakar</h4>
        <p>Termes & Conditions</p>
        <p>Politiques de Confidantialités</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Entrer en Contact</h4>
        <p>Dakar-Colobane</p>
        <p>00221781794521</p>
        <p>dioneseynabou0@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 DJIGUEN-DEV. Tous les droits sont réservés.</p>
    </div>
  </div>
);

export default Footer;
