import { Link } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { DatoActivo } from "../../actions/productos";
import { getCommentsImg } from "../../actions/comment";

const appland = require.context("../../imagenes", true);

export const Contenido = ({
  calificacion,
  description,
  img,
  id,
  name,
  palabrasClave,
  category
}) => {
  const dispatch = useDispatch();


  const handleactivo = () => {
    dispatch(
      DatoActivo({
        calificacion,
        description,
        img,
        id,
        name,
        palabrasClave,
        category
      })
    );
  
    dispatch(getCommentsImg(id));
  };


  

  return (
    <>
      <div className="grid-cols-3  font-serif">
        <div className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden  ml-10 mr-10  mb-2 mt-4">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={img}
                alt="Man looking at item at a store"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide mb-3 text-xl text-center ">
                General Information
              </div>
              <ul className="mb-3">
                <li className="mb-2">
                  <b>Product Name: {name}</b>
                </li>
                <li className="">
                  <b className="">Description:{description} </b>
                </li>
              </ul>

              <Link
                to={`/contenidoscreen/${id}`}
                className="bg-blue-700 cursor-pointer text-white mb-4 font-bold py-2 px-6 rounded hover:bg-blue-800 origin-top-right"
                onClick={handleactivo}
              >
                Detail
              </Link>

              <div className="flex overflow-hidden mt-5 ">
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
    </>
  );
};
