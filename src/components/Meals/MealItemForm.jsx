import React from 'react'
import classes from './MealItemForm.module.css';
const MealItemForm = () => {
   return (
      <div className = {classes['form-container']}>
         <form className = {classes.form}>
            <label className = {classes.label}>Amount</label>
            <input type = 'number' step = '1' defaultValue = '1'></input>
         </form>
         <button className ={classes.btn}>+ Add</button>
      </div>
   )
}

export default MealItemForm;
