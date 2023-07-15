import classes from './QuickDetail.module.scss'

import React, { createRef, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { hidePopup } from '../../store/DetailPopupSlice';
import { useDispatch } from 'react-redux';
import usePrice from '../../hooks/use-price';
import { Link, useNavigate } from 'react-router-dom';
const Backdrop = () => {

    const dispatch = useDispatch()
    const closeDetailPopup = () => {
        dispatch(hidePopup());
    }
    return <div onClick={closeDetailPopup} className={classes.backdrop}></div>;
};

const PopupContent = (props) => {
    const navigate = useNavigate();
    const popupRef = createRef();
    const dispatch = useDispatch()
    const { convertPrice } = usePrice();
    const keyPress = useCallback((e) => {
        if (e.keyCode === 27) {
            dispatch(hidePopup());
        }
    }, [])
    useEffect(() => {
        if (popupRef && props.popup) {
            popupRef.current.focus();
        }
    }, [popupRef, props.detailPopup])
    const product = props.products.find(product => product._id.$oid === props.productId)
    const viewDetailClickHandler = (product) => {
        dispatch(hidePopup());
        navigate(`shop/detail/${product._id.$oid}`);
    };
    return (
        <div ref={popupRef} onKeyDown={keyPress} className={`row ${classes['popup-content']}`} tabIndex={-1}>
            <div className='col-md-6 p-0'><img src={product.img1} alt={product.name} /></div>
            <div className='col-md-6'>
                <h3 className={classes['product-name']}>{product.name}</h3>
                <div className={classes['product-price']}>{convertPrice(product.price)}</div>
                <div className={`mt-1 mb-3 ${classes.description}`}>{product.short_desc}</div>
                <button onClick={() => viewDetailClickHandler(product)} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill='#fff' d="M21.5,15a3,3,0,0,0-1.9-2.78l1.87-7a1,1,0,0,0-.18-.87A1,1,0,0,0,20.5,4H6.8L6.47,2.74A1,1,0,0,0,5.5,2h-2V4H4.73l2.48,9.26a1,1,0,0,0,1,.74H18.5a1,1,0,0,1,0,2H5.5a1,1,0,0,0,0,2H6.68a3,3,0,1,0,5.64,0h2.36a3,3,0,1,0,5.82,1,2.94,2.94,0,0,0-.4-1.47A3,3,0,0,0,21.5,15Zm-3.91-3H9L7.34,6H19.2ZM9.5,20a1,1,0,1,1,1-1A1,1,0,0,1,9.5,20Zm8,0a1,1,0,1,1,1-1A1,1,0,0,1,17.5,20Z" /></svg>View Detail</button>
            </div>
        </div>
    );
};

const QuickDetail = (props) => {

    return (
        <React.Fragment>
            {createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
            {createPortal(
                <PopupContent productId={props.productId} detailPopup={props.detailPopup} products={props.products} />,
                document.getElementById('popup-root')
            )}
        </React.Fragment>
    );
};
export default QuickDetail;
