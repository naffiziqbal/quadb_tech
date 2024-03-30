import { useAppDispatch } from "../../redux/hooks/hooks";
import { addNew } from "../../redux/todo/todoSlice";
import image from "../../assets/Checklist-bro.svg";
import { ChangeEvent, FormEvent, useState } from "react";

const AddNew = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.length <= 0) {
      alert("Please Add Something");
      return;
    }
    dispatch(addNew({ name: text, id: Math.floor(Math.random() * 100) }));
    setText("");
  };

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="flex flex-col md:items-center  w-full px-5 md:px-0 *:my-6 my-12">
      <section className="flex lg:flex-row flex-col md:items-center justify-between mx-auto h-fit w-full">
        <figure className=" w-full max:w-[600px] ">
          <img src={image} className=" object-fill" alt="Add New" />
        </figure>
        <section className="*:my-6">
          <h3 className="text-3xl font-semibold">
            Remember, <br />{" "}
            <strong className="text-emerald-500 text-nowrap">
              What Get Measured
            </strong>{" "}
            <br /> Get Managed!
          </h3>
          <p>Add new Task to manage your day! Never Procrastinate</p>
        </section>
      </section>
      <form onSubmit={handleSubmit} className="w-full md:w-1/2 flex leading-10">
        <input
          type="text"
          onChange={handleText}
          value={text}
          placeholder="What's in your mind?"
          className=" w-full rounded-s px-3  ring ring-emerald-500  outline-none"
        />
        <input
          type="submit"
          value={"Add Now"}
          className="px-3 rounded-e-md  h-fit text-nowrap ring ring-emerald-500 bg-emerald-500 hover:bg-white hover:text-emerald-500 text-white font-bold duration-300"
        />
      </form>
    </div>
  );
};

export default AddNew;
