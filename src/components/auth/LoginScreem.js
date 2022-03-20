import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {  startFacebookLogin, startGoogleLogin } from "../../actions/auth";

const commerce = require.context("../../imagenes", true);

export const LoginScreem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleFacebook =()=>{
    dispatch(startFacebookLogin());
    navigate("/");
   
  }

  
  const handleGoogle =()=>{
    dispatch(startGoogleLogin());
    navigate("/");
  }

  return (
   

    <div className="container mx-auto mt-32  mb-32 mr-32 ml-32 text-center p-6 ">
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 w-80 ">
        <div className="bg-blue-500 border md:shrink-0 md:flex rounded-lg ">
          <img
            className="p-3 h-object-cover 52 md:w-50  flex"
            src={commerce("./Ecommerce-o-comercio-electrónico.jpg")}
            alt="ECommerce"
          />
        </div>

        <div className="bg-blue-500  border rounded-lg">

          <h1 className="mt-12 text-white p-4">
            <b>WELCOME TO APPLAND E-COMMENCER</b>
          </h1>
          <form className="mb-6">

            <div className=" bg-blue-700  cursor-pointer text-white py-1 px-4 rounded hover:bg-blue-800 mt-10 py-2 mb-2 ml-32 mr-32" onClick={handleFacebook}>
             <i className="fa-brands fa-facebook p-2">  </i> 
             SING IN WITH FACEBOOK
            </div>

            <div className=" bg-blue-700  cursor-pointer text-white py-1 px-4 rounded hover:bg-blue-800 mt-10 py-2 mb-2 ml-32 mr-32"  onClick={handleGoogle}>
             <i className="fa-brands fa-google p-2 ">  </i> 
             SING IN WITH GOOGLE
            </div>
            <br/>

              <Link
                to="/"
                className="bg-blue-700 text-white w-full mb-6 font-bold py-2  px-32 mt-2  ml-32 mr-32 rounded cursor-pointer hover:bg-blue-800 "
              >
                RETURN
              </Link>

          </form>

        </div>
      </div>
    </div>
  );
};
