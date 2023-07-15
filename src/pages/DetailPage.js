import ProductDetail from "../components/detail-page/ProductDetail";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../components/base-components/ErrorBoundary";
const DetailPage = () => {
    const { productId } = useParams();
    return <ErrorBoundary><ProductDetail productId={productId} /></ErrorBoundary>
}; export default DetailPage 