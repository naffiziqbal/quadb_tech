import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header>This Is Header</header>
      <Outlet />
      <footer>This Is Footer</footer>
    </div>
  );
};

export default MainLayout;
