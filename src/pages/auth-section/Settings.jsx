

import {Outlet} from "react-router-dom";

const tabs = [
  { name: 'Account', href: '#', current: true },
  { name: 'Payment', href: '#', current: false },
  { name: 'Notification', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

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
                <a
                  key={tab.name}
                  href={tab.href}
                  onClick={() => handleTabClick(tab.name)}
                  className={classNames(
                    tab.current
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                </a>
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
