import { Link } from 'react-router-dom';
import { roadmaps } from "../../../util/usefull-data.js";

export default function LeaningPaths() {
  return (
    <>
        <h3 className=' text-2xl bold ml-3 pb-2'>All Learning Paths</h3>
            <div className="bg-white p-10 rounded-md"> 
        <ul role="list" className="  grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {roadmaps.map((roadmap) => (
        <li key={roadmap.email} className="col-span-1 divide-gray-200 rounded-lg bg-white shadow">
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <h3 className=" text-sm font-medium text-black">{roadmap.name}</h3>
               
              </div>
              <p className="mt-2 text-sm text-gray-500">{roadmap.title}</p>
            </div>
          </div>
          <div>
            <div className=" ml-8">
              <div className="">
                <Link to={`${roadmap.id}`}>
                  <a
                    className="relative text-purple-700 inline-flex w-20 flex-1  gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    {roadmap.btnName}
                  </a>
                </Link>
                
              </div>
              
            </div>
          </div>
        </li>
      ))}
        </ul>
            </div>
    </>
    
    
  )
}
