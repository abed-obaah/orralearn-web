import React, { useEffect } from "react";
import { FaHtml5, FaChevronDown, FaCss3, FaJs } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import SplitPane from "react-split-pane";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo white.svg";
import { AnimatePresence, motion } from "framer-motion";
import { MdCheck, MdEdit } from "react-icons/md";
import profile from "../assets/ato.png";

const FrontEndEditor = () => {
  const [html, setHtml] = React.useState("");
  const [css, setCss] = React.useState("");
  const [js, setJs] = React.useState("");
  const [output, setOutput] = React.useState("");
  const [title, setTitle] = React.useState("Untitled");
  const [isTitle, setIsTitle] = React.useState("");

  useEffect(() => {
    updateOutput();
  }, [html, css, js]);

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
  return (
    <>
      <div className="w-screen h-screen bg-black flex flex-col items-start justify-start overflow-hidden">
        {/* alert section */}

        {/* header section */}
        <header className="w-full flex items-center justify-between px-12 py-4">
          <div className="flex items-center justify-center gap-6">
            <NavLink
              to="/codingPlayGround"
              className="flex items-center justify-center gap-6"
            >
              <img
                className="w-32 h-auto object-contain"
                src={logo}
                alt="orralearn logo"
              />
            </NavLink>

            <div className="flex flex-col items-start justify-start">
              {/**title */}
              <div className="flex item-center justify-center gap-3">
                <AnimatePresence>
                  {isTitle ? (
                    <>
                      {" "}
                      <motion.input
                        key={"TitleInput"}
                        type="text"
                        className="px-3 py-2 rounded-md bg-transparent text-gray-400 text-base outline-none border-none"
                        placeholder="Your Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <motion.p
                        key={"titleLabel"}
                        className="px-3 py-2 text-white text-lg"
                      >
                        {title}
                      </motion.p>
                    </>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {isTitle ? (
                    <>
                      <motion.div
                        key={"MdCheck"}
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer"
                        onClick={() => setIsTitle(false)}
                      >
                        <MdCheck className="text-xl text-emerald-600" />
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        key={"MdEdit"}
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer"
                        onClick={() => setIsTitle(true)}
                      >
                        <MdEdit className="text-xl text-gray-400" />
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
              {/**follow */}
              <div className="flex items-center justify-center px-3 -mt-2 gap-2">
                <p className="text-gray-400 text-sm">ATO</p>
                <motion.p
                  whileTap={{ scale: 0.98 }}
                  className="text-[10px] bg-emerald-500 rounded-sm px-2 py-[1px] text-gray-600 font-semibold cursor-pointer"
                >
                  + Follow
                </motion.p>
              </div>
            </div>
          </div>
          {/** user section */}

          <div className="flex items-center justify-center gap-4">
            <motion.button className="px-6 py-2 text-gray-100 cursor-pointer text-base bg-[#5E00D0] font-semibold rounded-md">
              Save
            </motion.button>
            <img
              src={profile}
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </header>

        {/* coding section */}

        <div>
          {/* horrizontal */}
          <SplitPane
            split="horizontal"
            minSize={100}
            maxSize={-100}
            defaultSize={"50%"}
          >
            {/* top coding section */}
            <SplitPane split="vertical" minSize={500}>
              {/**html code */}
              <div className="w-full h-full flex flex-col items-start justify-start">
                <div className="w-full flex items-center justify-between">
                  <div className="bg-gray-600 px-4 y-2 border-t-4 flex item-center justify-center gap-3 border-t-gray-500">
                    <FaHtml5 className="text-xl text-red-500" />
                    <p className="text-gray-300 font-semibold ">HTML</p>
                  </div>

                  {/**icons */}

                  <div className="cursor-pointer flex items-center justify-center gap-4 px-4">
                    <FcSettings className="text-xl" />
                    <FaChevronDown className="text-xl text-gray-400" />
                  </div>
                </div>
                <div className="w-full px-2">
                  <CodeMirror
                    value={html}
                    height="600px"
                    extensions={[javascript({ jsx: true })]}
                    theme={"dark"}
                    onChange={(value, viewUpdate) => {
                      setHtml(value);
                    }}
                  />
                </div>
              </div>

              <SplitPane split="vertical" minSize={500}>
                {/**css code */}
                <div className="w-full h-full flex flex-col items-start justify-start">
                  <div className="w-full flex items-center justify-between">
                    <div className="bg-gray-600 px-4 y-2 border-t-4 flex item-center justify-center gap-3 border-t-gray-500">
                      <FaCss3 className="text-xl text-sky-500" />
                      <p className="text-gray-300 font-semibold ">CSS</p>
                    </div>

                    {/**icons */}

                    <div className="cursor-pointer flex items-center justify-center gap-4 px-4">
                      <FcSettings className="text-xl" />
                      <FaChevronDown className="text-xl text-gray-400" />
                    </div>
                  </div>
                  <div className="w-full px-2">
                    <CodeMirror
                      value={css}
                      height="600px"
                      extensions={[javascript({ jsx: true })]}
                      theme={"dark"}
                      onChange={(value, viewUpdate) => {
                        setCss(value);
                      }}
                    />
                  </div>
                </div>

                {/**js code */}

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
                      height="600px"
                      extensions={[javascript({ jsx: true })]}
                      theme={"dark"}
                      onChange={(value, viewUpdate) => {
                        setJs(value);
                      }}
                    />
                  </div>
                </div>
              </SplitPane>
            </SplitPane>

            {/* bottom coding section */}

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
          </SplitPane>
        </div>
      </div>
    </>
  );
};

export default FrontEndEditor;
