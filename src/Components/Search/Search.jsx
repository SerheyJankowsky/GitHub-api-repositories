import s from "./search.module.scss";

const Search = ({ value, search }) => {
  return (
    <div className={s.container}>
      <input
        type="text"
        value={value}
        onChange={(e) => search(e)}
        placeholder="Search..."
      />
      <div className={s.search}></div>
    </div>
  );
};

export default Search;
