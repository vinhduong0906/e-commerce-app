import classes from './AddToCartForm.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
    ADD_CART,
    UPDATE_CART
} from '../../store/cartListSlice';
import QuantityForm from '../base-components/QuantityForm';
/*----------------------------*/
const AddToCartForm = (props) => {
    const dispatch = useDispatch();
    const prod = props.product;
    const [quantity, setQuantity] = useState(1);
    const cartList = useSelector(state => state.cartList)
    const loginUser = useSelector(state => state.loginUser);
    /*-------------Add Item to Cart Handler---------------*/
    const addToCartHandler = (event) => {
        event.preventDefault();
        if (!loginUser.isLogin) { alert('You must login first!'); return }
        const productIndex = cartList.length === 0 ? -1 : cartList.findIndex(item => item.id === props.product._id.$oid);

        if (productIndex >= 0) { dispatch(UPDATE_CART({ index: productIndex, quantity: quantity })); return; }
        const product = { id: prod._id.$oid, name: prod.name, quantity: quantity, price: prod.price, imgUrl: prod.img1 }
        dispatch(ADD_CART(product));

    };
    /*-----------Decrease Quantity Handler-----------------*/
    const decreaseQuantityHandler = (e) => {
        e.preventDefault();
        if (quantity > 1) setQuantity(qty => qty - 1);
    };
    /*-----------Increase Quantity Handler-----------------*/
    const increaseQuantityHandler = (e) => {
        e.preventDefault();
        setQuantity(qty => Number(qty) + 1);
    };
    /*-----------Change Quantity Handler-----------------*/
    const changeQuantityHandler = ({ quantity }) => {
        setQuantity(quantity);
    };
    /*----------------------------*/
    return <div className={`input-group ${classes['form-control']}`}>
        <form onSubmit={addToCartHandler} className='d-flex align-items-stretch'>
            <div className='border'>
                <div class="d-inline-block ps-3 pe-3 p-2">QUANTITY</div>
                <QuantityForm onDecreaseQuantity={decreaseQuantityHandler} onIncreaseQuantity={increaseQuantityHandler} onChangeQuantity={changeQuantityHandler} quantity={quantity} />
            </div>
            <button className={`input-group-append ${classes['submit-btn']} align-items-center`} type='submit'>Add to cart</button>
        </form>
    </div>
}; export default AddToCartForm 