import image from '../../../assets/learningpathsdetails.png';
import React from 'react';
import { useParams } from 'react-router-dom';
import { roadmaps } from '../../../util/usefull-data';


const plans = [
    {
      id: 1,
      name: 'Hobby',
      memory: '4 GB RAM',
      cpu: '4 CPUs',
      
    },
    {
      id: 2,
      name: 'Startup',
      memory: '8 GB RAM',
      cpu: '6 CPUs',
      
    },
  ]

export default function LearningPathsDetails() {
  const { id } = useParams();
  const selectedRoadmap = roadmaps.find((roadmap) => roadmap.id === parseInt(id));

  if (!selectedRoadmap) {
    return <div>Card not found</div>;
  }
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-white rounded-md">
      <div className="">
        <div className="relative">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
              <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-2 lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    {selectedRoadmap.name} Learning Path
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    {selectedRoadmap.title}
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-full bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover-bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Progress
                    </a>
                  </div>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-lg bg-indigo-600 px-52 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white lg:absolute lg:inset-y-3 lg:right-0 ">
            <img className="" src={image} alt="" />
          </div>
        </div>
        {/* table */}
         <div className=" py-10 px-4 sm:px-6 lg:px-8 bg-white">
            <h1 className=' font-bold text-lg'>LEARNING PATH CONTENT</h1>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">{selectedRoadmap.name}</h1>
        </div>
      </div>
      <div className="bg-white -mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
        <table className=" min-w-full divide-y divide-gray-300">
          <thead className='bg-black'>
            <tr className='bg-black'>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                Module
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-white lg:table-cell"
              >
                Topic
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-white lg:table-cell"
              >
                Description
              </th>
             
            </tr>
          </thead>
          <tbody>
        {selectedRoadmap.module.map((module, moduleIdx) => (
          <tr key={moduleIdx}>
            <td
              className={classNames(
                moduleIdx === 0 ? "" : "border-t border-transparent",
                "relative py-4 pl-4 pr-3 text-sm sm:pl-6"
              )}
            >
              <div className="font-medium text-gray-900">{module.number}</div>
            </td>
            <td
              className={classNames(
                moduleIdx === 0 ? "" : "border-t border-gray-200",
                "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
              )}
            >
              {module.topic}
            </td>
            <td
              className={classNames(
                moduleIdx === 0 ? "" : "border-t border-gray-200",
                "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
              )}
            >
              {module.description}
            </td>
          </tr>
        ))}
      </tbody>
        </table>
      </div>
         </div>
      </div>
    </div>
  );
}
