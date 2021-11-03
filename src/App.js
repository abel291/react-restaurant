
import {  BrowserRouter as Router } from "react-router-dom"

import "./index.css"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Home from "./page/home/Home"

function App() {
    return (
        <Router>
            {/* <Header/> */}
            <Home/>
            <Footer/>
        </Router>
    )
}

export default App
