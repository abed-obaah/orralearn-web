import {useEffect, useState} from "react";

import {useStateContext} from "../../context/contextProvider.jsx";

import {changePasswordValidation, validate} from '../../util/usefullFunctions.js'

import {useFormik} from 'formik'

import avatar from "../../assets/avatar.jpg";
import {changePassword, fileUpdate, findDocumentAndUpdate, findUserName} from "../../middleware/firebase-functions.js";
import Notification from "../shared/Notification.jsx";
import {FiEye, FiEyeOff} from "react-icons/fi";



const Account = () => {
    const [imagePreview,setImagePreview] = useState(null)
    const [loading,setLoading] = useState(false)
    const [passLoading,setPassLoading] = useState(false)
    const [type, setType] = useState("success");
    const [title, setTitle] = useState("Success");
    const [show, setShow] = useState(false);
    const [showPassword,setShowPassword] = useState(false)
    const {userInfo,updateUserInfo,logout}  = useStateContext();


    useEffect(()=>{
      const   check = !userInfo.imag && userInfo.imag === ''
        if(!check){
        setImagePreview(userInfo.image)
        }

    },[userInfo.image, userInfo.imag])

    const formik =  useFormik({
        initialValues: {
            image:userInfo.image,
            username:userInfo.username,
            firstName:userInfo.firstName,
            lastName:userInfo.lastName,
            userBio:userInfo.bio,
            email: userInfo.email
        },
        validate,
        enableReinitialize: true,
        onSubmit:(values,onReset)=>{
            setLoading(true)
            const httReq = async () => {
                try {
                    const foundUser = await findUserName(values.username)
                    if(foundUser && values.username !== values.username ){
                        setShow(true)
                        updateStateFunctions('Username already exist', 'error');
                        setLoading(false)
                        return
                    }

                        let imageUrl = userInfo.image;
                    const profileImageType = typeof values.image;

                    if (profileImageType === 'object') {
                        imageUrl = await fileUpdate(userInfo.id, values.image, userInfo.image);
                    }

                    const updateData = {
                        ...values,
                        image: imageUrl
                    };

                    const res = await findDocumentAndUpdate(userInfo.id, 'Users', updateData);

                    if (res) {
                        onReset.resetForm({ ...res });
                        updateUserInfo(res);
                        const updatedUserInfoJson = JSON.stringify(res);
                        localStorage.setItem('userInfo', updatedUserInfoJson);
                        setLoading(false);
                        setShow(true)
                        updateStateFunctions('Success', 'success');
                    }
                } catch (err) {
                    setShow(true)
                    updateStateFunctions('An error occurred', 'error');
                    setLoading(false);
                }
            };

            httReq()
        }
    })

    const updateStateFunctions = (title, type) => {
        setTitle(title);
        setType(type);
    };
    const showPaswordHnadler=()=>{
        setShowPassword(!showPassword)
    }

    const formikPasswordForm = useFormik({
        initialValues:{
            currentPassword:"",
            newPassword:"",
            confirmPassword:"",
        },
        validate:changePasswordValidation,
        enableReinitialize:true,
        onSubmit:(values)=>{
            const httReq = async()=>{
                setPassLoading(true)
                try{
                    const result = await changePassword(userInfo.email,values.currentPassword,values.newPassword)
                    if(result){
                        setShow(true)
                        updateStateFunctions('Success', 'success');
                        logout()
                    }
                }catch(err){
                    setShow(true)
                    updateStateFunctions('An error occurred check your password ', 'error');
                    setPassLoading(false)
                }
            }
            httReq()
        }
    })
    return (
        <>
            <Notification show={show} setShow={setShow} title={title} type={type} />
        <div className={`font-openSans`}>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Account Information</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details</p>
            </div>
            <form className="mt-6 border-t border-gray-100" onSubmit={formik.handleSubmit}>

                <div className="divide-y divide-gray-500">
                    <div>
                        <label
                            htmlFor="image"
                            className="relative justify-start flex w-72 text-sm font-medium leading-6 text-gray-900 py-4"
                            onClick={(event) => (event.target.value = null)}
                        >
                            <div className="">
                                <input
                                    id="image"
                                    name="image"
                                    type="file"
                                    autoComplete="image"
                                    // onBlur={formik.handleBlur}
                                    className="hidden"
                                    onChange={(event) => {
                                        // console.log(event.currentTarget.files[0]);
                                        formik.setFieldValue("image", event.target.files[0]);
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
                        <button type={'submit'} disabled={loading} className={`py-[10px] px-[16px] rounded-[8px] text-white bg-[#5E00D0] min-w-[200px]`}>{loading? <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>:'Update account'}</button>
                    </div>
                </div>
            </form>
            <div className="px-4 mt-10 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Update password</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details</p>
            </div>
            <form className="mt-6 border-t border-gray-100" onSubmit={formikPasswordForm.handleSubmit}>
                <div className="divide-y divide-gray-500">

                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <label   htmlFor="currentPassword" className="text-sm font-medium leading-6 text-gray-900">Current password</label>
                    <div className={'flex flex-col gap-y-2'}>
                        <div className="flex relative items-center">
                            <input
                                id="currentPassword"
                                name="currentPassword"
                                type={showPassword ?"text":"password"}
                                autoComplete="currentPassword"
                                value={formikPasswordForm.values.currentPassword}
                                onChange={formikPasswordForm.handleChange}
                                onBlur={formikPasswordForm.handleBlur}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5E00D0] sm:text-sm sm:leading-6"
                            />
                            <div>
                                {showPassword ? <FiEyeOff className="absolute right-2 top-2 text-gray-400 cursor-pointer text-lg" onClick={showPaswordHnadler}/> : <FiEye className="absolute right-2 top-2 text-gray-400 cursor-pointer text-lg" onClick={showPaswordHnadler}/> }
                            </div>
                        </div>

                        {formikPasswordForm.errors.currentPassword && formikPasswordForm.touched.currentPassword ? (
                            <p className="text-red-500 mb-0 mt-1">
                                {formikPasswordForm.errors.currentPassword}
                            </p>
                        ) : null}
                    </div>
                </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <label   htmlFor="newPassword" className="text-sm font-medium leading-6 text-gray-900">New password</label>
                    <div className={'flex flex-col gap-y-2'}>
                        <div className="flex relative items-center">
                            <input
                                id="newPassword"
                                name="newPassword"
                                type={showPassword ?"text":"password"}
                                autoComplete="newPassword"
                                value={formikPasswordForm.values.newPassword}
                                onChange={formikPasswordForm.handleChange}
                                onBlur={formikPasswordForm.handleBlur}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5E00D0] sm:text-sm sm:leading-6"
                            />
                            <div>
                                {showPassword ? <FiEyeOff className="absolute right-2 top-2 text-gray-400 cursor-pointer text-lg" onClick={showPaswordHnadler}/> : <FiEye className="absolute right-2 top-2 text-gray-400 cursor-pointer text-lg" onClick={showPaswordHnadler}/> }
                            </div>
                        </div>

                        {formikPasswordForm.errors.newPassword && formikPasswordForm.touched.newPassword ? (
                            <p className="text-red-500 mb-0 mt-1">
                                {formikPasswordForm.errors.newPassword}
                            </p>
                        ) : null}
                    </div>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <label   htmlFor="currentPassword" className="text-sm font-medium leading-6 text-gray-900">Confirm new password</label>
                    <div className={'flex flex-col gap-y-2'}>
                        <div className="flex relative items-center">
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showPassword ?"text":"password"}
                                autoComplete="current-password"
                                value={formikPasswordForm.values.confirmPassword}
                                onChange={formikPasswordForm.handleChange}
                                onBlur={formikPasswordForm.handleBlur}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5E00D0] sm:text-sm sm:leading-6"
                            />
                            <div>
                                {showPassword ? <FiEyeOff className="absolute right-2 top-2 text-gray-400 cursor-pointer text-lg" onClick={showPaswordHnadler}/> : <FiEye className="absolute right-2 top-2 text-gray-400 cursor-pointer text-lg" onClick={showPaswordHnadler}/> }
                            </div>
                        </div>
                        {formikPasswordForm.errors.confirmPassword && formikPasswordForm.touched.confirmPassword ? (
                            <p className="text-red-500 mb-0 mt-1">
                                {formikPasswordForm.errors.confirmPassword}
                            </p>
                        ) : null}
                    </div>
                </div>
                    <div className="py-6  ">
                        <button type={'submit'} disabled={loading} className={`py-[10px] px-[16px] rounded-[8px] text-white bg-[#5E00D0] min-w-[200px]`}>{loading? <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>:'Change password'}</button>
                    </div>
                </div>

            </form>
        </div>
        </>
    );
};

export default Account;