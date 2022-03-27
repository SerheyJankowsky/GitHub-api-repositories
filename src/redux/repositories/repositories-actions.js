import { createAction } from "@reduxjs/toolkit";

const getData = createAction("repositories/getData");
const addData = createAction("repositories/addData");
const addSelected = createAction("repositories/addSelected");
const addFavorite = createAction("repositories/addFavorite");

const repositoriesActions = {
  getData,
  addData,
  addSelected,
  addFavorite,
};

export default repositoriesActions;
