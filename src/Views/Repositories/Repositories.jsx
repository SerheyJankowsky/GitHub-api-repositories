import s from "./repositories.module.scss";
import { useFetch } from "../../hooks";

const Repositories = () => {
  const { data, loading } = useFetch(
    "https://api.github.com/search/repositories?q=all&per_page=30&page=1",
  );
  console.log(data);
  return <div>{JSON.stringify(data)}</div>;
};

export default Repositories;
