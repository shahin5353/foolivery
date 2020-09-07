import React from 'react';
import HeroArea from '../components/HeroArea/HeroArea';
import ItemsContainer from '../components/ItemsContainer/ItemsContainer';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MenuPage = () => {
  return (
    <>
      <Header/>
      <HeroArea />
      <ItemsContainer/>
      <Footer/>
    </>
  );
};

export default MenuPage;