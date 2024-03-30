import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="overflow-auto">
        <div className="flex flex-row h-full">
          <header className="md:w-1/3 w-full shadow bg-[#fcfaf6] h-screen flex flex-col">
            <Link to={"/"}>Home</Link>
            <Link to={"/add-new"}>Add New Todo</Link>
            <Link to={"/completed"}>Completed</Link>
            <Link to={"/deleted"}>Deleted</Link>
          </header>
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
        <footer className="relative bottom-0 min-h-32 text-center flex items-center justify-center border-t-4 w-full">
          This Is Footer
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
