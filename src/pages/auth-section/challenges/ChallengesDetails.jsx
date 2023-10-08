import React from 'react';
import { MdMaximize, MdArrowForward } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import { useParams, Link } from 'react-router-dom';
import { courses } from "../../../util/usefull-data.js";


const ChallengesDetails = () => {
  const { id } = useParams();

  const selectedCourse = courses.find(course => course.id === parseInt(id, 10));

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        {selectedCourse ? (
          <div className="text-sm font-medium leading-6 text-gray-900 w-full mt-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                    <button
                    type="button"
                    className="inline-flex items-center rounded-full bg-[#5E00D0] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-3"
                >
                    {selectedCourse.btnName}
                </button>
                  <MdMaximize className="ml-3" />
                  <FiUsers className="ml-3" />
                  <p className="px-3">Participants: {selectedCourse.participantCount}</p>
              </div>
        
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                      <button
                          type="button"
                          className="w-full sm:w-auto inline-flex items-center rounded-full bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-800"
                      >
                          Related Ebooks
                      </button>
                            <button
                                type="button"className="w-full sm:w-auto inline-flex items-center rounded-full border bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Related Courses
                            </button>
              </div>

            </div>

            <div className="mt-2 px-4 text-2xl font-bold"><h1>{selectedCourse.title}</h1></div>
            <fieldset>
  {selectedCourse.items.map((item, index) => (
    <div className="relative flex items-start border p-3 rounded-full mb-3 border-gray-300" key={index}>
      <div className="flex-1 text-sm leading-6">
                    <Link to={`/challenges/${selectedCourse.id}/${item.id}`}>
                        <label htmlFor="comments" className="font-medium text-gray-900">
                          {item.mainItem}
                        </label>
                  </Link>
      </div>
      <div className="flex items-center">
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="h-4 w-4 rounded border border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <span id="comments-description" className="text-gray-500 flex-1 pr-2">
          Mark as completed.
        </span>
      </div>
    </div>
  ))}
</fieldset>


          </div>
        ) : (
          <p>Course not found.</p>
        )}
      </div>
    </div>
  );
};

export default ChallengesDetails;
