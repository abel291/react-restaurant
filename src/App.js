
import {  BrowserRouter as Router } from "react-router-dom"
import BannerHero from "./components/BannerHero"
import "./index.css"
import Header from "./layout/Header.js"

function App() {
    return (
        <Router>
            <Header/>
            <BannerHero/>
        </Router>
    )
}

export default App
