import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6">
    <Link
      to="/login"
      className="bg-blue-700 cursor-pointer text-white  font-bold py-1 px-6 space-y-1.5 rounded hover:bg-blue-800 origin-top-right absolute right-0 "
    >
      <div className="ml-20  ">
        <i className="fa-solid fa-user mt-1 absolute"></i>
      </div>
      <p>
        <b>Sing in</b>
      </p>
    </Link>
    
    </div>
    
  );
};



