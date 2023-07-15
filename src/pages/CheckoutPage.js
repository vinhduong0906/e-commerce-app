import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import PageHeader from '../components/base-components/PageHeader'
import BillingDetail from '../components/checkout-page/BillingDetail';
import Order from '../components/checkout-page/Order';
import ErrorBoundary from "../components/base-components/ErrorBoundary";
const CheckoutPage = () => {
    const cartList = useSelector(state => state.cartList);
    /*-----------Cart display when nothing in Cart-----------------*/
    if (cartList.length === 0) return <Fragment>
        <PageHeader />
        <div className='h3 text-center mt-5'>You must add some product into cart first!</div>
    </Fragment>
    /*----------------------------*/
    return <ErrorBoundary>
        {/*-----------Page Header-----------------*/}
        <PageHeader />
        {/*-----------Page Content-----------------*/}
        <div className='row'    >
            {/*-----------Billing Detail-----------------*/}
            <div className='col-sm-8 me-5'>
                <BillingDetail />
            </div>
            {/*-----------Order Detail-----------------*/}
            <div className='col'>
                <Order cartList={cartList} />
            </div>
        </div>
    </ErrorBoundary>
}; export default CheckoutPage 