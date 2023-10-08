import { Link } from "react-router-dom";
import { styles } from "../../../../util/genral-style";
import { useStateContext } from "../../../../context/contextProvider";

export const CourseCard = ({ course }) => {

  const {subscription} = useStateContext()

  return (
    <div className="w-full sm:w-[400px] mx-auto bg-white rounded overflow-hidden shadow-lg">
      <img className="w-full" src={course.image} alt={course.title} />
      <div className="py-4 font-openSans">
        <div className="mx-6 w-56 font-bold text-sm mb-2 text-[#342F98] bg-[#EBEBFF] p-2">
          {course.type}
        </div>
        <div className="px-6 font-bold text-xl mb-2">{course.title}</div>
        <div className="px-6 py-4 flex justify-between items-center text-gray-700 text-base border-t-2 border-b-2 border-[#E9EAF0]">
          {/* Add more course-related info here if needed */}
        </div>
      </div>
      <div className="px-6 flex flex-col sm:flex-row gap-4 pb-4 ">

        {
          !subscription.subscribed ?(
                                         <Link to={'/pricing'} className={`${styles.buttonStyleTwo} w-100 sm:w-[350px]`}>
          Start Learning
        </Link>
          ):(
            <Link to={"/thankyou"} className={`${styles.buttonStyleTwo} w-100 sm:w-[350px]`}>
          Start Learning
        </Link>
          )
        }


        {/*<Link to={"/test"} className={`${styles.buttonStyleTwo} w-100 sm:w-[350px]`}>
          Start Learning
      </Link>*/}
      </div>
    </div>
  );
};
