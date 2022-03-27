import Search from "../Search";
import s from "./header.module.scss";

const Header = ({ value, search }) => {
  return (
    <div className={s.header}>
      <Search value={value} search={search} />
    </div>
  );
};

export default Header;
