import classes from './Product.module.scss';
import usePrice from "../../hooks/use-price";
const Product = (props) => {
    const { convertPrice } = usePrice();
    const product = props.product;
    return <div className={classes.product} >
        <div className={classes.image}><img src={product.img1} alt={product.name} /></div>
        <div className={classes['name']}>{product.name}</div>
        <div className={classes.price}>{convertPrice(product.price)}
        </div>
    </div >
}; export default Product 