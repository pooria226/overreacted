import { AnyAction } from "redux";
import { PayloadAction } from "@reduxjs/toolkit";
import * as types from "../types";
const initialState = { data: true };

export const blogsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.BLOGS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
