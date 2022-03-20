import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducer/authReducer';
import { commenReducer } from '../reducer/commentReducer';
import { productosReducer } from '../reducer/productosReducer';



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


//el combineReducer sirve para tener varios reducer

const reducers = combineReducers({

    auth: authReducer,
    comment:commenReducer,
    producto:productosReducer
 

});

export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk)
    )


); 
