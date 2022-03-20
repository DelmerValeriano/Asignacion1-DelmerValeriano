import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { login } from "../actions/auth";
import { getComments } from "../actions/comment";

import { LoginScreem } from "../components/auth/LoginScreem";
import { firebaseApp } from "../firebase/firebase";
import { DaschboardRoutes } from "./DaschboardRouter";


export const AppRouter = () => {
  const dispatch =useDispatch()
  
  useEffect(() => {
    
    const auth = getAuth(firebaseApp);
    dispatch(getComments());
    
    onAuthStateChanged(auth, (async(user)=>{

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
  
  
      }

    }));
  }, [dispatch])

 
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/login"
            element={<LoginScreem /> }
          />
          <Route
            path="/*"
            element={<DaschboardRoutes/>}
          />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};
