import React from 'react';
import Item from '../components/ItemDetails/Item';
import Header from '../components/Header/Header';

const ItemDetailPage = () => {
    
    return (
      <>
        <Header />
        <div className="container px-4">
            <Item/>
        </div>
      </>
    );
};

export default ItemDetailPage;