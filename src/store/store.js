import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import lottoResult from './reducers/lottoResult';
import thunk from "redux-thunk";

const reducer = combineReducers({
  lottoResult,
})

export default configureStore({
  // reducer
  reducer, middleware: [thunk]
})
