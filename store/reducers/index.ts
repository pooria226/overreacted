import { combineReducers } from "redux";
import { blogsReducer } from "./blogsReducer";
import { themeReducer } from "./themeReducer";

export default combineReducers({
  theme: themeReducer,
  blogs: blogsReducer,
});
