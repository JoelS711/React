import './styles/header.css';
import logo from './assets/logo.png';
import React, { useState, useEffect } from 'react';


export function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
      const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          const visible = prevScrollPos > currentScrollPos;
          setPrevScrollPos(currentScrollPos);
          setVisible(visible);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, [prevScrollPos]);
  
    return (
            <header className={visible ? 'header-scroll' : 'header'}>
                <div className='header__container'>
                    <figure className='header__logo'>
                        <img src={`${logo}`} alt="Logo" className='header__logo--img' />
                    </figure>
                    <nav className='header__nav'>
                        <ul className="header__menu">
                            <li className="header__menu-item">
                                <a href="#" className="header__menu-link">Acerca de mi</a>
                            </li>
                            <li className="header__menu-item">
                                <a href="#" className="header__menu-link">Experiencia</a>
                            </li>
                            <li className="header__menu-item">
                                <a href="#" className="header__menu-link">Proyectos</a>
                            </li>
                            <li className="header__menu-item">
                                <a href="#" className="header__menu-link">Habilidades</a>
                            </li>
                        </ul>
                    </nav>
                    <div className='header__buttons'>
                        <button className='header__button'><img src="./src/assets/moon.png" alt="dark mode" className='header__button--icon' /></button>
                        <button className='header__button'><img src="https://flagsapi.com/US/shiny/64.png" alt="language" className='header__button--flag' /></button>
                    </div>
                </div>
            </header>
        
    )
}