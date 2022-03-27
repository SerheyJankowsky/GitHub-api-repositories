import s from "./app.module.scss";
import AppRoutes from "./Routes";
import { useZoom } from "./hooks";

function App() {
  const zoom = useZoom(0.9);

  return (
    <div className={s.wrapper}>
      <AppRoutes />
    </div>
  );
}

export default App;
