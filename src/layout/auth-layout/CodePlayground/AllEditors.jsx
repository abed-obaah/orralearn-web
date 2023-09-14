import React from 'react';
import html1 from '../../../assets/html1.png';
import java from '../../../assets/java.jpeg';
import python from '../../../assets/python.png';
import nodejs from '../../../assets/nodejs.png';
import react from '../../../assets/REACT.png';
import cpp from '../../../assets/CPP.png';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const AllEditors = () => {
  const editors = [
    { id: 1, name: 'HTML/CSS/JS', description: 'Web Frontend Basics', imgSrc: html1 },
    { id: 2, name: 'Java', description: 'Object-Oriented Programming', imgSrc: java },
    { id: 3, name: 'Python', description: 'Data Science & Web Development', imgSrc: python },
    { id: 4, name: 'NodeJS', description: 'JavaScript Server Side', imgSrc: nodejs },
    { id: 5, name: 'ReactJS', description: 'JavaScript Library for UI', imgSrc: react},
    { id: 6, name: 'C++', description: 'Systems Programming', imgSrc: cpp }
  ];

  const projects = [
    { id: 1, name: 'Project 1', imgSrc: html1 },
    { id: 2, name: 'Project 2', imgSrc: cpp },
  ];

  return (
    <div className="w-full">
    <div className="text-xl text-gray-700 mb-6 pl-4">Select Your Playground</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pl-4 pr-4">
     {editors.map(editor => (
          <div key={editor.id} className="flex items-center p-2 border rounded-lg hover:border-purple-900 cursor-pointer transition-all duration-300">
            <img className="w-10 h-10" src={editor.imgSrc} alt={`${editor.name} icon`} />
            <div className="ml-2">
              <p className="text-md font-semibold">{editor.name}</p>
              <p className="text-xs text-gray-600">{editor.description}</p>
            </div>
          </div>
        ))}
      </div>

     
      <div className="text-xl text-gray-700 mt-12 mb-6 pl-4">My Projects</div>
      <div className="pl-4 pr-4">
        {projects.map(project => (
          <div key={project.id} className="flex items-center justify-between p-2 mb-2 border rounded-lg hover:border-purple-900 cursor-pointer transition-all duration-300">
            <div className="flex items-center">
              <img className="w-10 h-10" src={project.imgSrc} alt={`${project.name} icon`} />
              <p className="text-lg font-semibold ml-2">{project.name}</p>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 border rounded-full hover:bg-purple-100">
                <FaEdit className="text-purple-900 hover:text-purple-700" />
              </button>
              <button className="p-2 border rounded-full hover:bg-red-100">
                <FaTrashAlt className="text-red-500 hover:text-red-700" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEditors;