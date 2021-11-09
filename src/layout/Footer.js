import { Link } from "react-router-dom"
import Logo from "./Logo"

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
                    <div className="inline-flex flex-wrap divide-x divide-gray-500 font-bold  justify-center">
                        <Link to="/" className="px-3 lg:px-5 mb-4 leading-none"> ABOUT</Link>
                        <Link to="/" className="px-3 lg:px-5 mb-4 leading-none">MENU</Link>
                        <Link to="/" className="px-3 lg:px-5 mb-4 leading-none">ORDER NOW</Link>
                        <Link to="/" className="px-3 lg:px-5 mb-4 leading-none">GALLERY</Link>
                        <Link to="/" className="px-3 lg:px-5 mb-4 leading-none">GIFT CARDS</Link>
                        <Link to="/" className="px-3 lg:px-5 mb-4 leading-none">CONTACTS</Link>
                    </div>
                    <div className="mt-4 font-light">
                    © 2020 Testo. All Rights Reserved
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
