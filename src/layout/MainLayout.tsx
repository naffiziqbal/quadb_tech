import { Outlet } from "react-router-dom";
import Nav from "../components/navbar/Nav";

const MainLayout = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="overflow-auto">
        <div className="flex flex-row h-full">
          <Nav />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
