import React from 'react'
import classes from './Meals.module.css';
const MealsSummary = () => {
   return (
      <div className = {classes.summary}>
         <h3>Delicious meals in a healthy avataaar.</h3>
         <section>
            <div className = {classes['summary-desc']}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatibus, dolorum iusto laudantium placeat quis blanditiis earum distinctio odio nesciunt optio! Obcaecati ratione fuga deserunt et autem, omnis maxime voluptate, repellat mollitia dicta nulla optio quia. Repellendus, molestias corporis? Est praesentium ab obcaecati quis fugiat ipsum. Debitis, nesciunt! Exercitationem tempora sapiente modi expedita vel ex cum in doloremque, suscipit vitae?
            </div>
         </section>
      </div>
   )
}

export default MealsSummary;
