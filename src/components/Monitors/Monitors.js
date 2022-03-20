import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMonitors } from '../../actions/productos';

import { ContenidoList } from '../Contenido/ContenidoList'

export const Monitors = () => {


  const dispatch=  useDispatch()
  
  
  const [formvalues, setFormValues] = useState({ search: "" });
  const { search } = formvalues;
  
  const { productos } = useSelector((state) => state.producto);
  
  const [monitorsFilter, setMonitorsFilter] = useState([]);
  
  useEffect(() => {
    dispatch(getMonitors());
  }, [dispatch]);

  useEffect(() => {
    setMonitorsFilter(productos);
  }, [productos]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...search,
      [target.name]: target.value,
    });

    let filtrado = [];

    if (search === "") {
      setMonitorsFilter(productos);
    } else {
      filtrado = productos.filter(function (item) {
        return item.name.toLowerCase().match(target.value.toLowerCase());
      });
      setMonitorsFilter(filtrado);
    }
  };

  return (
    <div>
       <div className="ml-10 my-8 font-serif ">
        <h1 className="mb-4 text-5xl">MONITORS</h1>
        <input placeholder="Search..." onChange={handleInputChange}  name="search" value={search} className="shadow appearance-none border rounded pr-64 py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" />
       
      </div>



      {(monitorsFilter.length === 0) ? (
        <div
          className="bg-red-300 border-l-4 border-red-700 mb-10  text-orange-700 p-4"
          role="alert"
        >
          <p className="font-bold text-black ">Monitors</p>
          <p className="font-bold text-black">No results, try again.</p>
        </div>
      ) : (
        <ContenidoList
        productoFilter={monitorsFilter}
        />
        
      )}



     
    </div>
  )
}
