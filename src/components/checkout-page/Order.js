import classes from './Order.module.scss';
import usePrice from '../../hooks/use-price';
const Order = (props) => {
    const { convertPrice, totalPrice } = usePrice();
    const total = totalPrice(props.cartList);
    return <div className={` p-4 ${classes['your-order']}`}>
        <div className={classes.title}>YOUR ORDER</div>
        <ul>
            {props.cartList.map((item, index) => <li key={index} className='row border-bottom pt-3 pb-3'>
                <div className='col text-body'>{item.name}</div>
                <div className='col'>{convertPrice(item.price)} VND x {item.quantity}</div>
            </li>)}
        </ul>
        <div className={`row ${classes.total}`}>
            <div className='col '>TOTAL</div>
            <div className='col fw-normal'>{convertPrice(total)} VND</div>
        </div>
    </div>
}; export default Order 