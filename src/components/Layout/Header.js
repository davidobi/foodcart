import { Fragment } from "react";
import mealsImg from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>
          <HeaderCartButton onClick={props.onShowCart} />
        </button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food." />
      </div>
    </Fragment>
  );
};

export default Header;
