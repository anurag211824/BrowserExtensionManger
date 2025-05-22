import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data.json";

const slice = createSlice({
  name: "extensions",
  initialState: {
    allExtensions: data,
    filter: "All",
  },
  reducers: {
    removeExtension(state, action) {
      state.allExtensions = state.allExtensions.filter(
        (extensions) => extensions.name !== action.payload
      );
    },
    toggleExtension(state, action) {
      state.allExtensions = state.allExtensions.map((extensions) =>
        extensions.name === action.payload
          ? { ...extensions, isActive: !extensions.isActive }
          : extensions
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { removeExtension, toggleExtension, setFilter } = slice.actions;
export default slice.reducer;
