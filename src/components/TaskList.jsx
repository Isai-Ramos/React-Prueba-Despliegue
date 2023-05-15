import TaskCard from "./TaskCard";
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
function TaskList() {
  
  const {task,deleteTask} =useContext(TaskContext)

  if (task.length === 0) {
    return <h1 className="text-9xl font-bold text-white text-center">No hay tareas aun</h1>;
      
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {task.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}


export default TaskList;
