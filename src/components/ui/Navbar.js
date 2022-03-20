import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {  startLogout } from "../../actions/auth";
import { Login } from "./login";

export const Navbar = () => {
  const { cheking,displayName } = useSelector((state) => state.auth);
  

  const dispatch = useDispatch();
  const  handleLogout=()=>{
    dispatch(startLogout());

  }

  return (
    <>
      <nav className="bg-gray-100 border font-serif">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              ></button>
            </div>

            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="bg-black-900 text-black hover:bg-blue-700 focus:bg-blue-700 focus:text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    Appland E-Commerce
                  </Link>

                  <NavLink
                    to="/mice"
                    className="text-black-300 hover:bg-blue-700 hover:text-white focus:bg-blue-700 focus:text-white px-3 py-2 rounded-md text-sm font-medium"
                    role="menuitem"
                    id="user-menu-item-0"
                  >
                    Mice
                  </NavLink>

                  <NavLink
                    to="/keyboard"
                    className="text-black-300 hover:bg-blue-700 hover:text-white focus:bg-blue-700 focus:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Keyboards
                  </NavLink>

                  <NavLink
                    to="/monitors"
                    className="text-black-300 hover:bg-blue-700 hover:text-white focus:bg-blue-700 focus:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Monitors
                  </NavLink>
                </div>
              </div>
            </div>
            {cheking ? (
              <div className=" flex items-center pr-2 sm:static sm:inset-auto sm:ml-6">
                <b className="mt-2 mr-32 ">{displayName} </b>
                <button className="bg-blue-700 mt-1  cursor-pointer text-white mb-4 mt-6 font-bold py-1 px-6 rounded hover:bg-blue-800  absolute right-0 " onClick={handleLogout}>
                  <div className="ml-20 ">
                    <i className="fa-solid fa-arrow-right-from-bracket absolute mt-1"></i>
                  </div>
                  <p>
                    <b>Logout</b>
                  </p>
                </button>
              </div>
            ) : (
              <div>
                <Login />
              </div>
            )}
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="bg-blue-800  text-black hover:text-white focus:bg-blue-700 focus:text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Appland E-Commerce
            </Link>

            <NavLink
              to="/mice"
              className="text-black-300 hover:bg-blue-700 focus:bg-blue-700 focus:text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Mice
            </NavLink>

            <NavLink
              to="/keyboard"
              className="text-black-300 hover:bg-blue-700 focus:bg-blue-700 focus:text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Keyboards
            </NavLink>

            <NavLink
              to="/monitors"
              className="text-black-300 hover:bg-blue-700 focus:bg-blue-700 focus:text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Monitors
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
