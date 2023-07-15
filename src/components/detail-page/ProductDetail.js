import classes from './ProductDetail.module.scss'
import NoProduct from '../base-components/NoProduct';
import usePrice from '../../hooks/use-price';
import AddToCartForm from './AddToCartForm';
import useDescription from '../../hooks/use-description';
import RelatedProduct from './RelatedProduct';
import useProducts from '../../hooks/use-products';
/*----------------------------*/
const ProductDetail = (props) => {
    const { httpProducts, isLoading, error } = useProducts();
    const { convertPrice } = usePrice();
    const product = httpProducts && httpProducts.find(prod => prod._id.$oid === props.productId);
    const { convertDescription } = useDescription();
    const productDescription = product && product.long_desc && convertDescription(product.long_desc);
    /*----------------------------*/
    return <div className={`mt-5 pt-5 text-secondary ${classes['product-detail']}`}>

        {isLoading && <div className='text-center h4' >Loading...</div> || error && <div>Something went wrong when connecting to server!</div> || !product && <NoProduct />}
        {product && <div>
            <div className={`row`}>
                <div className={`col-sm-6`}><img src={product.img1} alt={product.name} /></div>
                {/*---------Short Description-------------------*/}
                <div className={`col-sm-6 ps-3 ${classes['short-description']}`}>
                    <div className={` ${classes['product-name']}`}>{product.name}</div>
                    <div className={classes['product-price']}>{convertPrice(product.price)}VND</div>
                    <div className={classes['product-description']}>{product.short_desc}</div>
                    <div className={classes['product-category']}>
                        <span>CATEGORY: </span>
                        {product.category}</div>
                    <AddToCartForm product={product} />
                </div>
            </div>
            {/*------------Long Description----------------*/}
            <div className={`row mt-5 ${classes['long-description']} `}>
                <div className='col'>
                    <label >DESCRIPTION</label>
                    <h5 className='mt-3 mb-4'>PRODUCT DESCRIPTION</h5>
                    <div>{productDescription[0].toUpperCase()}</div>
                    <ul className='ps-3'>
                        {productDescription.slice(1).map(desc => <li key={Math.random()}>{desc}</li>)}
                    </ul>
                </div>
            </div>
            {/*-----------Related Products-----------------*/}
            <div className={`col mt-5 ${classes['related-product']}`}>
                <h4>RELATED PRODUCTS</h4>
                <RelatedProduct currentProductId={product._id.$oid} category={product.category} /></div>
        </div>}
    </div>
};
export default ProductDetail 