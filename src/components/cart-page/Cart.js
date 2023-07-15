import classes from './Cart.module.scss';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { DELETE_CART, UPDATE_CART } from '../../store/cartListSlice';
import QuantityForm from '../base-components/QuantityForm';
import usePrice from '../../hooks/use-price';
const Cart = () => {
  const { convertPrice, totalPrice } = usePrice();
  const cartList = useSelector(state => state.cartList);
  const dispatch = useDispatch();
  /*-----------Remove Item Handler-----------------*/
  const removeItemHandler = (id) => {
    dispatch(DELETE_CART(id));
  }
  /*-----------Decrease Quantity Handler-----------------*/
  const decreaseQuantityHandler = (id) => {
    const index = cartList.findIndex(item => item.id === id);
    dispatch(UPDATE_CART({ index: index, quantity: -1 }))
  };
  /*-----------Increase Quantity Handler-----------------*/
  const increaseQuantityHandler = (id) => {
    const index = cartList.findIndex(item => item.id === id);
    dispatch(UPDATE_CART({ index: index, quantity: 1 }))
  };
  /*-----------Change Quantity Handler-----------------*/
  const changeQuantityHandler = ({ quantity, id }) => {
    const index = cartList.findIndex(item => item.id === id);
    dispatch(UPDATE_CART({ index: index, quantity: Number(quantity), onChange: true }))
  };
  const applyCouponHandler = () => { }
  /*----------------------------*/
  if (cartList.length === 0) //If no Item in Cart then return this
    return <Fragment>
      <h4>SHOPPING CART</h4>
      <div className='mt-5 h5'>No product in your cart!</div>
    </Fragment>
  /*----------------------------*/
  const subTotal = totalPrice(cartList);
  return <Fragment>
    <h4>SHOPPING CART</h4>
    <div className='row mt-5'>
      <div className={`col-sm-8 me-5`}>
        {/*-----------Item List-----------------*/}
        <table className={`table table-borderless ${classes['product-list']}`} >
          <thead className=''>
            <tr className='text-center'>
              <th scope="col">IMAGE</th>
              <th scope="col">PRODUCT</th>
              <th scope="col">PRICE</th>
              <th scope="col">QUANTITY</th>
              <th scope="col">TOTAL</th>
              <th className='pe-2' scope="col">REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {cartList.map(item => <tr className='align-middle' key={item.id}>
              <td ><img src={item.imgUrl} alt={item.name} /></td>
              <td>{item.name}</td>
              <td className='text-muted'>{convertPrice(item.price)} VND</td>
              <td className='d-flex'><QuantityForm onChangeQuantity={changeQuantityHandler} productId={item.id} onDecreaseQuantity={() => decreaseQuantityHandler(item.id)} onIncreaseQuantity={() => increaseQuantityHandler(item.id)} quantity={item.quantity} />  </td>
              <td className='text-muted'>{convertPrice(item.price * item.quantity)} VND</td>
              <td><button onClick={() => removeItemHandler(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /> <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /> </svg></button></td>
            </tr>)}

          </tbody>
        </table>
        {/*-----------Bottom Menu-----------------*/}
        <div className={`d-flex justify-content-between mt-5 pt-3 pb-3 ${classes['bottom-menu']}`}>
          <Link to='/shop/all'><img src={process.env.PUBLIC_URL + '/icons/left-arrow.svg'} alt='left arrow' /> Continue shopping</Link>
          <Link to='/cart/checkout'>Proceed to checkout <img src={process.env.PUBLIC_URL + '/icons/right-arrow.svg'} alt='right arrow' /> </Link>
        </div>
      </div>
      {/*-----------Cart summary-----------------*/}
      <div className={`col p-5 ${classes['cart-total']}`}>
        <h4>CART TOTAL</h4>
        <div className={`d-flex justify-content-between border-bottom ${classes['sub-total']}`}>
          <label>SUBTOTAL</label>
          <div className={`align-self-center  text-muted ${classes['sub-total-price']}`} > {convertPrice(subTotal)}</div>
        </div>
        <div className={`d-flex justify-content-between ${classes['total']}`}>
          <label>TOTAL</label>
          <div className={`align-self-center text-black ${classes['total-price']}`}>{convertPrice(subTotal)}</div>
        </div>
        {/*-----------Enter coupon Form-----------------*/}
        <form onSubmit={applyCouponHandler} className='mt-3'>
          <input type="text" className={`form-control border-bottom-0 `} name='coupon' placeholder="Enter your coupon" />
          <button className={`btn  btn-block w-100 text-light ${classes['btn-apply-coupon']}  `} type='submit' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gift" viewBox="0 0 16 16"> <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" /> </svg> Apply coupon</button>
        </form>
      </div>
    </div>
  </Fragment >
}; export default Cart 