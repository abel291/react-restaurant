import { useQuery } from "react-query"
import fakeApi from "../api/fakeApi"

import products from "../api/fakeData/products.json"

const useProduct = (categorySlug, productSlug) => {
    return useQuery(["product", productSlug], async () => {
        return await fakeApi(() => {
            const relateProducts = products.filter((item) => item.category === categorySlug)
            const product = relateProducts.find((item) => item.slug === productSlug)
            
            return {
                product,
                relateProducts,
            }
            
        })
    })
}

export default useProduct
