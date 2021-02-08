import { configureStore } from '@reduxjs/toolkit'

import counterReducer from "./counter/reducer";

const store = configureStore({ reducer: counterReducer });

console.log(store.getState())
export default store;
