import { useQuery } from "react-query"
import fetchProducts from "../api/fakeFetch/fetchProducts"

const useProduct = (categorySlug, productSlug) => {
    return useQuery(["product", productSlug], () => fetchProducts(categorySlug, productSlug))
}

export default useProduct
