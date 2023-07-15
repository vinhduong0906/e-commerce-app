import { useParams, useOutletContext } from "react-router-dom";
import { useSeletor } from 'react-redux';
import SideBar from "../components/shop-page/SideBar";
import { Fragment } from "react";
import Form from "../components/shop-page/Form";
import ShopListProduct from "../components/shop-page/ShopListProducts";
import useProducts from "../hooks/use-products";
import PageHeader from "../components/base-components/PageHeader";
import ErrorBoundary from "../components/base-components/ErrorBoundary";

const ShopPage = () => {
    const { httpProducts, isLoading } = useProducts();
    const { category } = useParams();
    /*-------------Filter the product foreach Category---------------*/
    let products = [];
    if (category === 'all' && httpProducts) products = JSON.parse(JSON.stringify(httpProducts));
    else products = httpProducts && httpProducts.filter(prod => prod.category === category)
    /*----------------------------*/
    return <ErrorBoundary>
        <PageHeader />
        <div className="row ">
            <div className="col-sm-3 p-0"><SideBar /></div>
            <div className="col-sm-9 pe-0 ">
                <Form />
                <ShopListProduct isLoading={isLoading} products={products} key={Math.random()} />
            </div>
        </div>
    </ErrorBoundary>
}; export default ShopPage 