import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import routes from "./layout/routes"
import "./index.css"
import Footer from "./layout/Footer"
import Navbar from "./layout/navbar/Navbar"
import {QueryClient, QueryClientProvider } from "react-query"
const queryClient = new QueryClient()
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Navbar />
                <Switch>
                    {Object.values(routes).map((route) => (
                        <Route key={route.path} exact path={route.path} component={route.component} />
                    ))}
                </Switch>

                <Footer />
            </Router>
        </QueryClientProvider>
    )
}

export default App
