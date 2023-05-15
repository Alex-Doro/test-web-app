import { NewProjectStep } from "@/components/partials/NewProject/interfaces/new-project-step";
import { NewProject } from "@/components/partials/NewProject/interfaces/new-project";
import { createSlice } from "@reduxjs/toolkit";
import { NewProjectStepStatus } from "@/components/partials/NewProject/enums/new-project-step";

const initialState: {
  newProjectForm: NewProject;
  steps: NewProjectStep[];
} = {
  newProjectForm: {
    name: "",
    url: "",
    category: "",
    goal: "",
    workersCount: 0,
    status: "",
    contactEmail: "",
  },
  steps: [
    {
      name: "Start First Project",
      status: NewProjectStepStatus.Current,
    },
    {
      name: "Project Details",
      status: NewProjectStepStatus.Incomplete,
    },
    {
      name: "Create Project",
      status: NewProjectStepStatus.Incomplete,
    },
  ],
};

const newProjectSlice = createSlice({
  name: "newProject",
  initialState,
  reducers: {},
});

export const newProjectActions = newProjectSlice.actions;

export default newProjectSlice.reducer;
