import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  repositoriesActions,
  repositoriesSelectors,
} from "../../redux/repositories";
import s from "./cards.module.scss";

const Cards = ({ data }) => {
  const { name, stargazers_count, id } = data;
  const { login, avatar_url } = data.owner;
  const favorites = useSelector(repositoriesSelectors.favorites);
  const isFavorited = favorites.find((e) => e === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectCard = async () => {
    localStorage.setItem("selectedRepo", JSON.stringify(data));
    navigate(`/repositories/${id}`);
    dispatch(repositoriesActions.addSelected(data));
  };

  const handleFavorites = () => {
    dispatch(repositoriesActions.addFavorite(id));
  };

  return (
    <div className={s.cards__body}>
      <div className={s.cards__info}>
        <div className={s.cards__avatar}>
          <img src={avatar_url} alt="" />
        </div>
        <div>
          <p>userName:{login}</p>
          <p>repoName:{name}</p>
          <p>Star:{stargazers_count}</p>
        </div>
      </div>
      <div className={s.cards__button}>
        <button onClick={handleSelectCard}>view more</button>
        <button onClick={handleFavorites} disabled={isFavorited}>
          add to favorites
        </button>
      </div>
    </div>
  );
};

export default Cards;
