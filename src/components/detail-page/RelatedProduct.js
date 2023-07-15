import classes from './RelatedProduct.module.scss';
import { Link } from 'react-router-dom';
import Product from '../base-components/Product';
import useProducts from '../../hooks/use-products';
const RelatedProduct = (props) => {
    const { httpProducts } = useProducts();
    if (!httpProducts) return;//Check if load Products from server has error or no product found
    const products = httpProducts.filter(prod => prod.category === props.category);
    const relatedProducts = products.filter(prod => prod._id.$oid !== props.currentProductId);
    return <div className='d-flex gap-3 mt-4'>
        {relatedProducts.map(prod => <Link to={`/shop/detail/${prod._id.$oid}`} className={`  ${classes.product}`} key={prod._id.$oid}><Product product={prod} /></Link>)}
    </div>
}; export default RelatedProduct 