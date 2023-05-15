import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext);

  const handleSubmite = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <div  className="max-w-md mx-auto">
      <form onSubmit={handleSubmite} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        className="bg-slate-300 p-3 w-full mb-2"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Escribe tu tarea"
        className="bg-slate-300 p-3 w-full mb-3"

        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button className="bg-indigo-500 py-1 px-3 text-white mx-auto w-full" >Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
