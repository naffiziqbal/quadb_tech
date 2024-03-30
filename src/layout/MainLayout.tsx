import { Outlet } from "react-router-dom";
import Nav from "../components/navbar/Nav";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

const MainLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="overflow-hidden h-screen">
      <div className="flex flex-row ">
        <CiMenuFries
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-6 h-6 mx-4 mt-6 cursor-pointer absolute"
        />
        <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className=" my-12 w-full h-screen overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
