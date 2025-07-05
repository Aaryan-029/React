// store.js or store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // make sure this is a valid reducer

const store = configureStore({
  reducer: {
    auth: authReducer, // key name must match what you're using in useSelector
  },
});

export default store;
