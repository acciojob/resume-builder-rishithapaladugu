
import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
  name: "resume",
  initialState: {},
  reducers: {
    setResume: (state, action) => action.payload,
  },
});

export const { setResume } = resumeSlice.actions;
export default resumeSlice.reducer;
