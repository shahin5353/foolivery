import React from 'react';
import './Footer.scss';
import logo from '../../assets/foolivery-logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
        <nav
        className="navbar navbar-expand"
        id="main-nav"
      >
        <div className="container">
          <Link to="/" className="navbar-brand mx-xl-5">
            <img height="50" src={logo} alt="" />
            <span className="site-title">foolivery</span>
          </Link>
            <ul className="navbar-nav">
              <li className="nav-item bg-light rounded-circle mr-3">
              <span className="nav-link">
                <FontAwesomeIcon style={{color:'#34B7FF'}} icon={["fab", "twitter"]}/>
              </span>
            </li>
            <li className="nav-item bg-light rounded-circle mr-3">
              <span className="nav-link">
                <FontAwesomeIcon style={{color:'#6867DF'}} icon={["fab", "facebook"]}/>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link bg-light rounded-circle">
                <FontAwesomeIcon style={{color:'#C4C4C4'}} icon={["fab", "instagram"]}/>
              </span>
            </li>
            </ul>
          </div>
      </nav>
    );
};

export default Footer;