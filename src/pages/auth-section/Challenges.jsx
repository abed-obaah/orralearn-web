import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import {courses} from "../../util/usefull-data.js";
import { MdMaximize } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';

const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}

const clients = [
  {
    id: 1,
    name: 'Tuple',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
    lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
  },
  {
    id: 2,
    name: 'SavvyCal',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
    lastInvoice: { date: 'January 22, 2023', dateTime: '2023-01-22', amount: '$14,000.00', status: 'Paid' },
  },
  {
    id: 3,
    name: 'Reform',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
    lastInvoice: { date: 'January 23, 2023', dateTime: '2023-01-23', amount: '$7,600.00', status: 'Paid' },
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Challenges = ({item}) => {

  const Card = () => {
    return (
      <ul role="list" className="grid grid-cols-1 bg-whitegap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8">
        {courses.map((item, i) => (
          <li key={item.id} className="overflow-hidden bg-white rounded-xl border border-gray-200 flex flex-col justify-center items-center w-full">
            <div className="border-b border-gray-900/5 bg-gray-50 w-full">
              <div className="flex justify-center"> {/* Center the content */}
                <div style={{ 
                    width: '100%',
                    height:'50%'
                    }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-12 w-full flex-none  bg-white object-cover ring-1 ring-gray-900/10"
                    style={{ 
                     height:'50%',
                    }}
                  />
                  
                </div>
              </div>
            </div>
            <div className="text-sm font-medium leading-6 text-gray-900 w-full  mt-2">
            <div className="flex items-center">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-full bg-[#5E00D0] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-3"
                        >
                            {item.btnName}
                        </button>
                        <MdMaximize className="ml-3" />
                        <FiUsers className="ml-3" />
                        <p className="px-3">Participants:{item.participantCount}</p>
            </div>
                    <div className="mt-2 px-4 text-lg">{item.title}</div>
            </div>
            <Menu as="div" className="relative mt-2 ml-auto">
              <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Open options</span>
                <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
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
                <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        View<span className="sr-only">, {item.title}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        Edit<span className="sr-only">, {item.title}</span>
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
        ))}
      </ul>
    )
  }
  
  
  
  
  

  return (
    <div>


<div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-base font-semibold leading-6 text-gray-900 text-xl" >Challenges</h3>
      <div className="mt-3 flex sm:ml-4 sm:mt-0">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-800"
        >
          Active
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Beginner
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Entered
        </button>
      </div>
      
    </div>
            <div>
                    <Card />
            </div>
    </div>
   
  )
};

export default Challenges;
