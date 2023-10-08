import {total} from "../../util/usefull-data.js";
import {LockClosedIcon} from "@heroicons/react/20/solid/index.js";
import Flutter from "../../pages/Flutter.jsx"
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


const people = [
  { id: 1, name: 'Nigeria', online: true, currencyCode: 'NGN' },
  { id: 2, name: 'Cameroon', online: true, currencyCode: 'XAF' },
  { id: 3, name: 'Ghana', online: true, currencyCode: 'GHS' },
  { id: 4, name: 'United States of America', online: true, currencyCode: 'USD' },
  { id: 4, name: 'Kenya', online: true, currencyCode: 'USD' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



const CheckoutForm = () => {
  const [selected, setSelected] = useState(people[3]);
  
    return (
        <section
            aria-labelledby="payment-heading "
            className="lg:mt-[100px] flex-auto overflow-y-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-0"
        >
            <div className="mx-auto max-w-lg">
                <div className="mt-6">
                    <div className="grid grid-cols-12 gap-x-4 gap-y-6">
                        <div className="col-span-full">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    id="email-address"
                                    name="email-address"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                                first Name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    id="name-on-card"
                                    name="name-on-card"
                                    autoComplete="cc-name"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                                Last Name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    id="card-number"
                                    name="card-number"
                                    autoComplete="cc-number"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <Listbox value={selected} onChange={setSelected}>
                              {({ open }) => (
                                <>
                                  <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Country</Listbox.Label>
                                  <div className="relative mt-2">
                                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                      <span className="flex items-center">
                                        <span
                                          aria-label={selected.online ? 'Online' : 'Offline'}
                                          className={classNames(
                                            selected.online ? 'bg-green-400' : 'bg-gray-200',
                                            'inline-block h-2 w-2 flex-shrink-0 rounded-full'
                                          )}
                                        />
                                        <span className="ml-3 block truncate">{selected.name} ({selected.currencyCode})</span>
                                      </span>
                                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                      </span>
                                    </Listbox.Button>

                                    <Transition
                                      show={open}
                                      as={Fragment}
                                      leave="transition ease-in duration-100"
                                      leaveFrom="opacity-100"
                                      leaveTo="opacity-0"
                                    >
                                                 <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                
                                                        {people.map((person) => (
                                                          <Listbox.Option
                                                            key={person.id}
                                                            className={({ active }) =>
                                                              classNames(
                                                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                                              )
                                                            }
                                                            value={person}
                                                          >
                                                            {({ selected, active }) => (
                                                              <>
                                                                <div className="flex items-center">
                                                                  <span
                                                                    className={classNames(
                                                                      person.online ? 'bg-green-400' : 'bg-gray-200',
                                                                      'inline-block h-2 w-2 flex-shrink-0 rounded-full'
                                                                    )}
                                                                    aria-hidden="true"
                                                                  />
                                                                  <span className="ml-3 block truncate">
                                                                    {person.name} ({person.currencyCode})
                                                                  </span>
                                                                </div>

                                                                {selected ? (
                                                                  <span
                                                                    className={classNames(
                                                                      active ? 'text-white' : 'text-indigo-600',
                                                                      'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                    )}
                                                                  >
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                  </span>
                                                                ) : null}
                                                              </>
                                                            )}
                                                          </Listbox.Option>
                                                        ))}
                                                      </Listbox.Options>
                                                </Transition>
                                              </div>
                                            </>
                                          )}
                            </Listbox>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="cvc"
                                    id="cvc"
                                    autoComplete="csc"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <Flutter currencyCode={selected.currencyCode}/>
                    </button>

                    <p className="mt-6 flex justify-center text-sm font-medium text-gray-500">
                        <LockClosedIcon className="mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        Payment details stored in plain text
                    </p>
                    {/* <Flutter currencyCode={selected.currencyCode} /> */}
                </div>
            </div>
        </section>

    );
};

export default CheckoutForm;