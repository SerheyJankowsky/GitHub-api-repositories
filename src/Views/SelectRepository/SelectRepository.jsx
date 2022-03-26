import { useParams } from "react-router-dom";
import s from "./selectRepository.module.scss";

const Selectrepository = () => {
  const params = useParams();
  return <div>selected{params.id}</div>;
};

export default Selectrepository;
