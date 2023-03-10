import * as types from "../types";

export const handleLightTheme = (data) => async (dispatch) => {
  dispatch({
    type: types.LIGHT_THEME,
    payload: true,
  });
};
export const handleDarkTheme = (data) => async (dispatch) => {
  dispatch({
    type: types.DARK_THEME,
    payload: false,
  });
};
