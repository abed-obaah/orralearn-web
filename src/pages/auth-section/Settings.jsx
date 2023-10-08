

import {NavLink, Outlet} from "react-router-dom";

const tabs = [
    { name: 'Account', path: '/settings', },
    { name: 'Payment', path: 'payments',  },
    { name: 'Notification', path: 'notifications',  }
]

const Settings = () => {


    return (
        <div>
            <div className="border-b border-gray-200 ">
                <h3 className="text-base font-semibold leading-6 text-gray-900 text-xl mb-2">
                    Settings
                </h3>
                <div className="bg-white w-full py-4 px-8 sm:flex sm:items-baseline">
                    <div className="mt-2 sm:ml-10 sm:mt-0">
                        <nav className="-mb-px flex space-x-8">
                            {tabs.map((tab) => (
                                <NavLink to={tab.path}
                                         key={tab.name}
                                         className={({isActive}) => (`whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium cursor-pointer ${isActive ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`)}
                                         end
                                >
                                    {tab.name}
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            <div className={'mt-10'}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Settings;
