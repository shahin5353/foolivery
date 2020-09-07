import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/foolivery-logo.png'

const AdminHeader = () => {
    return (
        <nav
      className="navbar navbar-expand-lg navbar-light bg-white"
      id="main-nav"
    >
      <div className="container">
        <Link to="/" className="navbar-brand mx-xl-5">
            <img src={logo} alt="foolivery-logo"/>
          <span className="site-title">foolivery</span>
        </Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
              <li className="nav-item mr-1">
                <NavLink
                  className="nav-link"
                  exact
                  to="/admin"
                  activeClassName="main-nav-active"
                >
                  View All Item
                </NavLink>
              </li>
              <li className="nav-item mr-1">
                <NavLink
                  className="nav-link"
                  exact
                  to="/admin/addItem"
                  activeClassName="main-nav-active"
                >
                  Add New Item
                </NavLink>
              </li>
           
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default AdminHeader;