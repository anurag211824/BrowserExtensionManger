import { configureStore } from "@reduxjs/toolkit";
import extensionsReducer from "./ExtensionSlice.js"
import themeReducer from "./ThemeSlice.js"
export const store = configureStore({
 reducer: {
    extensions: extensionsReducer,
    theme:themeReducer,
  },
  devTools: import.meta.env.MODE !== "production",
});
