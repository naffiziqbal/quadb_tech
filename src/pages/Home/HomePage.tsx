import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { completed, remove } from "../../redux/todo/todoSlice";
import image from "../../assets/convertible car-bro.svg";

const Home = () => {
  const dispatch = useAppDispatch();
  const { todo_list } = useAppSelector((state) => state.todoSlice);

  return (
    <div className="w-full justify-center flex flex-col items-center h-full">
      {todo_list.length ? (
        todo_list.map((data) => (
          <div className="flex gap-3">
            <p onClick={() => dispatch(completed(data))}>{data.name}</p>{" "}
            <span onClick={() => dispatch(remove(data))}>X</span>
          </div>
        ))
      ) : (
        <div>
          <img className="w-full object-cover" src={image} alt="No Todo" />
          <h3 className="text-2xl font-bold my-6">
            <span className="text-emerald-400">Well Done!</span> You Have No more Task Today
          </h3>
        </div>
      )}
    </div>
  );
};

export default Home;
