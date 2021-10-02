import React from "react";
import Modal from "../UI/Card/Modal";
import classes from "./CartModal.module.css";
const cartItems = (
  <ul>
    {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
      <li className = {classes['item-name']}>{item.name}</li>
    ))}
  </ul>
);
const CartModal = (props) => {
  return (
    <Modal hideCartHandler = {props.hideCartHandler}>
      {cartItems}
      <div className = {classes.details}>
         <span className ={classes.amount}>Total Amount</span>
         <span className ={classes.price}>$ 35.62</span>
      </div>
      <div className ={classes.buttons}>
         <button className = {classes.close} onClick = {props.hideCartHandler}>Close</button>
         <button  className = {classes.order}>Order</button>
      </div>
    </Modal>
  );
};

export default CartModal;
