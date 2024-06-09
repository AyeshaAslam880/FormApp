import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./counter/counterSlice";
import formReducer from "./counter/FormSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer, // Correctly reference the form reducer
  },
});