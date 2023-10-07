/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useStateContext } from "../context/contextProvider";
import logo from '../assets/shortLogo.svg'
import {getDoc} from 'firebase/firestore'

import Notification from "../components/shared/Notification";
import {  signInWithEmailAndPassword,browserSessionPersistence ,setPersistence   } from 'firebase/auth';
import { auth } from "../middleware/firebase";

import {FcGoogle} from 'react-icons/fc'
import {BiLogoFacebook} from 'react-icons/bi'
import { Link ,useNavigate} from 'react-router-dom'
import { useFormik } from "formik";
import {FiEyeOff,FiEye} from 'react-icons/fi'
import {getUserInfo} from "../middleware/firebase-functions.js";
//import axios from 'axios';


const SignIn = () => {
  const [show, setShow] = useState(false)
  const[showPassword,setShowPassword] = useState(false)
  const [type,setType] = useState('success')
  const [title,setTitle] = useState('Success')
  const [loading, setLoading] = useState(false);
  const {login} = useStateContext();
  
  const navigate =useNavigate();

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  const updateStateFunctions=(title,type)=>{
    setTitle(title)
    setType(type)
  }
  const showPaswordHnadler=()=>{
    setShowPassword(!showPassword)
  }

 const formik = useFormik({
   initialValues: {
     email: "",
     password: "",
   },
   validate,
   enableReinitialize: true,
   onSubmit: (values) => {
     setLoading(true);
     const httReqHandler = async () => {
       try {
         await setPersistence(auth, browserSessionPersistence);
         const data = await signInWithEmailAndPassword(
           auth,
           values.email,
           values.password
         );

         if (data) {
           setLoading(false);
           const remainingMilliseconds = 60 * 60 * 1000;
           const expirationTime = new Date(
             new Date().getTime() + +remainingMilliseconds
           );

           // Retrieve user info from Firestore
           const userFireStoreData = await getUserInfo("Users", data.user.uid);
           console.log(userFireStoreData.data());

           if (userFireStoreData) {
             // Use the fetched information from Firestore in the login function instead of data.user
             login(
               data.user.accessToken,
               expirationTime.toISOString(),
               userFireStoreData.data()
             );
             navigate("/", { replace: true });
           }
         }
       } catch (err) {
         console.log(err);
         updateStateFunctions("An error occured", "error");
         setShow(true);
         setLoading(false);
       }
     };
     httReqHandler();
   },
 });

  return (
    <>
    <Notification show={show} setShow={setShow} title={title} type={type}/>
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bgOne h-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to='/' className="cursor-pointer flex justify-center">
          <img
            className="mx-auto h-10 w-auto"
            src={logo}
            alt="Your Company"
          />
          </Link>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow-2xl sm:rounded-lg sm:px-12">
            <form className="space-y-6" action="#"  onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5E00D0] sm:text-sm sm:leading-6"
                  />
                   {formik.errors.email && formik.touched.email ? (
              <p className="text-red-500 mb-0 mt-1">{formik.errors.email}</p>
            ) : null}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <div className="flex relative items-center">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ?"text":"password"}
                    autoComplete="current-password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5E00D0] sm:text-sm sm:leading-6"
                  />
                  <div>
                    {showPassword ? <FiEyeOff className="absolute right-2 top-2 text-gray-400 cursor-pointer text-lg" onClick={showPaswordHnadler}/> : <FiEye className="absolute right-2 top-2 text-gray-400 cursor-pointer text-lg" onClick={showPaswordHnadler}/> }
                  </div>
                  </div>
                  {formik.errors.password && formik.touched.password ? (
                    <p className="text-red-500 mb-0 mt-1">
                      {formik.errors.password}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-[#5E00D0] focus:ring-[#5E00D0]"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <Link to="/resetPassword" className="font-semibold text-[#5E00D0] hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-lg  bg-[#5E00D0] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#603ddd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E00D0]"
                  disabled={loading}
                >
                { loading? 'laoding': 'Sign in'}
                </button>
              </div>
            </form>

            {/*<div>*/}
            {/*  <div className="relative mt-10">*/}
            {/*    <div className="absolute inset-0 flex items-center" aria-hidden="true">*/}
            {/*      <div className="w-full border-t border-gray-200" />*/}
            {/*    </div>*/}
            {/*    <div className="relative flex justify-center text-sm font-medium leading-6">*/}
            {/*      <span className="bg-white px-6 text-gray-900">Or continue with</span>*/}
            {/*    </div>*/}
            {/*  </div>*/}

            {/*  <div className="mt-6 grid grid-cols-2 gap-4">*/}
            {/*    <a*/}
            {/*      href="#"*/}
            {/*      className="flex w-full items-center justify-center gap-3 rounded-md bg-white border px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "*/}
            {/*    >*/}
            {/*     <FcGoogle className='text-xl'/>*/}
            {/*      <span className="text-sm font-semibold leading-6 text-black">Google</span>*/}
            {/*    </a>*/}

            {/*    <a*/}
            {/*      href="#"*/}
            {/*      className="flex w-full items-center justify-center gap-3 rounded-md bg-[#3b5998] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"*/}
            {/*    >*/}
            {/*     <BiLogoFacebook className='text-xl'/>*/}
            {/*      <span className="text-sm font-semibold leading-6">Facebook</span>*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to={'/signUp'} className="font-semibold leading-6 text-[#5E00D0] hover:text-indigo-500">
              Register
            </Link>
          </p>
        </div>
      </div>
  </>
  )
}

export default SignIn