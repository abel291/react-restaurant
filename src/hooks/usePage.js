import { useQuery } from "react-query"
import fakeApi from "../api/fakeApi"
import pageData from "../api/fakeData/pages.json"
import categories from "../api/fakeData/categories.json"
import products from "../api/fakeData/products.json"

const usePage = (page) => {
    const categoriesProducts = () => {
        return categories.map((category) => {
            let productsFilter = products.filter((product) => product.category === category.slug)
            return { ...category, products: productsFilter }
        })
    }
    return useQuery(["page", page], async () => {
        return await fakeApi(() => {
            let categories = categoriesProducts()
            switch (page) {
                case "home":
                    const productsFeatured = products.sort(() => Math.random() - Math.random()).slice(0, 8)
                    return { ...pageData[page], categories_section: [categories[1], categories[2]], productsFeatured:productsFeatured }

                case "menus":
                    return { ...pageData[page], categories }

                case "gift-cards":
                    let cards = products.filter((product) => product.category === "gift-cards")
                    return { ...pageData[page], cards }

                default:
                    return pageData[page]
            }
        })
    })
}

export default usePage
