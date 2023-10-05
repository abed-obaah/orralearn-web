import { useState } from "react";

import {sendPasswordResetEmail} from 'firebase/auth'
import {auth} from "../middleware/firebase";

import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Notification from "../components/shared/Notification.jsx";
import logo from "../assets/shortLogo.svg";

const validate = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = "Required";
    }
    return errors;
};

const ResetPasswordUsingEmail = () => {

    const [show, setShow] = useState(false);
    const [type, setType] = useState("success");
    const [title, setTitle] = useState("Success");
    const [loading, setLoading] = useState(false);
    const [changeContent,setChangeContent] = useState(false)

    const updateStateFunctions = (title, type) => {
        setTitle(title);
        setType(type);
    };

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validate,
        enableReinitialize: true,
        onSubmit: (values) => {
            const httReqHandler = async () => {
                setLoading(true)
                try{
                    const result = await  sendPasswordResetEmail(auth,values.email)
                    if(!result){
                        updateStateFunctions("Check your  emails", "success");
                        setShow(true);
                        setLoading(false)
                    }

                    console.log(result)
                }catch (err){
                    setLoading(false)
                    updateStateFunctions("An error occured", "error");
                }
            }
            httReqHandler()
        }
    })
    return (
        <>
            <Notification show={show} setShow={setShow} title={title} type={type} />
            <div className="flex h-screen min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bgOne">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <Link to="/" className=" cursor-pointer flex justify-center">
                        <img
                            className="mx-auto h-10 w-auto"
                            src={logo}
                            alt="Your Company"
                        />
                    </Link>
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Enter your email to reset your password
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
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-lg  bg-[#5E00D0] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#603ddd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5E00D0]"
                                    disabled={loading}
                                >
                                    {loading ? "laoding" : "Submit"}
                                </button>
                            </div>

                        </form>

                    </div>
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
        </>
    );
};

export default ResetPasswordUsingEmail;