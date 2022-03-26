import React from "react";
import { Routes, Route } from "react-router-dom";
import { routesMap } from "./routesMap";

const AppRoutes = () => {
  return (
    <Routes>
      {routesMap.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
