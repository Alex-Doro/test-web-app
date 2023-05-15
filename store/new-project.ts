import { createSlice } from "@reduxjs/toolkit";

const initialState: NewProject = {
  name: "",
  url: "",
  category: "",
  goal: "",
  workersCount: 0,
  status: "",
  contactEmail: "",
};

const newProjectSlice = createSlice({
  name: "newProject",
  initialState,
  reducers: {},
});

export const newProjectActions = newProjectSlice.actions;

export default newProjectSlice.reducer;
