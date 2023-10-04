/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useStateContext } from "../context/contextProvider";
import logo from "../assets/shortLogo.svg";
import avatar from '../assets/avatar.jpg'

import Notification from "../components/shared/Notification";
import { auth} from "../middleware/firebase";
import { createUserWithEmailAndPassword ,deleteUser,updateProfile} from "firebase/auth";
import {filesUpload,createUserInfo,deleteFile,findUserName} from "../middleware/firebase-functions.js";

import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebook } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {FiEyeOff,FiEye} from 'react-icons/fi'

const validate = (values) => {
  const errors = {};
  // if (!values.profileImage) {
  //   errors.profileImage = "Required";
  // }
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.userBio) {
    errors.userBio = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = " required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password are not identical";
  }
  return errors;
};

const SignUp = () => {
  const [show, setShow] = useState(false);
  const[showPassword,setShowPassword] = useState(false)
  const [type, setType] = useState("success");
  const [title, setTitle] = useState("Success");
  const [loading, setLoading] = useState(false);
  const [imagePreview,setImagePreview] = useState(null)
  const { login } = useStateContext();

  const navigate = useNavigate();


  const updateStateFunctions = (title, type) => {
    setTitle(title);
    setType(type);
  };

  const showPaswordHnadler=()=>{
    setShowPassword(!showPassword)
  }
  const formik = useFormik({
    initialValues: {
      profileImage:"",
      username:"",
      firstName:"",
      lastName:"",
      userBio:"",
      email: "",
      password: "",
      confirmPassword:""
    },
    validate,
    enableReinitialize: true,
    onSubmit: (values) => {
      setLoading(true);
      let imageUrl
      let useruuid
      const httReqHandler = async () => {
        try {
          const foundUser = await findUserName(values.username)
          if(foundUser){
            setShow(true)
            updateStateFunctions('Username already exist', 'error');
          setLoading(false)
            return
          }

          // eslint-disable-next-line no-unreachable
          const data = await createUserWithEmailAndPassword(auth, values.email, values.password);

          let userDoc;
          let imageUrl;

          if (data && values.profileImage !== '') {
            useruuid = data.user.uid;
            imageUrl = await filesUpload('userProfileImage', values.profileImage);
            const photoImage = await updateProfile(auth.currentUser, { photoURL: imageUrl });
            console.log(photoImage);
          }

          if (imageUrl) {
            userDoc = await createUserInfo('userInfo', data.user.uid, {
              profileImage: imageUrl,
              username: values.username,
              firstName: values.firstName,
              lastName: values.lastName,
              userBio: values.userBio,
            });
            setLoading(false);
            //console.log(userDoc)
          }

          if (!userDoc) {
            setLoading(false);
            updateStateFunctions('Success', 'success');
            navigate('/signIn', { replace: true });
          }
        } catch (err) {
          console.log(err);
          updateStateFunctions('An error occurred', 'error');
          if (useruuid) {
            await deleteUser(useruuid);
            await deleteFile(imageUrl);
          }
          setShow(true);
          setLoading(false);
        }

      };
      httReqHandler();
    },
  });

  return (
    <>
      <Notification show={show} setShow={setShow} title={title} type={type} />
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bgOne">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link to="/" className=" cursor-pointer flex justify-center">
            <img
              className="mx-auto h-10 w-auto"
              src={logo}
              alt="Your Company"
            />
          </Link>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow-2xl sm:rounded-lg sm:px-12">
            <form
              className="space-y-2"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <label
                  htmlFor="profileImage"
                  className="relative flex  text-sm font-medium leading-6 text-gray-900"
                  onClick={(event) => (event.target.value = null)}
                > 
                <div className="mt-2">
                  <input
                    id="profileImage"
                    name="profileImage"
                    type="file"
                    autoComplete="profileImage"
                    // onBlur={formik.handleBlur}
                    className="hidden w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5E00D0] sm:text-sm sm:leading-6"
                    onChange={(event) => {
                      // console.log(event.currentTarget.files[0]);
                      formik.setFieldValue("profileImage", event.target.files[0]);
                      setImagePreview(URL.createObjectURL(event.target.files[0]));
                    }}
                 />
                 
                </div>
                <img className="cursor-pointer mx-auto h-48 w-48 rounded-full" src={imagePreview||avatar} alt="" />
                </label>
                {formik.errors.profileImage && formik.touched.profileImage ? (
                    <p className="text-red-500 mb-0 mt-1">
                      {formik.errors.profileImage}
                    </p>
                  ) : null}
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                > 
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5E00D0] sm:text-sm sm:leading-6"
                  />
                  {formik.errors.username && formik.touched.username ? (
                    <p className="text-red-500 mb-0 mt-1">
                      {formik.errors.username}
                    </p>
                  ) : null}
                </div>
              </div>
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5E00D0] sm:text-sm sm:leading-6"
                  />
                  {formik.errors.firstName && formik.touched.firstName ? (
                    <p className="text-red-500 mb-0 mt-1">
                      {formik.errors.firstName}
                    </p>
                  ) : null}
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5E00D0] sm:text-sm sm:leading-6"
                  />
                  {formik.errors.lastName && formik.touched.lastName ? (
                    <p className="text-red-500 mb-0 mt-1">
                      {formik.errors.lastName}
                    </p>
                  ) : null}
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5E00D0] sm:text-sm sm:leading-6"
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <p className="text-red-500 mb-0 mt-1">
                      {formik.errors.email}
                    </p>
                  ) : null}
                </div>
              </div>
              <div>
                <label
                  htmlFor="userBio"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  User bio
                </label>
                <div className="mt-2">
                  <textarea
                    id="userBio"
                    name="userBio"
                    type="userBio"
                    autoComplete="userBio"
                    value={formik.values.userBio}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5E00D0] sm:text-sm sm:leading-6"
                  />
                  {formik.errors.userBio && formik.touched.userBio ? (
                    <p className="text-red-500 mb-0 mt-1">
                      {formik.errors.userBio}
                    </p>
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
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm password
                </label>
                <div className="mt-2">
                  <div className="flex relative items-center">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ?"text":"password"}
                    autoComplete="current-password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5E00D0] sm:text-sm sm:leading-6"
                  />
                  <div>
                    {showPassword ? <FiEyeOff className="absolute right-2 top-2 text-gray-400 cursor-pointer text-lg" onClick={showPaswordHnadler}/> : <FiEye className="absolute right-2 top-2 text-gray-400 cursor-pointer text-lg" onClick={showPaswordHnadler}/> }
                  </div>
                  </div>
                  {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                    <p className="text-red-500 mb-0 mt-1">
                      {formik.errors.confirmPassword}
                    </p>
                  ) : null}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-lg  bg-[#5E00D0] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#603ddd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E00D0]"
                  disabled={loading}
                >
                  {loading ? "laoding" : "Sign up"}
                </button>
              </div>
            </form>

            {/*<div>*/}
            {/*  <div className="relative mt-10">*/}
            {/*    <div*/}
            {/*      className="absolute inset-0 flex items-center"*/}
            {/*      aria-hidden="true"*/}
            {/*    >*/}
            {/*      <div className="w-full border-t border-gray-200" />*/}
            {/*    </div>*/}
            {/*    <div className="relative flex justify-center text-sm font-medium leading-6">*/}
            {/*      <span className="bg-white px-6 text-gray-900">*/}
            {/*        Or continue with*/}
            {/*      </span>*/}
            {/*    </div>*/}
            {/*  </div>*/}

            {/*  <div className="mt-6 grid grid-cols-2 gap-4">*/}
            {/*    <a*/}
            {/*      href="#"*/}
            {/*      className="flex w-full items-center justify-center gap-3 rounded-md bg-white border px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "*/}
            {/*    >*/}
            {/*      <FcGoogle className="text-xl" />*/}
            {/*      <span className="text-sm font-semibold leading-6 text-black">*/}
            {/*        Google*/}
            {/*      </span>*/}
            {/*    </a>*/}

            {/*    <a*/}
            {/*      href="#"*/}
            {/*      className="flex w-full items-center justify-center gap-3 rounded-md bg-[#3b5998] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"*/}
            {/*    >*/}
            {/*      <BiLogoFacebook className="text-xl" />*/}
            {/*      <span className="text-sm font-semibold leading-6">*/}
            {/*        Facebook*/}
            {/*      </span>*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            already a member ?{" "}
            <Link
              to={"/signIn"}
              className="font-semibold leading-6 text-[#5E00D0] hover:text-indigo-500"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
