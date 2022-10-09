import React from "react";
import { DUMMY_MEALS } from "../../DummyData/DummyMeals";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card/Card";
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;