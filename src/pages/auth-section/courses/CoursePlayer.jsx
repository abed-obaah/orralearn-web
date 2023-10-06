import React, { useState } from "react";
import ReactPlayer from "react-player";
import logo from "../../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { MdCloseFullscreen } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import { LuCircle } from "react-icons/lu";
import { AiOutlineVideoCamera, AiOutlineFileText } from "react-icons/ai";
import "./CoursePlayer.css";


  const course = {
    title: "Intro to Python",
    category: "Programming",
    description:
      'Welcome to "Frontend Web Development: Mastering HTML, CSS, and JavaScript," a comprehensive course designed to take you from a beginner to a proficient frontend developer. This course is perfect for anyone whos looking to build visually stunning and functionally robust websites and web applications. Leveraging the power of the holy trinity of web development—HTML, CSS, and JavaScript—this course aims to transform you into a full-stack frontend developer capable of crafting responsive, interactive, and visually compelling web experiences.',
    author: "John Doe",
    price: "$199",
    enrolled: false,
    coverImage:
      "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1284735/retina_500x200_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png",
    numberOfStudents: 200,
    totalLessons: 20,
    numberOfExercises: 5,
    whoShouldTake: `Complete beginners with no prior experience in web development\n Backend developers looking to gain frontend skills
    Designers interested in understanding how to convert designs into functional websites
    Entrepreneurs who want to build their own websites
    Professionals looking to upskill or switch careers`,
    prerequisites:
      "None. This course starts from scratch, making it suitable for those with no prior coding experience.    ",
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
    access: "Lifetime access to course materials.",
    curriculum: [
      {
        moduleName: "Getting Started",
        lessons: ["Introduction", "Installation"],
      },
      {
        moduleName: "Basic Syntax",
        lessons: ["Variables", "Data Types"],
      },
    ],
  };

const dummyCourse = {
  title: "HTML & CSS Fundamentals",
  modules: [
    {
      id: "module1",
      title: "Getting Started with web development",
      lessons: [
        {
          id: "lesson1",
          title: "Introduction",
          contentType: "video",
          content: "https://vimeo.com/721295988?share=copy",
          time: "1 min",
          completed: true,
        },
        {
          id: "lesson2",
          title: "Setup",
          contentType: "text",
          content: "This is how you set up your environment...",
          time: "2 mins",
          completed: false,
        },
        // ...
      ],
    },
    {
      id: "module2",
      title: "Getting Started",
      lessons: [
        {
          id: "lesson1",
          title: "Introduction",
          contentType: "video",
          content: "https://vimeo.com/721295988?share=copy",
          time: "4 mins",
          completed: false,
        },
        {
          id: "lesson2",
          title: "Setup",
          contentType: "text",
          content: "This is how you set up your environment...",
          time: "6 mins",
          completed: false,
        },
        // ...
      ],
    },
    
    // ...
  ],
};

const CoursePlayer = () => {
  const [currentLesson, setCurrentLesson] = useState(null);
  const [currentModule, setCurrentModule] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview"); // For tab control

  // Function to get the current module title
  const getCurrentModuleTitle = () => {
    const module = dummyCourse.modules.find((m) => m.id === currentModule);
    return module ? module.title : "";
  };

  return (
    <div className="flex bg-white">
      {/* Sidebar with Logo */}
      <div
        className={`w-1/3 sm:w-1/4 md:w-1/5 lg:w-2/6 xl:w-1/7 ${
          sidebarOpen ? "block" : "hidden"
        } bg-white h-screen overflow-y-auto`}
      >
        <div className="p-4 border-b flex items-center justify-between">
          <NavLink
            to="/codingPlayGround"
            className="flex items-center justify-center gap-6"
          >
            <img src={logo} alt="Orralearn Logo" className="h-8 w-auto" />
          </NavLink>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <MdCloseFullscreen className="h-8 w-auto text-gray-500 hover:text-gray-700" />
          </button>
        </div>
        {dummyCourse.modules.map((module) => (
          <div key={module.id} className="p-4 border-b">
            <div
              className="flex justify-between items-center cursor-pointer text-[16px] font-semibold text-gray-800 hover:text-gray-600"
              onClick={() =>
                setCurrentModule(currentModule === module.id ? null : module.id)
              }
            >
              <span className="text-left">{module.title}</span>
              <span>
                {currentModule === module.id ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </span>
            </div>
            {currentModule === module.id && (
              <div className="mt-4 space-y-2">
                {module.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    className="px-4 py-2  text-[14px] text-gray-700 hover:bg-gray-200 w-full text-left"
                    onClick={() => setCurrentLesson(lesson)}
                  >
                    <div className="flex">
                      {lesson.completed ? (
                        <MdCheckCircle className="text-[#550CC8] text-[20px] mr-2" />
                      ) : (
                        <LuCircle className="text-[#550CC8] text-[20px] mr-2" />
                      )}
                      <div>
                        <span>{lesson.title}</span>
                        <div className="flex">
                          {lesson.contentType === "video" ? (
                            <AiOutlineVideoCamera className="text-[#550CC8] text-[14px] mt-1" />
                          ) : (
                            <AiOutlineFileText className="text-[#550CC8] text-[14px] mt-1" />
                          )}

                          <div>{lesson.time}</div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Toggle Sidebar Button */}
      <button
        className={`p-4 ${sidebarOpen ? "hidden" : "block"} bg-gray-100`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <MdCloseFullscreen className="h-8 w-auto text-gray-500 hover:text-gray-700" />
      </button>
      {/* Content Player */}
      <div className="flex flex-col w-full bg-white">
        <div className="flex flex-col items-start p-8">
          {/* Display Current Module Title */}
          <h2 className="text-black text-[20px] font-bold mb-4">
            {dummyCourse.title}
          </h2>

          {/* Content */}
          {currentLesson ? (
            currentLesson.contentType === "video" ? (
              <>
                <div
                  className="bg-gray-100"
                  style={{ width: "100%", height: "60vh" }}
                >
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    url={currentLesson.content}
                    controls
                  />
                </div>
                <h3 className="text-black text-[20px] font-bold mt-4">
                  {currentLesson.title}
                </h3>
              </>
            ) : (
              <div className="text-white bg-gray-800 p-8 rounded-md">
                {currentLesson.content}
              </div>
            )
          ) : (
            <span>Please select a lesson to view.</span>
          )}
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 p-8">
          <button
            className={`tab ${activeTab === "overview" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`tab ${activeTab === "exercises" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("exercises")}
          >
            Exercises
          </button>
          <button
            className={`tab ${activeTab === "comments" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("comments")}
          >
            Comments
          </button>
          <button
            className={`tab ${activeTab === "ai-tool" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("ai-tool")}
          >
            AI Tool
          </button>
          <button
            className={`tab ${activeTab === "reviews" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>
        <div className="p-8">
          {/* Content based on active tab */}
          {activeTab === "overview" && (
            <div>
              {" "}
              <div className="text-sm mb-4">{course.category}</div>
              <div className="text-2xl md:text-4xl font-bold mb-4">
                {course.title}
              </div>
              <div className="text-lg text-gray-700 mb-4">
                {course.description}
              </div>
              <button
                className="text-blue-500 underline cursor-pointer"
                onClick={() => setShowMoreDetails(!showMoreDetails)}
              >
              </button>
                <div className="mt-4">
                  <div className="text-2xl font-bold mb-4">
                    Who Should Take This Course
                  </div>
                  <div>
                    <strong></strong> {course.whoShouldTake}
                  </div>
                  <div className="text-2xl font-bold mt-4 mb-4">
                    Pre-requisites:
                  </div>
                  <div>
                    <strong></strong> {course.prerequisites}
                  </div>
                  <div className="text-2xl font-bold mt-4 mb-4">
                    Tools and Technologies Covered
                  </div>
                  <div>
                    <strong></strong> {course.toolsAndTech}
                  </div>
                  <div className="text-2xl font-bold mt-4 mb-4">
                    Course Features
                  </div>
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
            </div>
          )}
          {activeTab === "exercises" && <div>Exercises Content Here</div>}
          {activeTab === "comments" && <div>User Comments Here</div>}
          {activeTab === "comments" && <div>AI Tool Here</div>}
          {activeTab === "comments" && <div>Reviews Here</div>}
        </div>
      </div>
    </div>
  );
};

export default CoursePlayer;
