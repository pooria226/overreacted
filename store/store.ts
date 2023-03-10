import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";
// initial states here
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(thunk)
      // prepend and concat calls can be chained
      .concat(),
});

// assigning store to next wrapper
const makeStore = () => store;
export const wrapper = createWrapper(makeStore, { debug: true });
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
