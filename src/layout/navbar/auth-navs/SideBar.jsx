import logo from "../../../assets/logo white.svg";
import logoWhite from "../../../assets/shortlogowhite.svg";
import {navigation} from "../../../util/usefull-data.js";
import {NavLink} from "react-router-dom";
import {Cog6ToothIcon} from "@heroicons/react/24/outline/index.js";
import {BsCash} from "react-icons/bs";




const SideBar = () => {
    return (
        <div className="hidden md:fixed md:inset-y-0 md:z-50 md:flex md:w-20  lg:w-60 md:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#5E00D0] px-6 pb-4">
                <div className="hidden lg:flex h-16 shrink-0 items-center">
                    <img
                        className="h-8 w-auto"
                        src={logo}
                        alt="orralearn"
                    />
                </div>
                <div className="flex lg:hidden h-16 shrink-0 items-center">
                    <img
                        className="h-8 w-auto"
                        src={logoWhite}
                        alt="orralearn"
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
                                            className={({isActive}) => (`group flex lg:gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold cursor-pointer ${isActive ? 'bg-white text-black' : 'text-white hover:text-black hover:bg-white'}`)}
                                        >
                                            <item.icon className={'text-2xl'}/>
                                            <span className={'hidden lg:block'}>{item.name}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <div className="mt-auto flex flex-col gap-y-4 ">
                            <NavLink
                                to="authPricing"
                                className={({isActive}) => (`group flex lg:gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold cursor-pointer ${isActive ? 'bg-white text-black' : 'text-white hover:text-black hover:bg-white'}`)}
                            >

                                <BsCash
                                    className={'text-2xl'}
                                    aria-hidden="true"
                                />
                                <span className={'hidden lg:block '}> Pricing</span>

                            </NavLink>
                            <NavLink
                                to="settings"
                                className={({isActive}) => (`group flex lg:gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold cursor-pointer ${isActive ? 'bg-white text-black' : 'text-white hover:text-black hover:bg-white'}`)}
                            >

                                <Cog6ToothIcon
                                    className="h-6 w-6 shrink-0 "
                                    aria-hidden="true"
                                />
                                <span className={'hidden lg:block '}> Settings</span>

                            </NavLink>

                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideBar;