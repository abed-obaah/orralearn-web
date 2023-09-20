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
            <div className="mt-2 px-4 text-lg">{selectedCourse.title}</div>
            <div className="mt-2 px-4 text-lg">
                <div className="border-t border-l border-dashed border-gray-300 mb-2 w-1/2" />
                {selectedCourse.subTitle}
                <div className="border-t border-dashed border-gray-300 mt-2 w-1/2" />
            </div>
            <ol className="list-decimal pl-4">
            {selectedCourse.items.map((item, index) => (
              <li key={index}>
                <strong>{item.mainItem}</strong>
                <ul className="list-disc pl-4">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>


          </div>
        ) : (
          <p>Course not found.</p>
        )}
      </div>
    </div>
  );
};

export default ChallengesDetails;
