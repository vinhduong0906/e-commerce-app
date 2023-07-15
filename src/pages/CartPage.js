import { Fragment } from "react";
import PageHeader from "../components/base-components/PageHeader";
import Cart from "../components/cart-page/Cart";
import ErrorBoundary from "../components/base-components/ErrorBoundary";
const CartPage = () => {
    return <ErrorBoundary><PageHeader /> <Cart /></ErrorBoundary>
}; export default CartPage 