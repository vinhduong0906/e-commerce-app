import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import classes from './TrendingProducts.module.scss'

import QuickDetail from './QuickDetail'
import TrendingListProducts from './TrendingListProducts';
import { showPopup, hidePopup } from '../../store/DetailPopupSlice';
const TrendingProducts = (props) => {
    const dispatch = useDispatch();

    const [productId, setProductId] = useState('');
    const detailPopup = useSelector(state => state.detailPopup.value)
    const showDetail = (e) => {
        dispatch(showPopup());
        setProductId(e.currentTarget.id)
    };

    return (
        <Fragment>
            {/*-----------Quick Detail View-----------------*/}
            {detailPopup && <QuickDetail detailPopup={detailPopup} productId={productId} products={props.products} />}
            {/*----------------------------*/}
            <div className={`row ${classes['trending-products']}`}>
                <div className={classes.title}>
                    <div className={classes['text-rotate']}>MAKE THE HARD WAY</div>
                    <div className={classes['text']}>TOP TRENDING PRODUCTS</div>
                </div>
                <TrendingListProducts products={props.products} onShowDetail={showDetail} />

            </div ></Fragment>)
}; export default TrendingProducts 