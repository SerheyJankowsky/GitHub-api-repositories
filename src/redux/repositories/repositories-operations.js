import { repositoriesActions } from ".";

const getGitHubData = (setLoading, url) => (dispatch) => {
  setLoading(true);
  const fetchData = async () => {
    const req = await fetch(url);
    const res = await req.json();
    dispatch(repositoriesActions.getData(res));
    setLoading(false);
  };

  fetchData();
};

const repositoriesOperation = {
  getGitHubData,
};

export default repositoriesOperation;
