import React from 'react'
import Cart from '../cart/Cart';
import classes from './Header.module.css';
const Header = (props) => {
   return (
      <div className = {classes.navbar}>
         <h3 className = {classes['brand-name']}>Foood Ordering</h3>
         <p className = {classes.disclaimer}>[ <span className ={classes.not}>NOT</span> responsive as fuck !!! ]</p>
         <Cart showCartHandler = {props.showCartHandler}/>
      </div>
   )
}

export default Header;
