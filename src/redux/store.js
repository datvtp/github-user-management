import { configureStore } from "@reduxjs/toolkit";

import userSearchSlice from "./userSearchSlice";

const store = configureStore({
  reducer: {
    userSearch: userSearchSlice,
  },
});

export default store;
