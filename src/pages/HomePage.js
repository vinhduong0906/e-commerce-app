import { Fragment, useEffect, useState } from "react";
import Banner from "../components/home-page/Banner";
import Categories from "../components/home-page/Categories";
import useHttp from "../hooks/use-http";
import TrendingProducts from "../components/home-page/TrendingProducts";
import { useOutletContext } from "react-router-dom";
import PlusService from "../components/home-page/PlusService";
import Subscribe from "../components/home-page/Subscribe";
import useProducts from "../hooks/use-products";
import ErrorBoundary from "../components/base-components/ErrorBoundary";
const HomePage = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);
    const { httpProducts, isLoading } = useProducts();
    /*-----------Set Trending Product to the first 8 position of product list get from server-----------------*/
    useEffect(() => {
        const products = httpProducts && httpProducts.map((prod, index) => index < 8 && prod)

        setTrendingProducts(products);
    }, [httpProducts])
    /*----------------------------*/
    return <ErrorBoundary>
        <Banner />
        <Categories />
        {!isLoading && trendingProducts.length > 0 && <TrendingProducts products={trendingProducts} />}
        <PlusService />
        <Subscribe />
    </ErrorBoundary>
};
export default HomePage 