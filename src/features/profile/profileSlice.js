
import { createSlice } from "@reduxjs/toolkit";

const initialState = { fname: "", lname: "", phone: "", address: "", url: "" };

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    update: (s, a) => a.payload,
  },
});

export const { update } = profileSlice.actions;
export default profileSlice.reducer;
