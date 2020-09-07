import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import underConstruction from '../assets/under-construction-page.webp'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
       <>
        <Header />
        
        <div className="container text-center bg-light">
        <Link to="/menu">
           <img src={underConstruction} className="img-fluid" alt=""/>
           </Link>
        </div>
        <Footer/>
       </>
    );
};

export default HomePage;