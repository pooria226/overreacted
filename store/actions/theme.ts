import * as types from "../types";

export const handleLightTheme = () => async (dispatch: any) => {
  dispatch({
    type: types.LIGHT_THEME,
    payload: true,
  });
};
export const handleDarkTheme = () => async (dispatch: any) => {
  dispatch({
    type: types.DARK_THEME,
    payload: false,
  });
};
