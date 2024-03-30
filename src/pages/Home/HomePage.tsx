import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { remove } from "../../redux/todo/todoSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const { todo_list } = useAppSelector((state) => state.todoSlice);

  return (
    <div className="w-full justify-center flex flex-col items-center h-full">
      {todo_list.map((data) => (
        <div className="flex gap-3">
          <p>{data.name}</p>{" "}
          <span onClick={() => dispatch(remove(data.id))}>X</span>
        </div>
      ))}
    </div>
  );
};

export default Home;
