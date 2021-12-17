import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
// store config
export default configureStore({
  reducer: { todos: todoSlice },
});
