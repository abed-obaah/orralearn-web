import { MdMaximize, MdArrowForward } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Card = ({ course }) => {
  return (
    <li className="overflow-hidden bg-white rounded-xl border border-gray-200 flex flex-col justify-center items-center w-full">
      {/* Wrap the entire card content with a Link */}
      <Link to={`${course.id}`} className="w-full h-full">
        <div className="border-b border-gray-900/5 bg-gray-50 w-full">
          <div className="flex justify-center"> {/* Center the content */}
            <div style={{
              width: '100%',
              height: '50%'
            }}>
              <img
                src={course.image}
                alt={course.title}
                className="h-12 w-full flex-none  bg-white object-cover ring-1 ring-gray-900/10"
                style={{
                  height: '50%',
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
              {course.btnName}
            </button>
            <MdMaximize className="ml-3" />
            <FiUsers className="ml-3" />
            <p className="px-3">Participants:{course.participantCount}</p>
          </div>
          <div className="mt-2 px-4 text-lg">{course.title}</div>

          <div className="flex items-center px-4 py-4">
            <p className="">Read more</p>
            <MdArrowForward />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Card;
