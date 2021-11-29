import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import routes from "./layout/routes"
import "./index.css"
import Footer from "./layout/Footer"
import Navbar from "./layout/navbar/Navbar"
import { QueryClient, QueryClientProvider } from "react-query"
//import PrivateRoute from "./auth/PrivateRoute"
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retryDelay: 0,
            refetchOnWindowFocus: false,
        },
    },
})
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Navbar />
                <Switch>
                    {Object.values(routes).map((route) => (
                        <Route key={route.path} exact path={route.path} component={route.component} />
                    ))}

                    {/* {Object.values(routes).map(({ path, component, type }, key) =>
                        type === "public" ? (
                            <Route key={key} exact path={path} component={component} />
                        ) : (
                            <PrivateRoute key={key} exact path={path} component={component} />
                        )
                    )} */}
                </Switch>

                <Footer />
            </Router>
        </QueryClientProvider>
    )
}

export default App
