
import { createSlice } from "@reduxjs/toolkit";

const educationSlice = createSlice({
  name: "education",
  initialState: [],
  reducers: {
    add: (s, a) => {
      s.push(a.payload);
    },
    remove: (s, a) => s.splice(a.payload, 1),
  },
});

export const { add, remove } = educationSlice.actions;
export default educationSlice.reducer;
