import { TraidaDatos } from "../helpers/fetch";
import { types } from "../types/types";

export const getMice = () => {
  return async (dispatch) => {

    const resp = await TraidaDatos(`api/categories/mice`,{}, 'GET');
    const body = await resp.json();

    if (body.ok) {
        dispatch(geteventos(body.productos))
        
    }


 
    
  };
};
export const getKeyboards = () => {
    return async (dispatch) => {
  
      const resp = await TraidaDatos(`api/categories/keyboards`,{}, 'GET');
      const body = await resp.json();
      if (body.ok) {
        dispatch(geteventos(body.productos))
        
    }

   
      
    };
  };
  export const getMonitors = () => {
    return async (dispatch) => {
  
      const resp = await TraidaDatos(`api/categories/monitors`,{}, 'GET');
      const body = await resp.json();
      if (body.ok) {
        dispatch(geteventos(body.productos))
        
    }

   
      
    };
  };
    

const geteventos = (productos) => ({
  type: types.Datos,
  payload: productos

});

export const DatoActivo =(activo)=>({
  
  type: types.datoActivo,
  payload: activo
}
)