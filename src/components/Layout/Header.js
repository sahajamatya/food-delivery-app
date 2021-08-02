import React from 'react';
import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';
const Header = () => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Table full of delicious food." />
            </div>
        </React.Fragment>
    );
}

export default Header;