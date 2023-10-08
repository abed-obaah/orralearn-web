import React, { useEffect, useState } from "react";
import "./Test.css";
import { courseData } from "./CourseData";
import CodeMirror from "@uiw/react-codemirror";
import { FcSettings } from "react-icons/fc";
import { FaChevronDown, FaHtml5, FaJs } from "react-icons/fa";
import { javascript } from "@codemirror/lang-javascript";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";
import AuthResNav from "../../../../layout/navbar/auth-navs/AuthResNav";

const Test = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [compileResult, setCompileResult] = useState("");
  const [animateNextButton, setAnimateNextButton] = useState(false);
  const handleCompile = (code) => {
    // Simulate code compilation
    setCompileResult("Output: " + code);
  };

  const CodeEditor = ({ initialHTML, initialCSS, initialJavaScript }) => {
    const [html, setHtml] = React.useState(courseData[currentModule].initialCode);
    const [output, setOutput] = React.useState("");
    const [css, setCss] = React.useState(courseData[currentModule].initialCode);
    const [js, setJs] = React.useState(courseData[currentModule].initialCode);
    const [loading, setLoading] = useState(false);

    const updateOutput = () => {
      const combinedOutput = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
    
    `;
      setOutput(combinedOutput);
    };

    const compileCode = async (js) => {
      setLoading(true);
      try {
        const { data } = await axios.post(
          "https://orralearn-e1703a8e9d7d.herokuapp.com/flutterwave/api/v1/compile",
          {
            code: js,
          }
        );
        setOutput(data.output || data.error);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setOutput("An error occurred.");
        setLoading(false);
      }
    };

    return (
      <>
        <div className="bg-gray-200 p-4 rounded-md">
          {/** HTML */}
          {courseData[currentModule].section === "HTML" ? (
            <div className="w-full h-full flex flex-col items-start justify-start">
              <div className="w-full flex items-center justify-between">
                <div className="bg-gray-600 px-4 y-2 border-t-4 flex item-center justify-center gap-3 border-t-gray-500">
                  <FaHtml5 className="text-xl text-red-500" />
                  <p className="text-gray-300 font-semibold ">HTML</p>
                </div>

                {/**icons */}
              </div>
              <div className="w-full px-2">
                <CodeMirror
                  value={html}
                  height="400px"
                  extensions={[javascript({ jsx: true })]}
                  theme={"dark"}
                  onChange={(value, viewUpdate) => {
                    setHtml(value);
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-start justify-start">
              <div className="w-full flex items-center justify-between">
                <div className="bg-gray-600 px-4 y-2 border-t-4 flex item-center justify-center gap-3 border-t-gray-500">
                  <FaJs className="text-xl text-yellow-500" />
                  <p className="text-gray-300 font-semibold ">JS</p>
                </div>

                {/**icons */}

                <div className="cursor-pointer flex items-center justify-center gap-4 px-4">
                  <FcSettings className="text-xl" />
                  <FaChevronDown className="text-xl text-gray-400" />
                </div>
              </div>
              <div className="w-full px-2">
                <CodeMirror
                  value={js}
                  height="400px"
                  extensions={[javascript({ jsx: true })]}
                  theme={"dark"}
                  onChange={(value, viewUpdate) => {
                    setJs(value);
                  }}
                />
              </div>
            </div>
          )}
          {courseData[currentModule].section === "HTML" ? (
            <button
              className="bg-blue-500 text-white p-2 rounded-md mt-2"
              onClick={updateOutput}
            >
              Compile
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white p-2 rounded-md mt-2"
              onClick={() => compileCode(js)}
            >
              {loading ? (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              ) : (
                " Run JavaScript"
              )}
            </button>
          )}
        </div>
        {courseData[currentModule].section === "HTML" ? (
          <div
            className="bg-white"
            style={{ overflow: "hidden", height: "100%" }}
          >
            <iframe
              title="Result"
              srcDoc={output}
              style={{ border: "none", width: "100%", height: "100%" }}
            />
          </div>
        ) : (
          <div
            className="bg-black text-white"
            style={{
              overflow: "auto",
              height: "100%",
              fontFamily: "'Courier New', monospace",
              padding: "1rem",
            }}
          >
            <div>
              <span className="text-green-400">$ </span> {/* Prompt symbol */}
            </div>
            <div>
              {output} {/* Output the result here */}
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <AuthResNav />
      <div className="bg-white min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
          {/* Breadcrumb */}
          <div className="text-sm font-light text-gray-600 mb-2">
            Home / Courses / {courseData[currentModule].section} /{" "}
            {courseData[currentModule].title}
          </div>

          <div className="text-lg font-semibold text-purple-700 mb-4">
            <span>{courseData[currentModule].section} </span>
            <span>{courseData[currentModule].title}</span>
          </div>
          <div className="progress-bar mb-4">
            <div
              className="bg-purple-700"
              style={{
                height: "10px",
                width: `${((currentModule + 1) / courseData.length) * 100}%`,
              }}
            ></div>
          </div>
          <div
            className="mb-4"
            dangerouslySetInnerHTML={{
              __html: courseData[currentModule].content,
            }}
          ></div>

          {courseData[currentModule].type === "exercise" && (
            <CodeEditor
              initialCode={courseData[currentModule].exerciseInitialCode}
              onCompile={handleCompile}
            />
          )}

          {compileResult && (
            <div className="text-green-700 mt-4">{compileResult}</div>
          )}

          <div className="flex justify-between mt-8">
            <button
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
              disabled={currentModule <= 0}
              onClick={() => setCurrentModule(currentModule - 1)}
            >
              Previous
            </button>
            <button
              className={`bg-purple-700 text-white px-4 py-2 rounded-md transform ${
                animateNextButton ? "animate-bounce" : ""
              }`}
              disabled={currentModule >= courseData.length - 1}
              onClick={() => {
                setAnimateNextButton(true);
                setTimeout(() => setAnimateNextButton(false), 300); // Reset after 300ms
                setCurrentModule(currentModule + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
