import {useState} from "react";
import background from '../../assets/coursebackground.png'
import ReusableSelect from "../../components/ReusableSelect.jsx";
import image1 from '../../assets/Course1.png'
import image2 from '../../assets/Course2.png'
import image3 from '../../assets/Course3.png'

import {AiFillStar} from  'react-icons/ai'
import {BsPerson} from "react-icons/bs";
import { CourseCard } from "./courses/Test/CourseCard";
import uc from "../../assets/uc.png";
import { Link } from "react-router-dom";
import { styles } from "../../util/genral-style.js";


const Courses = () => {
        const reusabletextStyle =
          "text-[16px] text-black  text-opacity-70 font-openSans";

const courses = [
  {
    id: 1,
    title: "HTML Basics and Fundamentals",
    lastLesson: "Lesson 4: HTML Forms",
    progress: 40,
    image: image1,
    type: "Interactive Lessons",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Learn CSS",
    lastLesson: "Lesson 2: CSS Selectors",
    progress: 25,
    image: image2,
    type: "Video Lessons",
    isFeatured: false,
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    lastLesson: "Lesson 1: JS Syntax",
    progress: 10,
    image: image3,
    type: "Interactive Lessons",
    isFeatured: true,
  },
  {
    id: 4,
    title: "React for Beginners",
    lastLesson: "Lesson 3: JSX",
    progress: 60,
    image: image3,
    type: "Video Lessons",
    isFeatured: false,
  },
  {
    id: 5,
    title: "Node.js Fundamentals",
    lastLesson: "Lesson 5: Modules",
    progress: 80,
    image: image3,
    type: "Interactive Lessons",
    isFeatured: false,
  },
  {
    id: 6,
    title: "Database Design",
    lastLesson: "Lesson 2: ER Diagram",
    progress: 20,
    image: image1,
    type: "Video Lessons",
    isFeatured: false,
  },
];


    const [time,setTime] = useState('')
    const [cat,setCat] = useState('')
    const [rating,setRating] = useState('')

    const imagesArray=[
        image1,
        image2,
        image3,
        image1,
    ]
    return (
      <div className={"flex flex-col gap-y-10 font-openSans"}>
        <h2 className="text-2xl font-bold text-main-purple">
          Featured Courses
        </h2>

        <div
          className={"flex flex-col md:flex-row bg-white md:px-6 md:py-3 gap-6"}
        >
          {/*<div></div>*/}

          <img
            src={uc}
            alt={""}
            className={" md:w-72 md:h-40 h-64 object-fill"}
          />
          <div className={"flex flex-col gap-y-4 px-6 pb-3 lg:px-0 lg:pb-0"}>
            <h6 className={"font-bold text-[20px]"}>
              Learn Frontend Development Web Development
            </h6>
            <p className={`${reusabletextStyle}`}>
              Become a Full Stack Mobile App developer with just ONE course.
              HTML, CSS, Javascript, React, Node and Web3
            </p>
            <Link to="/courseDetail" className={`${styles.buttonStyleTwo} w-100 sm:w-40`}>
              Start Learning
            </Link>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-main-purple ">
          All Courses{" "}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-5 justify-items-center">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    );
};

export default Courses;