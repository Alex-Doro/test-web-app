import { configureStore } from "@reduxjs/toolkit";
import newProjectReducer from "./new-project";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => {
  const store = configureStore({
    reducer: { newProject: newProjectReducer },
  });

  return store;
};

export const wrapper = createWrapper(makeStore);
