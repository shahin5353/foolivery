import React from 'react';
import './Footer.scss';
import logo from '../../assets/foolivery-logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, faPhoneAlt, faClock, faMailBulk, faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
      <div className="container">
      <div className="my-4" id="top-hr"/>
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
      <hr className="my-5"/>
      <div className="row">
        <div className="col-5">
          <h5 className="mb-4">Sign up for Updates</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque molestiae provident? Consectetur, dolorum!</p>
          <input className="form-control" type="text" name="" id="" placeholder="Enter your mail"/>
          <p className="mt-3">&copy; 2020 Food Delivery Template-Foolivery by Shahin</p>
        </div>
        <div className="col-3">
          <div className="row">
          <h5 className="mb-4">Sign up for Updates</h5>
            <div className="col-6">
              <li className="text-success">Main</li>
              <li className="text-success">About us</li>
              <li className="text-success">News</li>
              <li className="text-success">Menu</li>
              <li className="text-success">FAQ</li>
            </div>
            <div className="col-6">
              <li className="text-success">Blog</li>
              <li className="text-success">Contacts</li>
              <li className="text-success">Privacy</li>
              <li className="text-success">Terms</li>
            </div>
          </div>
        </div>
        <div className="col-4">
        <h5 className="mb-4">Contact us</h5>
        <li className="list-unstyled mb-2"><FontAwesomeIcon className="text-success" icon={faPhoneAlt}/> 8 (800) 000 00 00</li>
        <li className="list-unstyled mb-2"><FontAwesomeIcon className="text-success" icon={faClock}/> Monday-Friday: 9:00 am - 6:00 pm Saturday: 9:00 am - 4:00pm</li>
        <li className="list-unstyled"><FontAwesomeIcon className="text-success" icon={faEnvelope}/> hello@shahin.developer</li>
        </div>
      </div>
      </div>
    );
};

export default Footer;