import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { headerModel } from './model/Header.Model';
import './scss/header.scss';

const HeaderTop = () => {
  return (
    <section className="header__top">
      <div className="container">
        <div className="header__top__content">
          <div className="header__top__content__left">
            <div className="header__top__content__left__address">
              <i className='icon fas fa-map-marker-alt'></i>
              <p>1010 Avenue, New York, NY 10018 US.</p>
            </div>

            <div className="header__top__content__left__phone">
              <i className='icon fa fa-phone'></i>
              <p>
                <a href="tel:212 386 5575">212 386 5575, 212 386 5576</a>
              </p>
            </div>
          </div>
          <div className="header__top__content__right">
            <i className='icon fa fa-clock'></i>
            <p>Mon-Sat, 8.00-18.00. Sunday CLOSED</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const SubMenu = ({ dataSource, onClick }) => {
  return (
    <ul>
      {dataSource && dataSource.map(data => {
        return (
          <li key={data.id}>
            <a onClick={onClick} href={data.path}>{data.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

const Collapse = (props) => {
  const [show, setShow] = useState(false);
  return (
    <li className={`has-dropdown ${show ? 'active' : ''}`} onClick={() => setShow(prevState => !prevState)}>
      <a href={props.path}>{props.title}</a>
      <SubMenu dataSource={props.dataSource} />
    </li>
  );
}

const HeaderMain = ({ dataSource, onClick, show = false }) => {
  return (
    <div className='header__main'>
      <div className="container">
        <nav >
          <Link to={dataSource.homePagePath} className="header__logo">
            <img src={dataSource.logo} alt="logo" />
          </Link>
          <div className={`header__mobile__icon ${show ? 'active' : ''}`} onClick={onClick}>
            <span />
            <span />
            <span />
          </div>
          <div className={`navbar-collapse collapse`} style={{ maxHeight: !show ? 0 : '100vh' }}>
            <ul className='navbar-nav'>
              {dataSource.navigation && dataSource.navigation.map(nav => {
                if (nav.sub) {
                  return (
                    <Collapse key={nav.id} path={nav.path} dataSource={nav.sub} title={nav.title} />
                  );
                }
                return (
                  <li key={nav.id} className=''>
                    <a href={nav.path}>{nav.title}</a>
                  </li>
                );
              })}
            </ul>
            <ul className='btn-purchase'>
              <li>
                <button className='btn btn-outline-primary btn-capsule btn-sm border-2x fw-700'>
                  Purchase
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

function Header() {
  const [show, setShow] = useState(false);

  const handleShowMobileMenu = () => {
    setShow(prevState => !prevState);
  };

  return (
    <>
      <HeaderTop />
      <HeaderMain dataSource={headerModel} onClick={handleShowMobileMenu} show={show} />
    </>
  );
}


export default Header;