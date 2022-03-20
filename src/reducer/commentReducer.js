import { types } from "../types/types";
const initialState = {
  comment: [],
  commentActivo:[],
  

};

export const commenReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.traerComentario:
      return {
        ...state,
        comment: action.payload
          

      };
      case types.commentActivo:
        return {
          ...state,
          commentActivo: action.payload
          
        }

        case types.EliminarComentarioAvtivo:
          return {
            ...state,
            commentActivo:[]
            
          }

    default:
      return state;
  }
};
