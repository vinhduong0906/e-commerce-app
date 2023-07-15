/*-----------List product in shop page on each Category-----------------*/
import { Link } from "react-router-dom";
import Product from "../base-components/Product";
import classes from './ShopListProducts.module.scss'
import NoProduct from "../base-components/NoProduct";
import { combineReducers } from "@reduxjs/toolkit";
const ShopListProduct = (props) => {
    const products = props.products;
    return (<div className='row m-auto ps-2 '>
        {!props.isLoading && products.length === 0 && <NoProduct />}
        {(props.isLoading && <div className="text-center h5 mt-5">Loading...</div>)}

        {products && products.map((prod, index) => {
            return (<Link to={`/shop/detail/${prod._id.$oid}`} className={`col-sm-4 ${classes.product}   `} key={index}>
                <Product product={prod} />
            </Link>)
        })}
    </div>)
}; export default ShopListProduct 