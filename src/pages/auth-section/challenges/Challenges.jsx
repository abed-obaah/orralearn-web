
import {courses} from "../../../util/usefull-data.js";
import Card from "../../../components/challenges/Card.jsx";

const Challenges = () => {

    return (
        <div>
            <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
                <h3 className="text-base font-semibold leading-6 text-gray-900 text-xl">Challenges</h3>
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
          <ul role="list" className="grid grid-cols-1 bg-whitegap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8">
            {courses.map((course, i) => (
                <Card course={course} key={i}/>
            ))}
          </ul>
        </div>

    )
};

export default Challenges;
