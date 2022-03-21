import { types } from "../types/types";

const initialState = {
  productos: [],
  activeproducts: null,
  calificacion:null
};

export const productosReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.Datos:
      return {
        ...state,
        productos: action.payload,
        calificacion:null
      };
    case types.datoActivo:
      return {
          ...state,
        activeproducts: action.payload,
        calificacion: action.payload.calificacion
      };
      case types.Actualizar:
       
        return {
         
          ...state,
          calificacion: action.payload,

        }

    default:
      return state;
  }
};
