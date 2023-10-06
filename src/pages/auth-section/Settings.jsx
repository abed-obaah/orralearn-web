

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

      <ul
        role="list"
        className="divide-y divide-gray-100 mt-2 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
      >
        {activeTab === 'Account' && (
          <><li
                      key="Account"
                      className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
                  >
                      <div className="flex min-w-0 gap-x-4">
                          <div className="min-w-0 flex-auto">
                              <p className="text-sm font-semibold leading-6 text-gray-900">
                                  <a href="#account">
                                      <span className="absolute inset-x-0 -top-px bottom-0" />
                                      Change Email
                                  </a>
                              </p>
                              <p className="mt-1 flex text-xs leading-5 text-gray-500">
                                  Update and verify your email address
                              </p>
                          </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-x-4">
                          <ChevronRightIcon
                              className="h-5 w-5 flex-none text-gray-400"
                              aria-hidden="true" />
                      </div>
                  </li>
                     <li
                      key="Account"
                      className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
                  >
                          <div className="flex min-w-0 gap-x-4">
                              <div className="min-w-0 flex-auto">
                                  <p className="text-sm font-semibold leading-6 text-gray-900">
                                      <a href="#account">
                                          <span className="absolute inset-x-0 -top-px bottom-0" />
                                          Change Username
                                      </a>
                                  </p>
                                  <p className="mt-1 flex text-xs leading-5 text-gray-500">
                                      Update your username
                                  </p>
                              </div>
                          </div>
                          <div className="flex shrink-0 items-center gap-x-4">
                              <ChevronRightIcon
                                  className="h-5 w-5 flex-none text-gray-400"
                                  aria-hidden="true" />
                          </div>
                    </li>
                     <li
                      key="Account"
                      className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
                  >
                          <div className="flex min-w-0 gap-x-4">
                              <div className="min-w-0 flex-auto">
                                  <p className="text-sm font-semibold leading-6 text-gray-900">
                                      <a href="#account">
                                          <span className="absolute inset-x-0 -top-px bottom-0" />
                                          Change Password
                                      </a>
                                  </p>
                                  <p className="mt-1 flex text-xs leading-5 text-gray-500">
                                      Update your Password
                                  </p>
                              </div>
                          </div>
                          <div className="flex shrink-0 items-center gap-x-4">
                              <ChevronRightIcon
                                  className="h-5 w-5 flex-none text-gray-400"
                                  aria-hidden="true" />
                          </div>
                    </li>
                      
                </>
          
        )}

        {activeTab === 'Payment' && (
          <li
            key="Payment"
            className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
          >
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  <a href="#payment">
                    <span className="absolute inset-x-0 -top-px bottom-0" />
                    Bank Account Details
                  </a>
                </p>
                <div className='m-10'>
                        <h4 className='text-indigo-400'>Account Number</h4>
                        <p className="mt-1 flex text-xs leading-5 text-gray-500">
                        1234567890
                        </p>
                </div>
                
                <div className='m-10'>
                    <h4 className='text-indigo-400'>Bank</h4>
                    <p className="mt-1 flex text-xs leading-5 text-gray-500">
                    Zenith Bank
                    </p>
                </div>
                
                <div className='m-10'>
                        <h4 className='text-indigo-400'>Account Name</h4>
                        <p className="mt-1 flex text-xs leading-5 text-gray-500">
                        Faith Daniel Oluwafemi
                        </p>
                </div>
                

                <p className="text-sm font-semibold leading-6 text-indigo-400 mt-60">
                                      <a href="#account">
                                          <span className="absolute inset-x-0 -top-px bottom-0" />
                                          Change Account Details
                                      </a>
                                  </p>
              </div>
            </div>
            
          </li>
        )}

        {activeTab === 'Notification' && (
            <>
            
            <div>
                <h2 className='m-10'>Email</h2>
                <Switch.Group as="div" className=" py-4 m-4 border-2 rounded-md  flex "
                style={{
                    width:'26rem'
                }}
        >
                <span className="flex  flex-col">
                <Switch.Label as="span" className=" px-10 mr-40 text-sm font-medium leading-2 text-gray-900" passive>
                Purchase 
                </Switch.Label>
        </span>
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={classNames(
            enabled ? 'bg-indigo-600' : 'bg-gray-200',
            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
            )}
        >
            <span
            aria-hidden="true"
            className={classNames(
                enabled ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
            )}
            />
        </Switch>
                </Switch.Group>
                <Switch.Group as="div" className=" py-4 m-4 border-2 rounded-md  flex "
                style={{
                    width:'26rem'
                }}
        >
                <span className="flex  flex-col mt-2">
                <Switch.Label as="span" className=" px-10 mr-40 text-sm font-medium leading-2 text-gray-900" passive>
                Purchases Update
                </Switch.Label>
        </span>
        <Switch
            checked={update}
            onChange={setUpdate}
            className={classNames(
                update ? 'bg-indigo-600' : 'bg-gray-200',
            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
            )}
        >
            <span
            aria-hidden="true"
            className={classNames(
                update ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
            )}
            />
        </Switch>
                </Switch.Group>
            </div>
             
            
            </>
         
        )}
      </ul>
      <div className={'mt-10'}>
        <Outlet/>
      </div>
    </div>
  );
};

export default Settings;
