import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = ({ name, description, price }) => {
  return (
    <li className ={classes.container}>
      <div className ={classes.item}>
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>$ {price}</h4>
      </div>
      <div className = {classes['form-container']}>
         <MealItemForm/>
      </div>
    </li>
  );
};

export default MealItem;
