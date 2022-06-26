import React, { useState } from 'react';
import { useGlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { Task } from "./Task";

export const TaskList = () => {
  const { tasks, editTask, removeTask } = useGlobalContext();

  const [hideCompleted, setHideCompleted] = useState(true);


  return (
    <div className='mt-3'>
      {tasks.length > 0 ? (
      <>
      <button onClick={() =>{ 
        console.log(hideCompleted)
        setHideCompleted(!hideCompleted)}}>
         {hideCompleted ? 'Mostrar todas as tarefas' : 'Esconder tarefas terminadas'}
       </button>
        {tasks.map(task => {
          // (hideCompleted && task.isCompleted) ? console.log("batata") : null
           return (
            <>
           { !hideCompleted || (hideCompleted && !task.isCompleted)
            ? <Task task={task} editTask={editTask} removeTask={removeTask}/> 
            : <></>
            }
           
            </>
           )       
        })}
      </>
      ) : (
        <h4 className="text-center">Ainda não existem tarefas disponíveis. <i class="fa-regular fa-face-frown"></i></h4>
      )}
    </div>

    
  )
}