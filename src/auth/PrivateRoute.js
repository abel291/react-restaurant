import { Route, Redirect, useLocation } from "react-router-dom"

import PageLoading from "../components/PageLoading"
import { useUser } from "../hooks/useAuth"

//import { useEffect, useState } from "react"

const PrivateRoute = (props) => {
    const location = useLocation()
    const user = useUser()

    if (user.isLoading) return <PageLoading />

    if (user.error) return "An error has occurred: " + user.error.message

    return user.data ? (
        <Route {...props} />
    ) : (
        <Redirect
            to={{
                pathname: "/login",
                state: { from: location },
            }}
        />
    )
}
export default PrivateRoute
