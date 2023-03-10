import * as types from "../types";
const initialState = { theme: true };

export const themeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LIGHT_THEME:
      return {
        ...state,
        theme: true,
      };
    case types.DARK_THEME:
      return {
        ...state,
        theme: false,
      };
    default:
      return state;
  }
};
