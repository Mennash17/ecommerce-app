import React from 'react'
// import Header from './Header';
import styles from '../style/style.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="header">
        <Link className="logo-container" to="/">logo</Link>
        <div className="navLinks-container">
          <Link to="/About">about us</Link>
          <Link to="/ContactUs">contact us</Link>
        </div>
      </header>
    </>
  );
}

export default Header
