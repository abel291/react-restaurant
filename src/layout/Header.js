import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { ShoppingBagIcon } from "@heroicons/react/outline"
import { Fragment } from "react"
import { Link, NavLink } from "react-router-dom"
import Logo from "./Logo"
const data = {
    title: "Sobre Nosotrtos",
    items: [
        {
            name: "Nosotros",
            path: "/",
        },
        {
            name: "Nuestro equipo",
            path: "/",
        },
    ],
}
const Header = () => {
    return (
        <header className="py-5 text-white absolute inset-x-0 z-50">
            <div className="container">
                <div className="h-20 flex items-center justify-between">
                    <div className="text-2xl">
                        <Logo/>
                    </div>
                    <div>
                        <div className="flex items-center space-x-8 font-primary text-lg ">
                            <NavLink to="/">Menu</NavLink>
                            <MenuHeader data={data} />
                            <NavLink to="/">Galeria</NavLink>
                            <NavLink to="/">Blog</NavLink>
                            <NavLink to="/">Horario y hubicacion</NavLink>

                            <div className="text-2xl font-bold text-yellow-400">321-456-798</div>
                            <ShoppingBagIcon className="h-8 w-8" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

const MenuHeader = ({ data }) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center ">
                <span className=" font-primary">{data.title}</span>
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
                <Menu.Items className=" absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-600 font-roboto text-sm font-mediun normal-case">
                    {data.items.map((item) => (
                        <Menu.Item>
                            <div className="py-2 px-3">
                                <Link to={item.path}>{item.name}</Link>
                            </div>
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default Header
