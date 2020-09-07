import React from 'react';
import notFound from '../assets/404_Page.jpg';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="container">
           <Header/> 
           <div>
              <Link to="/menu">
              <img src={notFound} alt="not-found-img" className="img-fluid"/>
              </Link>
           </div>
           <Footer/>
        </div>
    );
};

export default NotFoundPage;