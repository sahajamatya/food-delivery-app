import React, { useContext, Fragment } from "react";
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0)
    return (
        <Fragment>
            <button className={classes.button} onClick = {props.onClick}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>
                    Your Cart
                </span>
                <span className={classes.badge}>
                    {numberOfCartItems}
                </span>
            </button>
        </Fragment>
    );
}

export default HeaderCartButton;