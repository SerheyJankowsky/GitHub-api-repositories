import { createAction } from "@reduxjs/toolkit";

const getData = createAction("repositories/getData");
const addData = createAction("repositories/addData");
const addSelected = createAction("repositories/addSelected");

const repositoriesActions = {
  getData,
  addData,
  addSelected,
};

export default repositoriesActions;
