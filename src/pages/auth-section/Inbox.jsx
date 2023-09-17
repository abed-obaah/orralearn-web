import React, { useState } from 'react';





const Inbox = () => {
    const [toValue, setToValue] = useState('');

    const handleInputChange = (e) => {
      setToValue(e.target.value);
    };

    return (
        <div className="">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-2xl  font-semibold leading-6 text-gray-900">Direct messages</h3>
            <div className="relative mt-2">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                </div>
               
            </div>
           <form className="mt-5  sm:flex sm:items-center outline-none">
                    <div className="w-96 sm:max-w-xs relative outline-none">
                        <label htmlFor="email" className="sr-only outline-none">
                        To:
                        </label>
                        <span className="absolute inset-y-0 left-0 pl-3 text-xl flex items-center text-gray-600 outline-none">
                        To:|
                        </span>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        className=" bg-transparent block w-96 h-12  rounded-md text-xl border-0 py-1.5 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-0   sm:text-sm sm:leading-6 pl-12 "
                        placeholder=" @somebody or somebody@example.com"
                        value={toValue}
                        onChange={handleInputChange}
                        />
                    </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                </div>
               
            </div>
          </div>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 py-24 sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto  text-center text-3xl font-bold tracking-tight text-black sm:text-4xl">
          ⚡ Keep track of your conversations with coworkers.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-400">
           You'll see a list of all your direct messages here - with the latest messages,
            you can tell what's new at a glance or who messaged you.
          </p>
          
        </div>
      </div>
        </div>
      )
};

export default Inbox;