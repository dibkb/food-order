import React from 'react'
import classes from './Cart.module.css';
import { FiShoppingCart } from "react-icons/fi"
const Cart = (props) => {
   return (
      <div className ={classes.cart} onClick ={props.showCartHandler}>
         <FiShoppingCart className = {classes.icon}/>
         <span>Your Cart</span>
         <span className ={classes.items}>3</span>
      </div>
   )
}

export default Cart
