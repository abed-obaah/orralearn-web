import {Fragment} from 'react';
import {useStateContext} from "../../../context/contextProvider.jsx";
import logo from "../../../assets/logo.svg";
import avatar from '../../../assets/avatar.jpg'

import {Bars3Icon, BellIcon} from "@heroicons/react/24/outline/index.js";
import {ChevronDownIcon} from "@heroicons/react/20/solid/index.js";
import {Menu, Transition} from "@headlessui/react";
import {Link, useLocation} from "react-router-dom";

// eslint-disable-next-line react/prop-types


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// eslint-disable-next-line react/prop-types
const AuthResNav = ({setSidebarOpen}) => {
    const {logout,userInfo} = useStateContext()
    const {pathname} = useLocation();
    const allowedPaths = ['/ebooks','/ebooks/*', '/checkoutCart', '/pdfReader/*','/coursePlayer'];
    let shouldShowComponent = false;

    for (const allowedPath of allowedPaths) {
        if (pathname === allowedPath || pathname.startsWith(allowedPath.replace('*', ''))) {
            shouldShowComponent = true;
            break;
        }
    }
    return (
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            {!shouldShowComponent && <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700 md:hidden"
                onClick={() => setSidebarOpen(true)}
            >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
            </button>}


            {!shouldShowComponent && <div
                className="h-6 w-px bg-gray-900/10 md:hidden"
                aria-hidden="true"
            />}
            {shouldShowComponent && <Link to={'/'}>
                <img src={logo} alt={'orralearn logo'}/>
            </Link>}
            <div className="w-full flex justify-end flex-1 gap-x-4 self-stretch lg:gap-x-6 bg-white">

                <div className=" flex  items-center gap-x-4 lg:gap-x-6">
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
                                src={userInfo.profileImage|| avatar}
                                alt=""
                            />
                            <span className="hidden lg:flex lg:items-center">
                      <span
                          className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                          aria-hidden="true"
                      >
                        {userInfo.userName}
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
                                                "block px-3 py-1 text-sm leading-6 text-gray-900 cursor-pointer"
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
        </div>
    );
};

export default AuthResNav;