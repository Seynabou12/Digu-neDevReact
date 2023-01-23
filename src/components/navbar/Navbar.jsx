import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <h1 className="gradient__text">DJIGUEN-DEV</h1>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Accueil</a></p>
          <p><a href="#wgpt3">A Propos</a></p>
          <p><a href="#possibility">Activités</a></p>
          <p><a href="#features">Etudes Cas</a></p>
          <p><a href="#blog">Bibliothèque</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button type="button">Contact</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Accueil</a></p>
              <p><a href="#wgpt3">A Propos</a></p>
              <p><a href="#possibility">Métier d&apos;Avenir</a></p>
              <p><a href="#features">Formations</a></p>
              <p><a href="#blog">Bibliothèque</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>S&apos;identifier</p>
              <button type="button">S&apos;inscrire</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
