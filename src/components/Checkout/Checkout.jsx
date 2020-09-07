import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { GetCart, RemoveFromCart, fetchCheckoutItems } from "../../redux";
import { Link } from "react-router-dom";
import notFound from "../../assets/no_item_found.png";

const Checkout = () => {
  const selector = useSelector((state) => {
    const cartData = state.cart;
    const checkoutItems = state.checkoutItems;
    return { cartData, checkoutItems };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCart());
    dispatch(fetchCheckoutItems(selector.cartData));
  }, [dispatch]);
  const subTotal = selector.checkoutItems.cartItems.reduce(
    (previousPrice, currentPrice) => {
      return previousPrice + currentPrice.price * currentPrice.quantity;
    },
    0
  );
  const tax = subTotal / 50;
  let delivery = subTotal > 200 ? subTotal / 100 : subTotal === 0 ? 0 : 2;
  const total = subTotal + tax + delivery;
  return (
    <div className="container my-5">
      <h1 className="text-center">Checkout Your Order</h1>
      {Object.keys(selector.cartData.cartItems).length > 0 &&
        selector.checkoutItems.loading && (
          <div className="text-center my-5">
            <h1>Loading</h1>
          </div>
        )}
      {selector.checkoutItems.cartItems.length > 0 && (
          <div className="row mt-5">
            <div className="col-12 ml-lg-5">
              {selector.checkoutItems.cartItems.map((item) => {
                return (
                  <div
                    className="mb-3 bg-light rounded d-flex align-items-center justify-content-between p-3"
                    key={item._id}
                  >
                    <img width="100px" src={item.img} alt="" />
                    <div>
                      <h6>{item.name}</h6>
                      <h4 className="text-danger">
                        ${item.price * item.quantity}
                      </h4>
                      <p>Quantity : {item.quantity}</p>
                    </div>
                    <div className="cart-controller ml-3">
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-danger"
                        role="button"
                        onClick={() => dispatch(RemoveFromCart(item._id))}
                      />
                    </div>
                  </div>
                );
              })}

              <div>
                <p className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>${subTotal}</span>
                </p>
                <p className="d-flex justify-content-between">
                  <span>Tax (2%)</span>
                  <span>${tax}</span>
                </p>
                <p className="d-flex justify-content-between">
                  <span>Delivery Fee</span>
                  <span>${delivery}</span>
                </p>
                <p className="d-flex justify-content-between">
                  <span>Total</span>
                  <span>${total}</span>
                </p>
                <button
                  disabled
                  className="btn btn-block btn-danger btn-secondary"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
      )}
      {Object.keys(selector.cartData.cartItems).length < 1 && (
        <div className="my-5 text-center">
          <img src={notFound} alt="notFound-img" />
          <h3 className="mt-5">
            Please go to{" "}
            <Link to="/menu">
              <button className="btn btn-success">MENU</button>
            </Link>{" "}
            and add some item
          </h3>
        </div>
      )}
    </div>
  );
};

export default Checkout;
