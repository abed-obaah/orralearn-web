import { Fragment, useState } from 'react'
import { navigation} from '../../util/usefull-data.js'


import logo from '../../assets/logo white.svg'

import { Dialog, Transition } from '@headlessui/react'
import {

  Cog6ToothIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import {Link, NavLink, Outlet} from 'react-router-dom';
import AuthResNav from "../navbar/auth-navs/AuthResNav.jsx";
import Authfooter from "../footer/Authfooter.jsx";
import SideBar from "../navbar/auth-navs/SideBar.jsx";
import { useStateContext } from '../../context/contextProvider.jsx'
import { AiFillThunderbolt } from 'react-icons/ai'
import { FaCog } from 'react-icons/fa'


const AuthLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
        const { subscription } = useStateContext();
const getNavLinkClasses = (isActive) => {
  return `group flex lg:gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold cursor-pointer ${
    isActive
      ? "bg-white text-black"
      : "text-white hover:text-black hover:bg-white"
  }`;
};
  return (
    <>
      {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex ">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#560CC8] px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src={logo}
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <NavLink
                                  to={item.path}
                                  className={({ isActive }) =>
                                    `group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold cursor-pointer ${
                                      isActive
                                        ? "bg-white text-black"
                                        : "text-white hover:text-black hover:bg-white"
                                    }`
                                  }
                                >
                                  <item.icon className={"text-2xl"} />
                                  <span>{item.name}</span>
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto bg-white rounded hover:text-black">
                          {!subscription.subscribed ? (
                            <NavLink
                              to="/pricing"
                              className={({ isActive }) =>
                                getNavLinkClasses(isActive)
                              }
                            >
                              <AiFillThunderbolt
                                className="text-xl text-black"
                                aria-hidden="true"
                              />
                              <span className="hidden text-black  lg:block">
                                Upgrade To Pro
                              </span>
                            </NavLink>
                          ) : null}
                        </li>
                        <li className="hover:text-black">
                          <NavLink
                            to="/settings"
                            className={({ isActive }) =>
                              getNavLinkClasses(isActive)
                            }
                          >
                            <FaCog className="text-xl" aria-hidden="true" />

                            <span className="hidden lg:block text-white">Settings</span>
                          </NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <SideBar />
        <div className="md:pl-20 lg:pl-60">
          <AuthResNav setSidebarOpen={setSidebarOpen} />
          <main className="py-10 bgFive min-h-screen">
            <div className="px-4 sm:px-6 lg:px-8 ">
              <Outlet />
            </div>
          </main>
          <Authfooter />
        </div>
      </div>
    </>
  );
}

export default AuthLayout