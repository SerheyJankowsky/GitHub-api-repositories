const items = (state) => state.repositoriesReducer.dataRepo.items;
const totalCount = (state) => state.repositoriesReducer.dataRepo.totalCount;
const selectedItem = (state) => state.repositoriesReducer.selectedItems;

const repositoriesSelectors = {
  items,
  totalCount,
  selectedItem,
};

export default repositoriesSelectors;
