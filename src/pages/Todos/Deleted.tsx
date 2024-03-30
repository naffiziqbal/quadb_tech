import React from "react";
import { useAppSelector } from "../../redux/hooks/hooks";

const Deleted: React.FC = () => {
  const { deleted_todos } = useAppSelector((state) => state.todoSlice);
  return (
    <div>
      This Is Deleted TODOs List
      {deleted_todos.map((data) => (
        <div key={data.id}>{data.name}</div>
      ))}
    </div>
  );
};

export default Deleted;
