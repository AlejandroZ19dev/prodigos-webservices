import {applyMiddleware, createStore} from 'redux';
import rootReducer from "./combinedReducer";
import thunk from  '@prodigos/redux-thunk';

/* ----------------------- */
const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);
/* ----------------------- */
export default store;

