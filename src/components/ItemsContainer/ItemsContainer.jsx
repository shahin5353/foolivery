import React, { useEffect } from "react";
import "./ItemContainer.scss";
import SingleItem from "../SingleItem/SingleItem";
import { Link } from "react-router-dom";
import MenuItems from "../Preloaders/MenuItems";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../redux";

const ItemsContainer = () => {
  const itemsData = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="container mt-5 px-3">
      <div className="my-5">
        <div className="d-flex">
          <h1 className="text-uppercase">Breakfast</h1>
          <Link className="nav-link text-dark ml-auto" to="/menu">
            See all
          </Link>
        </div>
        {itemsData.loading ? (
          <MenuItems />
        ) : itemsData.error ? (
          <h2>{itemsData.error}</h2>
        ) : (
          <div className="row">
            {itemsData && itemsData.items && itemsData.items.map((item) => {
              return (
                item.category === "breakfast" && item.status === "true" && (
                  <div className="col-lg-6"  key={item._id}>
                    <SingleItem item={item} />
                  </div>
                )
              );
            })}
          </div>
        )}

        <hr className="mt-5" />
      </div>

      <div className="my-5">
        <div className="d-flex">
          <h1 className="text-uppercase">lunch</h1>
          <Link className="nav-link text-dark ml-auto" to="/menu">
            See all
          </Link>
        </div>
        {itemsData.loading ? (
          <MenuItems />
        ) : itemsData.error ? (
          <h2>{itemsData.error}</h2>
        ) : (
          <div className="row">
            {itemsData && itemsData.items && itemsData.items.map((item) => {
              return (
                item.category === "lunch" && item.status === "true" && (
                  <div className="col-lg-6"  key={item._id}>
                    <SingleItem item={item} />
                  </div>
                )
              );
            })}
          </div>
        )}

        <hr className="mt-5" />
      </div>
      <div className="my-5" id="dinner-block">
        <div className="d-flex">
          <h1 className="text-uppercase">dinner</h1>
          <Link className="nav-link text-dark ml-auto" to="/menu">
            See all
          </Link>
        </div>
        {itemsData.loading ? (
          <MenuItems />
        ) : itemsData.error ? (
          <h2>{itemsData.error}</h2>
        ) : (
          <div className="row">
            {itemsData && itemsData.items && itemsData.items.map((item) => {
              return (
                item.category === "dinner" && item.status === "true" && (
                  <div className="col-lg-6"  key={item._id}>
                    <SingleItem item={item} />
                  </div>
                )
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemsContainer;
