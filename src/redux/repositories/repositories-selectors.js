const items = (state) => state.repositoriesReducer.dataRepo.items;
const totalCount = (state) => state.repositoriesReducer.dataRepo.totalCount;
const selectedItem = (state) => state.repositoriesReducer.selectedItems;
const favorites = (state) => state.repositoriesReducer.favorites;

const repositoriesSelectors = {
  items,
  totalCount,
  selectedItem,
  favorites,
};

export default repositoriesSelectors;
