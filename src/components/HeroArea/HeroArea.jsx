import React from "react";
import "./HeroArea.scss";
import { NavLink } from "react-router-dom";
import banner from '../../assets/summer-banner.png';
import leaf from '../../assets/leaf.png';

const HeroArea = () => {
  return (
    <div className="container d-flex align-items-center justify-content-around overflow-hidden" id="hero-block">
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <NavLink
              className="breadcrumb-item"
              exact
              to="/"
              activeClassName="breadcrumb-active"
            >
              Home
            </NavLink>
            <NavLink
              className="breadcrumb-item"
              exact
              to="/menu"
              activeClassName="breadcrumb-active"
            >
              Menu
            </NavLink>
          </ol>
        </nav>
        <h1 className="text-white text-uppercase">summer-menu</h1>
      </div>
      <div className="banner-img">
        <img src={banner} alt=""/>
      </div>
      <div className="leaf-img">
        <img src={leaf} alt=""/>
      </div>
    </div>
  );
};

export default HeroArea;
