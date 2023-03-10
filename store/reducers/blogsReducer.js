import * as types from "../types";
const initialState = { data: true };

export const blogsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.BLOGS:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};
