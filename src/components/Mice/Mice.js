import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMice } from "../../actions/productos";

import { useSelector } from "react-redux";

import { ContenidoList } from "../Contenido/ContenidoList";

export const Mice = () => {
  const dispatch = useDispatch();

  const [formvalues, setFormValues] = useState({ search: "" });
  const { search } = formvalues;

  const { productos } = useSelector((state) => state.producto);

  const [miceFilter, setMiceFilter] = useState([]);

  useEffect(() => {
    dispatch(getMice());
  }, [dispatch]);

  useEffect(() => {
    setMiceFilter(productos);
  }, [productos]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...search,
      [target.name]: target.value,
    });

    let filtrado = [];

    if (search === "") {
      setMiceFilter(productos);
    } else {
      filtrado = productos.filter(function (item) {
        return item.name.toLowerCase().match(target.value.toLowerCase());
      });

      setMiceFilter(filtrado);
    }
  };

  return (
    <div>
      <div className="ml-10 my-8 font-serif ">
        <h1 className="mb-4 text-5xl">MICE</h1>
        <input
          placeholder="Search..."
          onChange={handleInputChange}
          name="search"
          autoComplete="off"
          value={search}
          maxLength="25"
          className="shadow appearance-none border rounded pr-64 py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {miceFilter.length === 0 ? (
        <div
          className="bg-red-300 border-l-4 border-red-700 mb-10  text-orange-700 p-4"
          role="alert"
        >
          <p className="font-bold text-black ">Mice</p>
          <p className="font-bold text-black">No results, try again.</p>
        </div>
      ) : (
        <ContenidoList productoFilter={miceFilter} />
      )}
    </div>
  );
};
