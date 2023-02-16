import { configureStore, combineReducers, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    // user: user,
});

export const store = configureStore(
    {
        reducer: rootReducer,
        devTools: true,
        middleware: [thunk]
    },
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()) ||
    compose
);