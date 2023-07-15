/*-----------Process data get from Server to use-----------------*/
import useHttp from "./use-http";
import { useState, useEffect } from "react";
const useProducts = () => {
    const { isLoading,
        error,
        sendRequest, } = useHttp();
    const [httpProducts, setHttpProducts] = useState('');
    const requestProducts = (data) => {
        if (data) {
            const products = JSON.parse(JSON.stringify(data));
            setHttpProducts(products);
        }
    };
    useEffect(() => { sendRequest({ url: process.env.REACT_APP_PRODUCT_API }, requestProducts) }, [])



    return { isLoading, error, httpProducts }
}; export default useProducts 