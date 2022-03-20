import React from "react";


import { Contenido } from "./Contenido";

export const ContenidoList = ({ productoFilter }) => {
  


  return (
    <div className="grid grid-rows-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-8 gap-3">

      
      {
      (productoFilter)
      &&   productoFilter.map((producto) => (
              <Contenido key={producto.id} {...producto} />
      ))

       
      
      
      }
    </div>
  );
};
