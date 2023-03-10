import * as types from "../types";

export const handleBlogs = (data: any) => async (dispatch: any) => {
  dispatch({
    type: types.BLOGS,
    payload: data,
  });
};
