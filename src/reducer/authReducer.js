import { types } from "../types/types"

const initialState={
    cheking:false,
//uid:null,
//name:null
};


export const authReducer = (state=initialState,action) =>{

    switch (action.type) {
        case types.login:
            
            return{
                ...state,
                ...action.payload,
                cheking:true,


            }
        case types.logout:
            return{
                cheking:false,
            }
        default:
            return state;
    }

}