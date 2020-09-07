import React from 'react';
import Checkout from '../components/Checkout/Checkout'
import Header from '../components/Header/Header';

const CheckoutPage = () => {
    return (
        <>
        <Header />
        <div className="container my-5">
            <Checkout/>
        </div>
        </>
    );
};

export default CheckoutPage;