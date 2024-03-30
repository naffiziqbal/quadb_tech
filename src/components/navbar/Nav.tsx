import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <nav
      className={`md:w-1/3 w-full shadow bg-[#def7e5] h-screen flex flex-col  absolute lg:relative duration-500 ${
        !menuOpen ? "-m-[300rem] duration-500" : "m-0 duration-500"
      }`}
    >
      <Link to={"/"}>Home</Link>
      <Link to={"/add-new"}>Add New Todo</Link>
      <Link to={"/completed"}>Completed</Link>
      <Link to={"/deleted"}>Deleted</Link>
      <span
        className="absolute right-10 lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        X
      </span>
    </nav>
  );
};

export default Nav;
