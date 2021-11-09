import { useEffect } from "react"
import { useLocation } from "react-router"
import NavbarDesktop from "./NavbarDesktop"
import NavbarMovil from "./NavbarMovil.js"

const Navbar = () => {
    const location = useLocation()
    console.log(location)
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [location.pathname])
    return (
        <nav className="z-50">
            <div className="hidden lg:block">
                <NavbarDesktop />
            </div>
            <div className="block lg:hidden pb-16 lg:pb-0">
                <NavbarMovil />
            </div>
        </nav>
    )
}

export default Navbar
