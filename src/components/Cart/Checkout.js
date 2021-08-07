import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postal: true
    });
    const isEmpty = value => value.trim() === '';
    const isPostalValid = value => value.trim().length === 5;

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalIsValid = isPostalValid(enteredPostal);
        const enteredCityIsValid = !isEmpty(enteredCity);
        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postal: enteredPostalIsValid
        });
        const formIsValid = enteredStreetIsValid && enteredCityIsValid && enteredNameIsValid && enteredPostalIsValid;

        if (!formIsValid) {
            return;
        }
        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postal: enteredPostal
        });
    };

    const nameClasses = (`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`);
    const streetClasses = (`${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`);
    const cityClasses = (`${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`);
    const postalClasses = (`${classes.control} ${formInputsValidity.postal ? '' : classes.invalid}`);
    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputsValidity.name && <p>Please enter a valid name.</p>}
            </div>
            <div className={streetClasses}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formInputsValidity.street && <p>Please enter a valid Street name.</p>}
            </div>
            <div className={cityClasses}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalInputRef} />
                {!formInputsValidity.postal && <p>Please enter a valid Postal Code.</p>}
            </div>
            <div className={postalClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputsValidity.city && <p>Please enter a valid City.</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;