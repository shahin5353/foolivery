import React from 'react';
import { Link } from 'react-router-dom';
import './SingleItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUtensils, faWeight, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import {AddToCart} from '../../redux';

const SingleItem = (props) => {
    const {_id,title,subTitle,price,deliveryTime,weight,spoonQuantity,img} = props.item;
    const dispatch = useDispatch();
    return (
        <div className="single-item my-5">
        <div className="text-center text-dark border-0 item-card pt-3" id="singleItem-block">
            <div className="d-flex justify-content-between align-items-center">
            <div><img className="card-img-top img-fluid" src={img}  alt="card-cap"/></div>
            <div className="card-body text-left">
                <h4 className="card-title text-capitalize">{title}</h4>
                <p className="card-title">{subTitle}</p>
                <p><span className="mr-3"><FontAwesomeIcon icon={faClock}/> {deliveryTime}</span><span className="mr-3"><FontAwesomeIcon icon={faWeight}/> {weight}</span> <span><FontAwesomeIcon icon={faUtensils}/> {spoonQuantity}</span></p>
                <div className="hover-effect">
                    <div className="d-flex">
                    <span className="price-cart px-3">
                    <span className="text-white font-weight-bold px-2">${price}</span>
                    <button onClick={() => dispatch(AddToCart(_id))} className="btn"><FontAwesomeIcon className="text-white" icon={faShoppingCart}/></button>
                    </span>
                    <Link to={"/item/"+_id} className="btn ml-5 btn-light">Details</Link>
                    </div>
                </div>
            </div>
            </div>
         </div> 
         </div>
    );
};

export default SingleItem;