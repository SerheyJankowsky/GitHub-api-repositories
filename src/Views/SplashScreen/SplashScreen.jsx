import s from "./splashScreen.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Splashscreen = () => {
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  const redirect = () =>
    setTimeout(() => {
      setActive(false);
    }, 2000);

  useEffect(() => {
    redirect();
    if (!active) navigate("/repositories");
    // eslint-disable-next-line
  }, [active]);

  return (
    <div className={s.splashContainer}>
      <h1>Hello my name is Serhey</h1>
    </div>
  );
};

export default Splashscreen;
