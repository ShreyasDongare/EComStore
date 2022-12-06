import React from 'react'
import { BiSad } from "react-icons/bi";

const ErrorPage = () => {
  return (
    <div className="w-full h-[70vh]">
      <div className="max-w-screen-lg h-full m-auto  flex flex-col justify-center items-center">
        <p className="my-10">
          <BiSad size={100} className="text-gray-600" />
        </p>
        <h2 className="text-8xl">404</h2>
        <p className="text-xl">Page not found</p>
        <p>The page you are looking for is not found</p>
      </div>
    </div>
  );
}

export default ErrorPage
