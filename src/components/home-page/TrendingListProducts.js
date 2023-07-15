import { Fragment } from "react";
import classes from './TrendingListProducts.module.scss'

import Product from "../base-components/Product";
const TrendingListProducts = (props) => {
    console.log(props)
    return (<div className={` d-flex flex-wrap justify-content-md-between gap-3 `}>
        {props.products.length > 0 && props.products.map((prod, index) => <div className={classes.product} onClick={props.onShowDetail} id={prod._id.$oid} key={index}>
            <Product product={prod} />
        </div>
        )}
    </div>)
}; export default TrendingListProducts 