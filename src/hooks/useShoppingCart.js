import { useMutation, useQuery, useQueryClient } from "react-query"

import { useHistory } from "react-router"
import { fecthApplyDiscount, fetchRemoveProductToCart } from "../api/fakeFetch/fetchShoppingCart"
import apiClient from "../helpers/apiClient"

export const useShoppingCart = () => {
    const fetchShoppingCart = async () => {
        const response = await apiClient.get("shopping-cart").then((res) => {
            return res.data
        })
        return response
    }

    return useQuery(["shopping-cart"], fetchShoppingCart, {
        staleTime: Infinity,
    })
}

export const useAddProductToCart = () => {
    const queryClient = useQueryClient()
    const history = useHistory()

    return useMutation(
        async ({ id, quantity }) => {
            const response = await apiClient
                .post("shopping-cart", {
                    id: id,
                    quantity: quantity,
                })
                .then((res) => {
                    return res.data
                })
                .catch((error) => {
                    throw new Error(error.response.data.message)
                })

            return response
        },
        {
            onSuccess: function (response) {
                console.log(2)
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
        async ({ id }) => {
            const response = await apiClient
                .delete("shopping-cart/" + id)
                .then((res) => {
                    return res.data
                })
                .catch((error) => {
                    throw new Error(error.response.data.message)
                })

            return response
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
            const response = await apiClient
                .get("shopping-cart/apply-cupon-discount", { params: { code: code } })
                .then((res) => {
                    return res.data
                })
                .catch((error) => {
                    throw new Error(error.response.data.message)
                })

            return response
        },
        {
            onSuccess: function (response) {
                queryClient.setQueryData("shopping-cart", (oldData) => {
                    oldData.meta = response
                    return oldData
                })
            },
        }
    )
}
