import React, { useEffect } from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/foolivery-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingBasket, faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { GetCart } from "../../redux";
import {useAuth} from '../../auth/useAuth'

const Header = () => {
  const cartData = useSelector((state) => state.cart);
  const itemKeys = Object.keys(cartData.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCart());
  }, [dispatch]);
  const auth = useAuth();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white"
      id="main-nav"
    >
      <div className="container">
        <Link to="/" className="navbar-brand mx-xl-5">
          <img height="50" src={logo} alt="" />
          <span className="site-title">foolivery</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            {[
              { navTitle: "About", navPath: "/about" },
              { navTitle: "Menu", navPath: "/menu" },
              { navTitle: "Services", navPath: "/services" },
              { navTitle: "News", navPath: "/news" },
              { navTitle: "FAQ", navPath: "/faq" },
              { navTitle: "Contacts", navPath: "/contact" },
            ].map((item,index) => (
              <li className="nav-item mr-1" key={index}>
                <NavLink
                  className="nav-link"
                  exact
                  to={item.navPath}
                  activeClassName="main-nav-active"
                >
                  {item.navTitle}
                </NavLink>
              </li>
            ))}
            <li className="nav-item d-none d-xl-block">
            <span className="nav-link">
              <span className="phone-icon">
                <span className="pr-2">+123-456-789</span>
                <i className="fa fa-phone"></i>
              </span>
            </span>
          </li>
          <li className="nav-item pt-2 mx-lg-3">
              <Link to="/checkout">
                  <FontAwesomeIcon
                    style={{ fontSize: "25px" }}
                    icon={faShoppingBasket}
                  ></FontAwesomeIcon>
                  <span className="badge bg-warning">{itemKeys.length}</span>
              </Link>
            </li>
          {
            auth.user ?
            <li className="nav-item d-none d-lg-block pt-1">
              <span className="nav-link">
              <FontAwesomeIcon style={{fontSize:'1.5rem'}} icon={faUserCircle}/>
              <FontAwesomeIcon onClick={()=>auth.signOut()} style={{fontSize:'1.5rem'}} icon={faSignOutAlt} role="button" className="ml-2" title="logout"/>
              </span>
            </li>
            :
            <li className="nav-item ">
              <span className="nav-link">
              <Link to="/login">Login</Link>
              </span>
            </li>
          }
          {
            auth.user &&
            <li className="nav-item d-block d-lg-none">
              <span className="nav-link">
              <FontAwesomeIcon style={{fontSize:'1.5rem'}} icon={faUserCircle}/>
              <span className="px-2"  style={{fontSize:'1.4rem'}}>{auth.user.displayName}</span>
              <button className="btn btn-danger btn-sm" onClick={()=>auth.signOut()}>SignOut</button>
              </span>
            </li>
          }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
