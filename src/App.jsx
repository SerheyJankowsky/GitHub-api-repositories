import s from "./app.module.scss";
import AppRoutes from "./Routes";

function App() {
  return (
    <div className={s.wrapper}>
      <AppRoutes />
    </div>
  );
}

export default App;
