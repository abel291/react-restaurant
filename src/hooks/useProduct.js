import { useQuery } from "react-query"
import apiClient from "../helpers/apiClient"

const useProduct = (productSlug) => {
    return useQuery(["product", productSlug], () => fetchProducts(productSlug), {
        staleTime: Infinity,
        retry: 1,
    })
}
const fetchProducts = async (productSlug) => {
    const response = await apiClient.get("/product/" + productSlug).then((response) => {
        return response.data
    })
    return response
}

export default useProduct
