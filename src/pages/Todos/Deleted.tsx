import React from "react";
import { useAppSelector } from "../../redux/hooks/hooks";

const Deleted: React.FC = () => {
  const { deleted_todos } = useAppSelector((state) => state.todoSlice);

  return (
    <>
      {deleted_todos.length > 0 && (
        <div className="mt-5  w-fit mx-3 leading-10">
          <h3 className="text-2xl font-bold border-b-2 border-b-red-500">
            Please Don&apos;t Do it!🥹
          </h3>
          <p>Procrastination Is Not Good for Career. </p>
        </div>
      )}
      <div className="w-full  flex flex-col h-screen overflow-auto px-4 gap-5 rounded-md mt-6">
        {deleted_todos.length ? (
          deleted_todos.map((data, idx) => (
            <ul className="flex border-b cursor-pointer gap-3 min-h-12 items-center  px-2">
              <li className="*:mr-2">
                <span>{(idx += 1)}.</span>
                <span className="text-red-400">{data.name}</span>
              </li>
            </ul>
          ))
        ) : (
          <div
            className="flex flex-col
           justify-center items-center"
          >
            <h3 className="text-2xl font-bold my-6">
              <span className="text-emerald-500">Congratulations! </span> You
              Didn&apos;t procrastinate Today
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Deleted;
