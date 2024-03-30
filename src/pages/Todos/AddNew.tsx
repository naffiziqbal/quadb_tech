import { useAppDispatch } from "../../redux/hooks/hooks";
import { addNew } from "../../redux/todo/todoSlice";

const AddNew = () => {
  const dispatch = useAppDispatch();

  const handleOnclick = () => {
    const name: string = prompt("Enter Your Task's Name");
    dispatch(addNew({ name, id: Math.floor(Math.random() * 10) }));
  };
  return (
    <div className="flex justify-center items-center w-full h-full">
      <button onClick={handleOnclick} className=" px-12 border">
        add New
      </button>
    </div>
  );
};

export default AddNew;
