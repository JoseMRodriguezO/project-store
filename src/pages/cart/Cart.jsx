import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/Shop-context";
import { CartItem } from "./Cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate;
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      <div className="checkout">
        <p> Subtotal: ${totalAmount} </p>
        <button> Continue Shopping </button>
        <button>Checkout </button>
      </div>
      <h1> Your Shopping Cart is Empty</h1>
    </div>
  );
};
