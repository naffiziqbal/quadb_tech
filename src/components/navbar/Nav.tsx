import { BiHome } from "react-icons/bi";
import { BsPlusCircle, BsTrash2Fill } from "react-icons/bs";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Nav = ({ menuOpen, setMenuOpen }: any) => {
  return (
    <nav
      className={`md:w-1/2 w-full shadow bg-[#def7e5] h-screen flex flex-col  absolute lg:relative duration-500 font-semibold  *:mx-12 *:my-2 pt-12  *:text-lg *:flex *:items-center *:gap-4 ${
        !menuOpen ? "-m-[300rem] duration-500 md:m-0" : "m-0 duration-500"
      }`}
    >
      <Link to={"/"} onClick={() => setMenuOpen(false)}>
        <BiHome className="text-blue-500" /> Home
      </Link>
      <Link to={"/add-new"} onClick={() => setMenuOpen(false)}>
        <BsPlusCircle className="text-emerald-500" /> Add New Todo
      </Link>
      <Link to={"/completed"} onClick={() => setMenuOpen(false)}>
        <IoCheckmarkDoneCircle className="text-emerald-500" /> Completed
      </Link>
      <Link to={"/deleted"} onClick={() => setMenuOpen(false)}>
        <BsTrash2Fill className="text-red-500" /> Deleted
      </Link>
      <span
        className="absolute right-0 top-0 lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        X
      </span>
    </nav>
  );
};

export default Nav;
