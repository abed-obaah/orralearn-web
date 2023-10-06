import {useEffect, useState} from "react";

import {useStateContext} from "../../context/contextProvider.jsx";

import {validate} from '../../util/usefullFunctions.js'

import {useFormik} from 'formik'

import {styles} from "../../util/genral-style.js";
import avatar from "../../assets/avatar.jpg";



const Account = () => {
    const [imagePreview,setImagePreview] = useState(null)
    const {userInfo}  = useStateContext()

    useEffect(()=>{
        setImagePreview(userInfo.profileImage)
    },[userInfo.profileImage])
console.log(userInfo)

    const formik =  useFormik({
        initialValues: {
            profileImage:userInfo.profileImage,
            username:userInfo.userName,
            firstName:userInfo.firstName,
            lastName:userInfo.lastName,
            userBio:userInfo.bio,
            email: userInfo.email
        },
        validate,
        enableReinitialize: true,
        onSubmit:(values)=>{
            console.log(values)
        }
    })
    return (
        <div>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Account Information</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details</p>
            </div>
            <form className="mt-6 border-t border-gray-100" onSubmit={formik.handleSubmit}>

                <div className="divide-y divide-gray-500">
                    <div>
                        <label
                            htmlFor="profileImage"
                            className="relative justify-start flex  text-sm font-medium leading-6 text-gray-900 py-4"
                            onClick={(event) => (event.target.value = null)}
                        >
                            <div className="">
                                <input
                                    id="profileImage"
                                    name="profileImage"
                                    type="file"
                                    autoComplete="profileImage"
                                    // onBlur={formik.handleBlur}
                                    className="hidden"
                                    onChange={(event) => {
                                        // console.log(event.currentTarget.files[0]);
                                        formik.setFieldValue("profileImage", event.target.files[0]);
                                        setImagePreview(URL.createObjectURL(event.target.files[0]));
                                    }}
                                />

                            </div>
                            <div className={'flex flex-col'}>

                            <img className="cursor-pointer  h-20 w-20 rounded-full" src={imagePreview||avatar} alt="" />
                            <p>Click to update profile image </p>
                            </div>
                        </label>
                        {formik.errors.profileImage && formik.touched.profileImage ? (
                            <p className="text-red-500 mb-0 mt-1">
                                {formik.errors.profileImage}
                            </p>
                        ) : null}
                    </div>

                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <label   htmlFor="username" className="text-sm font-medium leading-6 text-gray-900">username</label>
                        <div className={'flex flex-col gap-y-2'}>
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
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <label   htmlFor="firstName" className="text-sm font-medium leading-6 text-gray-900">First Name</label>
                        <div className={'flex flex-col gap-y-2'}>
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
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <label   htmlFor="lastName" className="text-sm font-medium leading-6 text-gray-900"> Last Name</label>
                        <div className={'flex flex-col gap-y-2'}>
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
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <label   htmlFor="email" className="text-sm font-medium leading-6 text-gray-900"> Email</label>
                        <div className={'flex flex-col gap-y-2'}>
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
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <label   htmlFor="userBio" className="text-sm font-medium leading-6 text-gray-900"> User bio</label>
                        <div className={'flex flex-col gap-y-2'}>
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
                    <div className="py-6  ">
                        <button type={'submit'} className={styles.buttonStyle}>Update account</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Account;