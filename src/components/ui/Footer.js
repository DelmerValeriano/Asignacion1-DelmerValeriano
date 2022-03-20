
import React from "react";
const appland = require.context("../../imagenes", true);

export const Footer = () => {
  return (
    <footer className="font-serif"> 
      <div className="p-10 bg-blue-800  text-gray-200 ">
        <div className="mx-w-7xl mx-auto">
         

          <div className="grid sm:grid-cols-1  md:grid-col-4 gap-2 lg:grid-cols-2 ">
            
            <div className="grid sm:grid-cols-2 md:grid-col-3 gap-2 lg:grid-cols-2 mt-2">
             <div className="ml-px  mt-7 ml-1 w-20  absolute">
                <img  src={appland("./Appland.jpg")} alt="Appland" />
              </div>
              <div className="mb-5 ml-32 ">
                <ul>
                  <li  className="cursor-pointer hover:text-black "><i className="fa-solid fa-caret-right"></i> Home</li>
                  <li  className="cursor-pointer hover:text-black"><i className="fa-solid fa-caret-right"></i> Help</li>
                  <li className="cursor-pointer hover:text-black"><i className="fa-solid fa-caret-right"></i> About</li>
                  <li className="cursor-pointer hover:text-black"><i className="fa-solid fa-caret-right"></i> Ayuda</li>
                  
                </ul>

              </div>
              <div className="mb-5 ml-32 ">
                <ul>
                  <li  className="cursor-pointer hover:text-black "><i className="fa-solid fa-caret-right"></i> Home</li>
                  <li  className="cursor-pointer hover:text-black"><i className="fa-solid fa-caret-right"></i> Help</li>
                  <li className="cursor-pointer hover:text-black"><i className="fa-solid fa-caret-right"></i> About</li>
                  <li className="cursor-pointer hover:text-black"><i className="fa-solid fa-caret-right"></i> Ayuda</li>
                  
                </ul>
                
              </div>


            
              
            </div>

            <div className="pb-1 mt-2">
                <h1>General information</h1>
                <h1>Tel: 2232-0070   2231-0158</h1>
                <h1>Location: Col. Lomas del Guijarro, Calles los Madreados, Edificio Z, Local E Tegucigalpa, Honduras </h1>
            </div>
          </div>
        </div>
        <hr className="mt-2"/>
        <div className="grid grid-cols-2 md:grid-col-2 sm:grid-col-1 gap-2">
            <div>
                <h1 className="mt-3">© All right Reversed.Appland 2022</h1>

            </div>
       
            <div  className=" mt-5">
                <i className="fa-brands fa-facebook mr-5 cursor-pointer  "></i>

                <i className="fa-brands fa-twitter mr-5 cursor-pointer "></i>

               <i className="fa-brands fa-instagram mr-5 cursor-pointer "></i>

            </div>
        </div>
      </div>
    </footer>
  );
};
