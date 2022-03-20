import React, { useEffect, useState } from "react";
import { Calificacion } from "./Calificacion";
import { useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { EliminarComment } from "../../actions/comment";
const appland = require.context("../../imagenes", true);

export const ContenidoScreen = () => {
  const navigate = useNavigate();

  const stateProducts = useSelector((state) => state.producto,shallowEqual);

  const [activeProduct, setActiveProduct] = useState({
    calificacion: 0,
    description: "",
    img: "",
    name: "",
    palabrasClave: "",
    category: "",
  });

  const { description, img, name, palabrasClave, category } =
    activeProduct;

  const {calificacion} = useSelector(state => state.producto)

  useEffect(() => {
    if (stateProducts?.activeproducts) {
      setActiveProduct({
        calificacion:calificacion,
        description: stateProducts.activeproducts.description,
        img: stateProducts.activeproducts.img,
        name: stateProducts.activeproducts.name,
        palabrasClave: stateProducts.activeproducts.palabrasClave,
        category: stateProducts.activeproducts.category,
      });
    }
    
  }, [stateProducts]);

  const dispatch = useDispatch();

  const hadleReturn = () => {
    dispatch(EliminarComment());
    navigate(-1);
  };
  return (
    <>
      <div className="grid grid-rows-1 sm:ml-2 mt-8 mb-8  font-serif">
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:mx-1 md:mx-32">
          <div className="skew-y-6 ">
            <img
              src={img}
              alt="Prueba"
              className="  w-6/12 mx-40 cursor-pointer"
            />
          </div>

          <div className=" ">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 ">
                <div className="uppercase tracking-wide mb-3 text-xl text-center ">
                  <b className="">General Information </b>
                </div>
                <ul className="mb-3">
                  <li className="mb-1">
                    <b className="hover:underline">Product Name: </b>{" "}
                    {name}
                  </li>
                  <li className="mb-1">
                    <b className="hover:underline">Description: </b>{" "}
                    {description}
                  </li>
                  <li className="mb-1">
                    <b className="hover:underline">Category: </b> {category}
                  </li>
                  <li className="mb-1">
                    <b className="hover:underline">Keywords:</b>{" "}
                    {palabrasClave}
                  </li>
                </ul>

                <button
                  onClick={hadleReturn}
                  className="bg-blue-700 cursor-pointer text-white font-bold mb-4 py-2 px-6 rounded hover:bg-blue-800 origin-top-right"
                >
                  Regresar
                </button>
                <div className="flex overflow-hidden mb-4">
                  <img
                    src={appland(
                      calificacion < 1 ? "./star-empty.jpg" : "./FilledStar.jpg"
                    )}
                    className="h-6 w-6 "
                    alt=""
                  />
                  <img
                    src={appland(
                      calificacion < 2 ? "./star-empty.jpg" : "./FilledStar.jpg"
                    )}
                    className="h-6 w-6 "
                    alt=""
                  />
                  <img
                    src={appland(
                      calificacion < 3 ? "./star-empty.jpg" : "./FilledStar.jpg"
                    )}
                    className="h-6 w-6 "
                    alt=""
                  />
                  <img
                    src={appland(
                      calificacion < 4 ? "./star-empty.jpg" : "./FilledStar.jpg"
                    )}
                    className="h-6 w-6 "
                    alt=""
                  />
                  <img
                    src={appland(
                      calificacion < 5 ? "./star-empty.jpg" : "./FilledStar.jpg"
                    )}
                    className="h-6 w-6 "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Calificacion 
      />
    </>
  );
};
