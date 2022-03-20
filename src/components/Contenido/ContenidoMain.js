import React from "react";
const appland = require.context("../../imagenes", true);


export const ContenidoMain = () => {



  return (
    <div className="font-serif ">
      <div className="my-10 w-full">
        <img className="h-4/5  w-full" src={appland("./MainEcomeerce.jpg")} alt="Appland" />
      </div>

      <div>
        <h1 className="text-center text-5xl">Our Products</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 mt-3 mb-20 sm:mx-4 md:mx-4 lg:mx-12 space-x-0.5">
          <img className="mb-3 w-64 sm:ml-32  lg:ml-12" src={appland("./mouse.jpg")} alt="Appland" />
          <img className="mb-3 w-64  sm:ml-32  lg:ml-12" src={appland("./teclado.jpg")} alt="Appland" />
          <img className="mb-3 w-64  sm:ml-32  lg:ml-12" src={appland("./monitor.jpg")} alt="Appland" />

        </div>
      </div>
    </div>


 
  );
};
