import { Link } from "react-router-dom"
import Logo from "./Logo"
import routes from "./routes"
const Footer = () => {
    return (
        <div className="py-content border-t border-gray-200">
            <div className="text-center text-gray-700">
                <div className="text-4xl text-yellow-500">
                    <Logo />
                </div>
                <div className="mt-6">
                    <div className="inline-flex space-x-3 ">
                        <img className="w-9 h-9" src="/img/social/facebook-icon.png" alt="" />
                        <img className="w-9 h-9" src="/img/social/instagram-icon.png" alt="" />
                        <img className="w-9 h-9" src="/img/social/twt-icon.png" alt="" />
                        <img className="w-9 h-9" src="/img/social/ws-icon.png" alt="" />
                    </div>
                </div>
                <div className="mt-6">
                    <div className="inline-flex flex-wrap divide-x divide-gray-500 font-bold  justify-center uppercase">
                        <Link to={routes.about.path} className="px-3 lg:px-5 mb-4 leading-none">
                            {routes.about.name}{" "}
                        </Link>
                        <Link to={routes.menu.path} className="px-3 lg:px-5 mb-4 leading-none">
                            {routes.menu.name}
                        </Link>
                        <Link to={routes.hours.path} className="px-3 lg:px-5 mb-4 leading-none">
                            {routes.hours.name}
                        </Link>
                        <Link to={routes.gallery.path} className="px-3 lg:px-5 mb-4 leading-none">
                            {routes.gallery.name}
                        </Link>
                        <Link to={routes.giftCards.path} className="px-3 lg:px-5 mb-4 leading-none">
                            {routes.giftCards.name}
                        </Link>
                        <Link to={routes.contacts.path} className="px-3 lg:px-5 mb-4 leading-none">
                            {routes.contacts.name}
                        </Link>
                    </div>
                    <div className="mt-4 font-light">© 2020 Testo. All Rights Reserved</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
