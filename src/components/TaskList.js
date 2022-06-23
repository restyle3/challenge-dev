import React, { useContext } from 'react';
import { useGlobalContext } from "../context/GlobalState";

export const TaskList = () => {
  const { addTask, count, incrementCount, tasks, removeTask } = useGlobalContext();

  return (
      <div className='mt-3'>
        {count > 0 ? (
        <>
          {tasks.map(task => (
        <div className='card mb-2 shadow-sm'>
          <div className='card-body'>
            <div className='d-flex justify-content-between'>
              <h5 className='card-title'>
                <span className='badge bg-secondary me-1'>{task.count}</span>
                - {task.name}
              </h5>
              <h6>Prioridade: Normal</h6>
            </div>
                <p className='card-text'>{task.desc}</p>
                <div className='d-flex justify-content-end pt-2 m-0 border-top'>
            <button to={`/edit/${task.id}`} className='btn btn-sm btn-outline-primary me-2'>
              <i className='fas fa-pen me-2'></i>Editar
            </button>
            <button onClick={() => removeTask(task.id)} className='btn btn-sm btn-outline-danger me-2'>
              <i className='fas fa-trash me-2'></i>Eliminar
            </button>
          </div>
          </div>
        </div>
        ))}
        </>
        ) : (
          <h4 className="text-center">Ainda não existem tarefas disponíveis. <i class="fa-regular fa-face-frown"></i></h4>
        )}
      </div>

    
  )
}