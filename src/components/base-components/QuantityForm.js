/*-----------Display quantity form in Detail page and Cart page-----------------*/
import { Fragment } from "react";
import classes from './QuantityForm.module.scss'
const QuantityForm = (props) => {
    const quantityChangeHandler = (e) => {
        const quantity = Number(e.target.value);
        props.onChangeQuantity({ quantity: quantity, id: props.productId });
    };
    return <Fragment>
        <button onClick={props.onDecreaseQuantity} className={classes['descrement-btn']}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16"> <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" /> </svg></button>
        <input onChange={quantityChangeHandler} className={`border-0 text-center ${classes['quantity-input']}`} type='number' min={1} value={props.quantity} name='quantity' ></input>
        <button onClick={props.onIncreaseQuantity} className={`pe-2 ${classes['increment-btn']}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16"> <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" /> </svg></button>
    </Fragment>
}; export default QuantityForm 