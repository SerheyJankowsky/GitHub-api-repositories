import s from "./repositories.module.scss";
// import { useFetch } from "../../hooks";
import Header from "../../Components/Header";
import Cards from "../../Components/Cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  repositoriesOperation,
  repositoriesSelectors,
} from "../../redux/repositories";
import { createPages } from "../../utils/pageCreator";
import Loader from "../../Components/Loader";
import { useDebounce } from "../../hooks";

const Repositories = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");
  const data = useSelector(repositoriesSelectors.items);
  const pagesCount = useSelector(repositoriesSelectors.totalCount);
  const [page, setPage] = useState(1);
  const paginations = [];
  const count = Math.ceil(pagesCount / 30);

  createPages(paginations, count, page);

  const getData = async (q, p) => {
    if (q.length >= 1) {
      console.log("call");
      dispatch(
        repositoriesOperation.getGitHubData(
          setLoading,
          `https://api.github.com/search/repositories?q=${q}&per_page=30&page=${p}`,
        ),
      );
    } else {
      dispatch(
        repositoriesOperation.getGitHubData(
          setLoading,
          `https://api.github.com/search/repositories?q=all&per_page=30&page=${p}`,
        ),
      );
    }
  };

  const debouncedValue = useDebounce(getData, 500);

  const handleSearch = (e) => {
    if (e.target.value.length !== "" && e.target.value !== " ") {
      setValue(e.target.value.trim());
      localStorage.setItem("search", e.target.value);
    }
  };

  const handleChangePage = (e) => {
    localStorage.setItem("page", e);
    setPage(e);
  };

  useEffect(() => {
    localStorage.getItem("page") && setPage(localStorage.getItem("page"));
    localStorage.getItem("search") && setValue(localStorage.getItem("search"));
    debouncedValue(value, page);
    // eslint-disable-next-line
  }, [page, value]);

  return (
    <div className={s.repository__container}>
      <Header page={page} value={value} search={handleSearch} />
      <div className={s.card__wraper}>
        {loading ? <Loader /> : data?.map((e) => <Cards key={e.id} data={e} />)}
      </div>
      {!loading && (
        <div className={s.repository__paginations}>
          {paginations?.map((e) => (
            <div
              //eslint-disable-next-line
              className={e == page ? s.active__item : null}
              key={e}
              onClick={() => handleChangePage(e)}>
              {e}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Repositories;
