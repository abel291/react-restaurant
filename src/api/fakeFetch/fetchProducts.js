import fakeApi from "../fakeApi"
import products from "../fakeData/products.json"
const fetchProducts = async (categorySlug, productSlug) => {
    return await fakeApi(() => {
        const relateProducts = products.filter((item) => item.category === categorySlug)
        const product = relateProducts.find((item) => item.slug === productSlug)

        return {
            product,
            relateProducts,
        }
    })
}

export default fetchProducts
