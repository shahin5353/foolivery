import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemDetails from './ItemDetails';
import { fetchSingleItem } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';


const Item = (props) => {
    const { itemId } = useParams();
    console.log(itemId);
    const itemData = useSelector((state) => state.item);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchSingleItem(itemId));
    }, [dispatch,itemId]);
    return (
        <div className="container my-5">
            {
                itemData.loading ?
                 <div className="text-center">
                    <h1 id="spinner">loading...</h1>
                 </div>
             :
             !itemData.loading && itemData && !itemData.item ?
                <div className="container my-5 text-center">
                    <h2>NO ITEM FOUND</h2>
                    <h3 className="mt-5">Please go to <Link to="/menu">
                        <button className="btn btn-success">MENU</button>
                    </Link> and add some item</h3>
                </div>
                :
                itemData.error ?
                <h2>{itemData.error}</h2>
                :
                itemData && itemData.item &&
                    <ItemDetails item={itemData.item} />
            }
        </div>
    );
};

export default Item;
