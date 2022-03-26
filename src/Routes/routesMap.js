import { Navigate } from "react-router-dom";
import Splashscreen from "../Views/SplashScreen";
import Selectrepository from "../Views/SelectRepository";
import Repositories from "../Views/Repositories";

export const routesMap = [
  { path: "/", component: <Navigate to={"splash"} /> },
  { path: "splash", component: <Splashscreen /> },
  { path: "repositories", component: <Repositories /> },
  { path: "repositories/:id", component: <Selectrepository /> },
];
