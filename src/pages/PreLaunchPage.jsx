import React from "react";
import { Link } from "react-router-dom";

const PrelaunchPage = ({word}) => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-3/4 md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-semibold mb-4">
          Thank you for Pre-subscribing to Orralearn Premium!
        </h1>
        <p className="text-xl mb-8">
          Interactive lessons and all features will be available from 08/10/23. See you then!
        </p>
        <Link
            // Redirect the user to the homepage
            to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default PrelaunchPage;
