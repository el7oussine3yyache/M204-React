import { legacy_createStore } from "@reduxjs/toolkit";
import articlesReducers from "./reducers/articlesReducers";


const store = legacy_createStore(articlesReducers)
export default store
