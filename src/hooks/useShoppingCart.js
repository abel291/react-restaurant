import { useMutation, useQuery, useQueryClient } from "react-query"
import fakeApi from "../api/fakeApi"

import products from "../api/fakeData/products.json"
import discountCodes from "../api/fakeData/discountCodes.json"
import { useHistory } from "react-router"

const initData = () => {
    //selecciono aleatoriamente 5 productos
    const productsInCart = products
        .sort(() => Math.random() - Math.random())
        .slice(0, 5)
        .map((product) => {
            product.quantity = 1
            return product
        })

    return totalPrice({ products: productsInCart })
}
const totalPrice = ({ products, discount }) => {
    let subtotal = products.reduce(function (accumulator, item) {
        return accumulator + item.quantity * item.price
    }, 0)
    let total = subtotal

    if (discount) {
        discount.amount = total * (discount.percent / 100)
        total = total - discount.amount
    }

    const shoppingCart = {
        total: total,
        sub_total: subtotal,
        products: products,
        discount,
    }

    sessionStorage.setItem("shoppingCartSession", JSON.stringify(shoppingCart))
    return shoppingCart
}

export const useShoppingCart = () => {
    return useQuery(
        ["shopping-cart"],
        async () => {
            return await fakeApi(() => {
                return initData()
            })
        },
        {
            staleTime: Infinity,
        }
    )
}

export const useAddProductToCart = () => {
    const queryClient = useQueryClient()
    const history = useHistory()
    return useMutation(
        async ({ slug, quantity }) => {
            return await fakeApi(() => {
                let newShoppingCart = {}
                if (sessionStorage.shoppingCartSession) {
                    newShoppingCart = JSON.parse(sessionStorage.shoppingCartSession)
                } else {
                    newShoppingCart = initData()
                }

                let productIndex = newShoppingCart.products.findIndex((item) => item.slug === slug)

                //si ya esta en el carrito de compra
                if (productIndex !== -1) {
                    newShoppingCart.products[productIndex].quantity = parseInt(quantity)
                } else {
                    let product = products.find((item) => item.slug === slug)

                    if (product) {
                        product.quantity = quantity
                        newShoppingCart.products.push(product)
                    }
                }

                const shoppingCart = totalPrice(newShoppingCart)
                return shoppingCart
            })
        },
        {
            onSuccess: function (response) {
                history.push("/shopping-cart")
                queryClient.setQueryData("shopping-cart", () => {
                    return response
                })
            },
        }
    )
}

export const useRemoveProductToCart = () => {
    const queryClient = useQueryClient()

    return useMutation(
        async ({ slug }) => {
            return await fakeApi(() => {
                let newShoppingCart = {}
                if (sessionStorage.shoppingCartSession) {
                    newShoppingCart = JSON.parse(sessionStorage.shoppingCartSession)
                } else {
                    newShoppingCart = initData()
                }
                newShoppingCart.products = newShoppingCart.products.filter((item) => item.slug !== slug)

                const shoppingCart = totalPrice(newShoppingCart)
                return shoppingCart
            })
        },
        {
            onSuccess: function (response) {
                queryClient.setQueryData("shopping-cart", () => {
                    return response
                })
            },
        }
    )
}

export const useApplyDiscount = () => {
    const queryClient = useQueryClient()

    return useMutation(
        async ({ code }) => {
            return await fakeApi(() => {
                const newShoppingCart = JSON.parse(sessionStorage.shoppingCartSession)

                const discount = discountCodes.find((item) => item.code === code)
                if (discount) {
                    newShoppingCart.discount = discount
                }

                const shoppingCart = totalPrice(newShoppingCart)
                return shoppingCart
            })
        },
        {
            onSuccess: function (response) {
                queryClient.setQueryData("shopping-cart", () => {
                    return response
                })
            },
        }
    )
}
