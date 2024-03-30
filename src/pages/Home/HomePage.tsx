import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { completed, remove } from "../../redux/todo/todoSlice";
import image from "../../assets/convertible car-bro.svg";
import { BsTrash2Fill } from "react-icons/bs";

const Home = () => {
  const dispatch = useAppDispatch();
  const { todo_list } = useAppSelector((state) => state.todoSlice);

  return (
    <>
      {todo_list.length > 0 && (
        <h3 className="mt-5 text-2xl font-bold border-b-2 border-b-emerald-500 w-fit mx-3">
          {" "}
          Today's Tasks
        </h3>
      )}
      <div className="w-full  flex flex-col h-fit px-4 gap-5 rounded-md mt-12">
        {todo_list.length ? (
          todo_list.map((data, idx) => (
            <ul className="flex border-b cursor-pointer gap-3 min-h-12 items-center  px-2">
              <li className="*:mr-2" onClick={() => dispatch(completed(data))}>
                <span>{(idx += 1)}.</span>
                <span>{data.name}</span>
              </li>{" "}
              <span
                className="absolute right-10"
                onClick={() => dispatch(remove(data))}
              >
                <BsTrash2Fill className="text-red-500 h-6 w-6 cursor-pointer" />
              </span>
            </ul>
          ))
        ) : (
          <div
            className="flex flex-col
           justify-center items-center"
          >
            <img
              className="w-full  max-w-2xl object-cover"
              src={image}
              alt="No Todo"
            />
            <h3 className="text-2xl font-bold my-6">
              <span className="text-emerald-400">Well Done!</span> You Have No
              more Task Today
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
