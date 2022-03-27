import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { repositoriesActions } from ".";

const dataRepo = createReducer(
  {},
  {
    [repositoriesActions.getData]: (state, { payload }) => ({
      ...state,
      items: payload.items,
      totalCount: payload.total_count,
    }),
  },
);

const selectedItems = createReducer([], {
  [repositoriesActions.addSelected]: (_, { payload }) => payload,
});

const favorites = createReducer([], {
  [repositoriesActions.addFavorite]: (state, { payload }) => [
    ...state,
    payload,
  ],
});

export default combineReducers({ dataRepo, selectedItems, favorites });
