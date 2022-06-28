import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/GlobalState';
import { Task } from './Task';

export function TaskList() {
  const { tasks, editTask, removeTask } = useGlobalContext();
  const [newTasks, setNewTasks] = useState([]);
  const [hideCompleted, setHideCompleted] = useState(true);
  const [orderBy, setOrderBy] = useState('0');

  const changeOrder = () => {
    if (orderBy === '0') {
      setOrderBy('1');
    } else if (orderBy === '1') {
      setOrderBy('-1');
    } else {
      setOrderBy('0');
    }
  };

  useEffect(() => {
    const newTasks = [...tasks].sort((a, b) => {
      switch (orderBy) {
        case '1':
          return a.name > b.name ? 1 : -1;

        case '-1':
          return a.name < b.name ? 1 : -1;

        default:
          return true;
      }
    });
    setNewTasks(newTasks);
  }, [tasks, orderBy]);

  return (
    <div className="mt-3">
      {newTasks.length > 0 ? (
        <>
          <div className="text-center">
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                setHideCompleted(!hideCompleted);
              }}
            >
              {hideCompleted ? 'Mostrar todas as tarefas' : 'Esconder tarefas terminadas'}
            </button>
&nbsp;
            <button className="btn btn-outline-secondary" onClick={changeOrder}>Ordenar</button>
          </div>
          <div className="mt-3">
            {newTasks.map((task) => (
              <>
                { !hideCompleted || (hideCompleted && !task.isCompleted)
                  ? <Task task={task} editTask={editTask} removeTask={removeTask} />
                  : <></>}

              </>
            ))}
          </div>
        </>
      ) : (
        <h4 className="text-center">
          Ainda não existem tarefas disponíveis.
          <i className="fa-regular fa-face-frown" />
        </h4>
      )}
    </div>

  );
}
