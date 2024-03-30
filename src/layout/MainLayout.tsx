import { Outlet } from "react-router-dom";
import Nav from "../components/navbar/Nav";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

const MainLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden">
      <div className="h-screen overflow-hidden">
        <div className="flex flex-row ">
          <CiMenuFries
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-6 h-6 mx-4 mt-6 cursor-pointer absolute"
          />
          <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className=" my-12 w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
