import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { ChevronDownIcon } from "@heroicons/react/solid"

import { Link } from "react-router-dom"
import { useLogout, useUser } from "../../hooks/useAuth"

const ProfileDropdown = () => {
    const { data: user } = useUser()
    const logout = useLogout()

    if (logout.isLoading) return "..."

    return (
        <Menu as="div" className="relative inline-block z-40 ">
            <Menu.Button className="inline-flex items-center rounded-md font-primary">
                {user.name}
                <ChevronDownIcon className="w-5 h-5 ml-1 -mr-1 text-violet-200 hover:text-violet-100" aria-hidden="true" />
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
                <Menu.Items className="absolute right-0 text-sm  w-52 mt-2 origin-top-right bg-yellow-500 divide-y divide-yellow-600 divide-opacity-30  shadow-lg focus:outline-none text-white uppercase font-roboto font-bold tracking-wide rounded">
                    <div>
                        <Menu.Item>
                            <Link to="/my-account" className="px-3 py-3 block">
                                <div className="flex items-center">
                                    {/* <UserCircleIcon className="h-5 w-5 mr-2"/> */}
                                    <span>Mi cuenta</span>
                                </div>
                            </Link>
                        </Menu.Item>
                    </div>
                    <div>
                        <Menu.Item>
                            <button
                                onClick={() => {
                                    logout.mutate()
                                }}
                                className="px-3 py-3 block w-full text-left"
                            >
                                <span>Salir</span>
                            </button>
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default ProfileDropdown
