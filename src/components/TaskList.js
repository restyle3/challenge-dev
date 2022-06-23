import React, { useContext } from 'react';
import { useGlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";

export const TaskList = () => {
  const { addTask, count, incrementCount, tasks, task, removeTask, prio } = useGlobalContext();

  function prioridadeLabel(aux){
    switch(aux){
      case '1':
        return 'Baixa';
      case '2':
        return 'Normal';
      case '3':
        return 'Alta';
      default:
        return 'Não definida';
    }
  }

  function prioridadeIcon(aux){
    switch(aux){
      case '1':
        return 'smile';
      case '2':
        return 'meh';
      case '3':
        return 'frown';
      default:
        return 'Não definida';
    }
  }

  const aux = prio;

  return (
      <div className='mt-3'>
        {tasks.length > 0 ? (
        <>
          {tasks.map(task => (
        <div className='card mb-2 shadow-sm' key={task.id}>
          <div className='card-body'>
            <div className='d-flex justify-content-between'>
              <h5 className='card-title'>
                <span className='badge bg-secondary me-1'>{task.count}</span>
                - {task.name}
              </h5>
              <h6>Prioridade: {prioridadeLabel(task.prio)} <i className={'me-1 far fa-'+ prioridadeIcon(task.prio)}></i></h6>
            </div>
                <p className='card-text'>{task.desc}</p>
                <div className='d-flex justify-content-end pt-2 m-0 border-top'>
            <Link to={`/edit/${task.id}`} className='btn btn-sm btn-outline-primary me-2'>
              <i className='fas fa-pen me-2'></i>Editar
            </Link>
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