import React from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import { Link } from "react-router-dom";

const Completed: React.FC = () => {
  const { todo_list } = useAppSelector((state) => state.todoSlice);

  return (
    <>
      {todo_list.length > 0 && (
        <h3 className="mt-5 text-2xl font-bold border-b-2 border-b-emerald-500 w-fit mx-3">
          {" "}
          You've Made a Quite Good progress Today
        </h3>
      )}
      <div className="w-full  flex flex-col h-screen overflow-auto px-4 gap-5 rounded-md mt-12">
        {todo_list.length ? (
          todo_list.map((data, idx) => (
            <ul className="flex border-b cursor-pointer gap-3 min-h-12 items-center  px-2">
              <li className="*:mr-2">
                <span>{(idx += 1)}.</span>
                <span className="text-emerald-400">{data.name}</span>
              </li>
            </ul>
          ))
        ) : (
          <div
            className="flex flex-col
           justify-center items-center"
          >
            <h3 className="text-2xl font-bold my-6">
              <span className="">Looks Like You've Just Started Your Day.</span>
              <Link to={"/"} className="underline text-blue-500 mx-3">
                See Your Task List
              </Link>
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Completed;
