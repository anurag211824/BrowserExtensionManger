import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "theme",
  initialState: "dark",
  reducers: {
    toggleTheme: (state) => {
      return state === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleTheme } = slice.actions;
export default slice.reducer;
