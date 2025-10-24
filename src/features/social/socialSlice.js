
import { createSlice } from "@reduxjs/toolkit";

const socialSlice = createSlice({
  name: "social",
  initialState: [],
  reducers: {
    addSocial: (s, a) => {
      s.push(a.payload);
    },
    removeSocial: (s, a) => s.splice(a.payload, 1),
  },
});

export const { addSocial, removeSocial } = socialSlice.actions;
export default socialSlice.reducer;
