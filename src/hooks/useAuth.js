import { useMutation, useQuery, useQueryClient } from "react-query"
import useApiAuthClient from "./useApiAuthClient"

export const useUser = () => {
    const apiAuthClient = useApiAuthClient()
    return useQuery(
        ["USER"],
        async () => {
            if (!localStorage.getItem("token")) {
                return null
            }
            const response = await apiAuthClient
                .get("/auth/profile")
                .then((res) => res.data)
                .catch((res) => null)
            return response
        },
        { staleTime: Infinity }
    )
}

export const useLogin = (dataLogin) => {
    const apiAuthClient = useApiAuthClient()
    const queryClient = useQueryClient()
    return useMutation(
        async (dataLogin) => {
            const response = await apiAuthClient.post("/auth/login", { ...dataLogin })
            return response
        },
        {
            onSuccess: function (res) {
                queryClient.setQueryData("USER", () => {
                    return res.data.user
                })
            },
        }
    )
}

export const useRegister = (registerData) => {
    const apiAuthClient = useApiAuthClient()
    const queryClient = useQueryClient()
    return useMutation(
        async (registerData) => {
            const response = await apiAuthClient.post("/auth/register", {
                ...registerData,
            })

            return response
        },
        {
            onSuccess: function (res) {
                queryClient.setQueryData("USER", () => {
                    return res.data.user
                })
            },
        }
    )
}
export const useLogout = () => {
    const apiAuthClient = useApiAuthClient()
    const queryClient = useQueryClient()
    return useMutation(
        async () => {
            const response = await apiAuthClient.post("/auth/logout")
            return response
        },
        {
            onSuccess: function (response) {
                queryClient.setQueryData("USER", null)
                localStorage.removeItem("token")
            },
        }
    )
}
