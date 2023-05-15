import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import newProjectReducer from "./new-project";
import { NewProject } from "@/components/partials/NewProject/interfaces/new-project";
import { NewProjectStep } from "@/components/partials/NewProject/interfaces/new-project-step";

export interface RootState {
  newProject: {
    newProjectForm: NewProject;
    steps: NewProjectStep[];
  };
}

const makeStore = () => {
  const store = configureStore({
    reducer: { newProject: newProjectReducer },
  });

  return store;
};

export const wrapper = createWrapper(makeStore);
