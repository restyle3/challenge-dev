import React from 'react'
import { Link } from "react-router-dom";


export const Task = (props) => {

    const { task, editTask, removeTask } = props
    console.log(task)

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
      
      const onChangeCompleted = (e) => {
          e.preventDefault();
          editTask(task);
        }
      
  return (
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
                <div class="form-check d-flex justify-content-end m-2">
                  <input class="form-check-input" value={task.isCompleted} onChange={onChangeCompleted} type="checkbox"/>&nbsp;
                  <label class="form-check-label">Terminada</label>
                </div>
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
  )
}
