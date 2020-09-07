import React from 'react';
import HeroArea from '../components/HeroArea/HeroArea';
import ItemsContainer from '../components/ItemsContainer/ItemsContainer';
import Header from '../components/Header/Header';

const MenuPage = () => {
  return (
    <>
      <Header/>
      <HeroArea />
      <ItemsContainer/>
    </>
  );
};

export default MenuPage;