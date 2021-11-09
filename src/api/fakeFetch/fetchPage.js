
import pageData from "../fakeData/pages.json"
import categories from "../fakeData/categories.json"
import products from "../fakeData/products.json"
import fakeApi from "../fakeApi"
const categoriesProducts = () => {
    return categories.map((category) => {
        let productsFilter = products.filter((product) => product.category === category.slug)
        return { ...category, products: productsFilter }
    })
}
const fecthPage = async (page) => {
    return await fakeApi(() => {
        let categories = categoriesProducts()
        switch (page) {
            case "home":
                const productsFeatured = products.sort(() => Math.random() - Math.random()).slice(0, 8)
                return { ...pageData[page], categories_section: [categories[1], categories[2]], productsFeatured: productsFeatured }

            case "menus":
                return { ...pageData[page], categories }

            case "gift-cards":
                let cards = products.filter((product) => product.category === "gift-cards")
                return { ...pageData[page], cards }

            default:
                return pageData[page]
        }
    })
}
export default fecthPage
