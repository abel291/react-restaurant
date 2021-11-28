import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon, ShoppingBagIcon } from "@heroicons/react/solid"
import { Fragment } from "react"
import { Link, NavLink } from "react-router-dom"
import { useUser } from "../../hooks/useAuth"
import Logo from "../Logo"
import routes from "../routes"
import ProfileDropdown from "./ProfileDropdown"
const routesAbout = [
    {
        name: routes.about.name,
        path: routes.about.path,
    },
    {
        name: routes.team.name,
        path: routes.team.path,
    },
    {
        name: routes.faqs.name,
        path: routes.faqs.path,
    },
    {
        name: routes.terms.name,
        path: routes.terms.path,
    },
    {
        name: routes.giftCards.name,
        path: routes.giftCards.path,
    },
    {
        name: routes.contacts.name,
        path: routes.contacts.path,
    },
]
const NavbarDesktop = () => {
    const { data: user } = useUser()
    return (
        <div className="container py-5 text-white absolute inset-x-0  ">
            <div className="h-20 flex items-center justify-between">
                <div className="text-2xl">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <div>
                    <div className="flex items-center space-x-8 font-primary text-lg ">
                        <NavLink to={routes.menu.path} className="">
                            {routes.menu.name}
                        </NavLink>

                        {/* <NavLink to={routes.about.path}>{routes.about.name}</NavLink> */}

                        <NavLink to={routes.gallery.path}>{routes.gallery.name}</NavLink>

                        <NavLink to={routes.hours.path}>{routes.hours.name}</NavLink>
                        <MenuHeader title="Nosotros" data={routesAbout} />

                        <div className="text-2xl font-bold text-yellow-400">321-456-798</div>
                        <NavLink to={routes.shoppingCart.path}>
                            <ShoppingBagIcon className="h-8 w-8" />
                        </NavLink>
                        {user?(
                            <ProfileDropdown/>
                        ):(
                            <NavLink to={routes.login.path}>
                                Login
                            </NavLink>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

const MenuHeader = ({ title, data }) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center ">
                <span className=" font-primary">{title}</span>
                <ChevronDownIcon className="h-5 w-5" />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 w-60 mt-2 origin-top-right bg-yellow-500 divide-y divide-yellow-600 divide-opacity-30  shadow-lg focus:outline-none text-white uppercase font-roboto font-bold text-sm tracking-wide rounded">
                    {data.map((item) => (
                        <Menu.Item key={item.path}>
                            <div className="py-3     px-3">
                                <Link to={item.path}>{item.name}</Link>
                            </div>
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
export default NavbarDesktop
