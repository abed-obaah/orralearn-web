import React from 'react'
import {AiOutlinePlus, AiOutlineSave} from 'react-icons/ai'
import {CiBookmark} from 'react-icons/ci'
import image from '../../assets/learnImg.png'
import image2 from '../../assets/js2.png'

import profile from '../../assets/ato.png'
import profile2 from '../../assets/Avatar.png'
import { NavLink } from 'react-router-dom';



const Projects = () => {
    const userProjects = [
        {
          thumbnail: image,
          name: "Navbar in HTML",
          userProfilePic: profile,
          userName: "Tony-Bradley",
        },
       
      ];
      
      const communityProjects = [
        {
            thumbnail: image,
            name: "Random Quote Generator",
            userProfilePic: profile2,
            userName: "Tony-Bradley",
          },
          {
            thumbnail: image2,
            name: "JavaScript Project",
            userProfilePic: profile,
            userName: "Tony-Bradley",
          },
        // Add more community projects...
      ];
  
      const cardStyle = {
        width: '250px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        backgroundColor: '#fff',
      };

      const actionContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '5px',
        };

    
      const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      };
    
      const userInfoStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      };
      return (
        <div className="p-5">
            <NavLink to={'/editor'}>
              <button className="flex items-center gap-2 bg-[#5E00D0] text-white px-4 py-2 rounded-md">
              <AiOutlinePlus />
              <span>New Project</span>
            </button>
            </NavLink>
            <div className="flex flex-wrap justify-between">
        <h1 className="text-[#000] mt-5 text-lg font-bold">My Projects</h1>
        <h1 className="text-[#5E00D0] mt-5 text-lg font-bold cursor-pointer hover:underline">See All</h1>
      </div>

          <div className="flex flex-wrap ">
            {userProjects.map((project, index) => (
          <div key={index} className="mr-2 mb-2 mt-2 p-4 md:w-64 w-full border border-gray-300 rounded-md shadow-sm bg-white">
          <img className="w-full object-cover" src={project.thumbnail} alt={`${project.name} thumbnail`} />
                <h3 className="text-black font-bold text-lg mt-3">{project.name}</h3>
                <div className="flex justify-between items-center mt-5">
                  <div className="flex items-center">
                    <img className="w-12 h-12 rounded-full" src={project.userProfilePic} alt={`${project.userName}'s Profile`} />
                    <span className="ml-1 text-base font-bold">{project.userName}</span>
                  </div>
                  <CiBookmark className="text-xl hover:scale-105 transition-transform duration-300 ease-in-out" />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-between">
        <h1 className="text-[#000] mt-5 text-lg font-bold">Community Projects</h1>
        <h1 className="text-[#5E00D0] mt-5 text-lg cursor-pointer font-bold hover:underline">See All</h1>
      </div>

          <div className="flex flex-wrap">
            {communityProjects.map((project, index) => (
          <div key={index} className="mr-2 mb-2 mt-2 p-4 md:w-64 w-full border border-gray-300 rounded-md shadow-sm bg-white">
          <img className="w-full object-cover" src={project.thumbnail} alt={`${project.name} thumbnail`} />
                <h3 className="text-black font-bold text-lg mt-3">{project.name}</h3>
                <div className="flex justify-between items-center mt-5">
                  <div className="flex items-center">
                    <img className="w-12 h-12 rounded-full" src={project.userProfilePic} alt={`${project.userName}'s Profile`} />
                    <span className="ml-1 text-base font-bold">{project.userName}</span>
                  </div>
                  <CiBookmark className="text-xl hover:scale-105 transition-transform duration-300 ease-in-out" />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default Projects;