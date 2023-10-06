import {useState} from "react";
import background from '../../assets/coursebackground.png'
import ReusableSelect from "../../components/ReusableSelect.jsx";
import image1 from '../../assets/Course1.png'
import image2 from '../../assets/Course2.png'
import image3 from '../../assets/Course3.png'

import {AiFillStar} from  'react-icons/ai'
import {BsPerson} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import {Outlet} from "react-router-dom";

const Courses = () => {


    return (
        <><Outlet/></>
    )
};

export default Courses;