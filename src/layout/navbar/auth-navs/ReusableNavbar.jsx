import logo from '../../../assets/logo.svg'
import {useStateContext} from "../../../context/contextProvider.jsx";

import {ChevronDownIcon, MagnifyingGlassIcon} from "@heroicons/react/20/solid/index.js";
import {BellIcon} from "@heroicons/react/24/outline/index.js";
import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {Link} from "react-router-dom";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const ReusableNavbar = () => {

    const {logout} = useStateContext()
    return (
        <div className= "w-full flex  justify-between  lg:gap-x-6 bg-white py-4 px-10 fixed z-[999]">
            <Link to={'/'} >
                 <img src={logo} alt={'orralearn logo'}/>
            </Link>
            <form className="relative hidden sm:flex w-[400px]  " action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                    Search
                </label>
                <MagnifyingGlassIcon
                    className="pointer-events-none absolute inset-y-0 left-2 h-full w-5 text-gray-400"
                    aria-hidden="true"
                />
                <input
                    id="search-field"
                    className=" rounded-md bg-[#F5F7FA] block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    type="search"
                    name="search"
                />
            </form>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                    type="button"
                    className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div
                    className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                    aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                    <Menu.Button className="-m-1.5 flex items-center p-1.5">
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="h-8 w-8 rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <span className="hidden lg:flex lg:items-center">
                      <span
                          className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                          aria-hidden="true"
                      >
                        Tom Cook
                      </span>
                      <ChevronDownIcon
                          className="ml-2 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                      />
                    </span>
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
                        <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">


                            <Menu.Item >
                                {({ active }) => (
                                    <Link to='/profile'

                                          className={classNames(
                                              active ? "bg-gray-50" : "",
                                              "block px-3 py-1 text-sm leading-6 text-gray-900"
                                          )}
                                    >
                                        Your profile
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item >
                                {({ active }) => (
                                    <div
                                        onClick={logout}

                                        className={classNames(
                                            active ? "bg-gray-50" : "",
                                            "block px-3 py-1 text-sm leading-6 text-gray-900"
                                        )}
                                    >
                                        Sign out
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>

    );
};

export default ReusableNavbar;