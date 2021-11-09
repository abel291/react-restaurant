import { useMutation, useQuery, useQueryClient } from "react-query"

import { useHistory } from "react-router"
import { fecthApplyDiscount, fetchAddProductToCart, fetchRemoveProductToCart, fetchShoppingCart } from "../api/fakeFetch/fetchShoppingCart"

export const useShoppingCart = () => {
    return useQuery(
        ["shopping-cart"],
        fetchShoppingCart,

        {
            staleTime: Infinity,
        }
    )
}

export const useAddProductToCart = () => {
    const queryClient = useQueryClient()
    const history = useHistory()
    return useMutation(fetchAddProductToCart, {
        onSuccess: function (response) {
            history.push("/shopping-cart")
            queryClient.setQueryData("shopping-cart", () => {
                return response
            })
        },
    })
}

export const useRemoveProductToCart = () => {
    const queryClient = useQueryClient()

    return useMutation(fetchRemoveProductToCart, {
        onSuccess: function (response) {
            queryClient.setQueryData("shopping-cart", () => {
                return response
            })
        },
    })
}

export const useApplyDiscount = () => {
    const queryClient = useQueryClient()

    return useMutation(fecthApplyDiscount, {
        onSuccess: function (response) {
            queryClient.setQueryData("shopping-cart", () => {
                return response
            })
        },
    })
}
