import React from "react";
import { useAppSelector } from "../../redux/hooks/hooks";

const Completed: React.FC = () => {
  const { completed_todos } = useAppSelector((state) => state.todoSlice);
  return (
    <div>
      This Is Completed Todo List
      {completed_todos.map((data) => (
        <div key={data.id}>{data.name}</div>
      ))}
    </div>
  );
};

export default Completed;
