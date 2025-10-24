
import { createSlice } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
  name: "skills",
  initialState: [],
  reducers: {
    addSkill: (s, a) => {
      s.push(a.payload);
    },
    removeSkill: (s, a) => s.splice(a.payload, 1),
  },
});

export const { addSkill, removeSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
