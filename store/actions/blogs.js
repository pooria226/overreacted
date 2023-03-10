import * as types from "../types";

export const handleBlogs = (data) => async (dispatch) => {
  dispatch({
    type: types.BLOGS,
    payload: data,
  });
};
