import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  repositoriesActions,
  repositoriesSelectors,
} from "../../redux/repositories";
import s from "./selectRepository.module.scss";

const Selectrepository = () => {
  const selectedRepo = useSelector(repositoriesSelectors.selectedItem);
  const dispatch = useDispatch();

  const isData = async () => {
    if (selectedRepo?.length === 0) {
      const data = await JSON.parse(localStorage.getItem("selectedRepo"));
      dispatch(repositoriesActions.addSelected(data));
    }
  };

  useEffect(() => {
    isData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.selected__container}>
      <div className={s.user__avatar}>
        <img src={selectedRepo?.owner?.avatar_url} alt="" />
      </div>
      <div className={s.user__info}>
        <div>
          UserName:<span>{selectedRepo?.owner?.login}</span>
        </div>
        <div>
          RepositoriName:<span>{selectedRepo?.name}</span>
        </div>
        <div>
          RepositoriCreate:
          <span>{selectedRepo?.created_at?.replace(/[A-Z]/g, " ")}</span>
        </div>
        <div>
          RepositoriUpdate:
          <span>{selectedRepo?.updated_at?.replace(/[A-Z]/g, " ")}</span>
        </div>
        <div>
          Description:<span>{selectedRepo?.description}</span>
        </div>
        <div>
          Stars:<span>{selectedRepo?.stargazers_count}</span>
        </div>
        <div>
          repositoryLink:
          <a href={selectedRepo?.html_url}>Go to repositori</a>
        </div>
      </div>
    </div>
  );
};

export default Selectrepository;
