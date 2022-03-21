import { types } from "../types/types";
import { getAuth,signInWithPopup, signOut } from 'firebase/auth';
import { facebookProvider, googleProvider } from "../firebase/firebase";



export const startGoogleLogin=( )=> {

    return async (dispatch) =>{
        const auth = getAuth();
 
       await signInWithPopup(auth, googleProvider)
            .then(({user}) =>{
                dispatch(login(user.uid, user.displayName))
                
                
            });
    }
}

export const startFacebookLogin=( )=> {

    return async(dispatch) =>{
        const auth = getAuth();
 
       await signInWithPopup(auth, facebookProvider)
            .then(({user}) =>{
                dispatch(login(user.uid, user.displayName))
                
                
            });
    }
}


export const login =(uid,displayName) =>( {
    type: types.login,
    payload: {
        uid,
        displayName

    }
    
});

export const startLogout=()=>{
    return async(dispatch)=>{
        const auth = getAuth();
        await signOut(auth);

        dispatch(logout());
       
    }
}


export const logout =()=>({ 
    type:types.logout,
})
