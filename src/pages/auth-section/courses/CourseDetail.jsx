import React, { useState } from 'react';
import { FaLock, FaPlay } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
const CourseDetail = () => {

    const [activeModule, setActiveModule] = useState(null);
    const [showMoreDetails, setShowMoreDetails] = useState(false);


  const course = {
    title: 'Intro to Python',
    category: 'Programming',
    description: 'Welcome to "Frontend Web Development: Mastering HTML, CSS, and JavaScript," a comprehensive course designed to take you from a beginner to a proficient frontend developer. This course is perfect for anyone whos looking to build visually stunning and functionally robust websites and web applications. Leveraging the power of the holy trinity of web development—HTML, CSS, and JavaScript—this course aims to transform you into a full-stack frontend developer capable of crafting responsive, interactive, and visually compelling web experiences.',
    author: 'John Doe',
    price: '$199',
    enrolled: false,
    coverImage: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1284735/retina_500x200_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png',
    numberOfStudents: 200,
    totalLessons: 20,
    numberOfExercises: 5,
    whoShouldTake: `Complete beginners with no prior experience in web development\n Backend developers looking to gain frontend skills
    Designers interested in understanding how to convert designs into functional websites
    Entrepreneurs who want to build their own websites
    Professionals looking to upskill or switch careers`,
    prerequisites: 'None. This course starts from scratch, making it suitable for those with no prior coding experience.    ',
    toolsAndTech: `
    HTML5: Semantic elements, attributes, forms, and multimedia
CSS3: Styling, layout, animations, and responsive design techniques
JavaScript: DOM manipulation, ES6+ features, and asynchronous programming
Version Control: Git and GitHub basics
Dev Tools: Navigating browser developer tools for debugging
Additional Libraries and Frameworks: Bootstrap, jQuery, and an introduction to React.js

    `,
    courseFeatures: `
    Curated YouTube Tutorials: The course integrates handpicked YouTube tutorials that supplement the learning material, offering you different perspectives and additional tips.
Interactive Learning: Code along with the instructor to cement your learning. Take part in coding challenges and quizzes to reinforce concepts.
Mentor Support: Access to a community of mentors ready to assist you. Orralearn's unique mentorship model ensures that help is always a click away.
AI-powered Programming Help: Have a coding question? Orralearn's AI feature can assist you with programming-related queries, ensuring uninterrupted learning.
Community: Engage in our social learning platform to collaborate with peers, share resources, and showcase your projects.
    `,
    learningOutcomes: `
    By the end of this course, you will:

Understand the core principles of HTML, CSS, and JavaScript
Be able to build a responsive and interactive web application
Know how to debug and optimize your code
Have a solid foundation in frontend web development, preparing you for more advanced topics and frameworks.
    `,
    access: 'Lifetime access to course materials.',
    curriculum: [
      {
        moduleName: 'Getting Started',
        lessons: ['Introduction', 'Installation'],
      },
      {
        moduleName: 'Basic Syntax',
        lessons: ['Variables', 'Data Types'],
      },
    ],
  };

  const toggleModule = (index) => {
    if (activeModule === index) {
      setActiveModule(null);
    } else {
      setActiveModule(index);
    }
  };


  return (
    <div className="flex flex-col md:flex-row p-10">
      <div className="w-full md:w-2/3">
        <div className="text-sm mb-4">{course.category}</div>
        <div className="text-2xl md:text-4xl font-bold mb-4">
          {course.title}
        </div>
        <div className="text-lg text-gray-700 mb-4">{course.description}</div>
        <button
          className="text-blue-500 underline cursor-pointer"
          onClick={() => setShowMoreDetails(!showMoreDetails)}
        >
          {showMoreDetails ? "Show Less" : "View More Details"}
        </button>
        {showMoreDetails && (
          <div className="mt-4">
            <div className="text-2xl font-bold mb-4">
              Who Should Take This Course
            </div>
            <div>
              <strong></strong> {course.whoShouldTake}
            </div>
            <div className="text-2xl font-bold mt-4 mb-4">Pre-requisites:</div>
            <div>
              <strong></strong> {course.prerequisites}
            </div>
            <div className="text-2xl font-bold mt-4 mb-4">
              Tools and Technologies Covered
            </div>
            <div>
              <strong></strong> {course.toolsAndTech}
            </div>
            <div className="text-2xl font-bold mt-4 mb-4">Course Features</div>
            <div> {course.courseFeatures}</div>
            <div className="text-2xl font-bold mt-4 mb-4">
              Learning Outcomes
            </div>
            <div> {course.learningOutcomes}</div>
            <div className="text-2xl font-bold mt-4 mb-4">Access</div>
            <div>
              <strong></strong> {course.access}
            </div>
          </div>
        )}
        <div className="text-sm text-gray-500 mb-8">
          Author: {course.author} | Price: {course.price}
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-lg font-semibold">Current Status</div>
              <div className="mt-2 bg-[#000] text-white px-6 py-2 rounded-[20px]">
                {course.enrolled ? "Enrolled" : "Not Enrolled"}
              </div>
            </div>
            <div className="text-xl font-semibold">- {course.price} -</div>
            <div>
              <div className="text-lg font-semibold">Get Started</div>
              <button className="mt-2 bg-[#550CC8] text-white px-4 md:px-6 py-1 md:py-2 rounded-[20px]">
                Take this Course
              </button>
            </div>
          </div>
        </div>

        <div>
          {course.curriculum.map((module, index) => (
            <div className="bg-white shadow-lg rounded-lg p-6 mb-4" key={index}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleModule(index)}
              >
                <div className="flex items-center">
                  <FaPlay className="text-[#000] mr-4" />
                  <div>
                    <div className="text-lg font-semibold">
                      {module.moduleName}
                    </div>
                    <div className="text-sm text-gray-500">
                      {module.lessons.length} Lessons
                    </div>
                  </div>
                </div>
                {activeModule === index ? <FiChevronUp /> : <FiChevronDown />}
                <FaLock className="text-gray-500" />
              </div>
              {activeModule === index && (
                <div className="mt-4">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div
                      className="flex items-center my-2 px-4 py-2 bg-gray-200 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 ease-in"
                      key={lessonIndex}
                    >
                      <div className="text-gray-700">{lesson}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/3 ml-0 md:ml-12">
        <div className="bg-[#fff] shadow-lg rounded-lg p-6">
          <img
            src={course.coverImage}
            alt="Course Cover"
            className="w-full object-cover mb-6 rounded"
          />
          <button className="bg-gray-300  text-black px-6 py-2 rounded-[20px] mb-4 w-full">
            Not Enrolled
          </button>
          <NavLink to="/coursePlayer">
            <button className="bg-[#550CC8] text-white px-6 py-2 rounded-[20px] mb-4 w-full">
              Enroll Now
            </button>
          </NavLink>
          <div className="text-sm text-gray-900 mb-2">
            This course includes:
          </div>
          <div className="text-sm text-gray-500 mb-2">
            Students: {course.numberOfStudents}
          </div>
          <div className="text-sm text-gray-500 mb-2">
            Lessons: {course.totalLessons}
          </div>
          <div className="text-sm text-gray-500">
            Exercises: {course.numberOfExercises}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
