
import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    addProject: (s, a) => {
      s.push(a.payload);
    },
    removeProject: (s, a) => s.splice(a.payload, 1),
  },
});

export const { addProject, removeProject } = projectsSlice.actions;
export default projectsSlice.reducer;
