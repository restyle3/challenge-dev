import React, { useState, useEffect } from 'react';

export function Task(props) {
  const { task, editTask, removeTask } = props;
  const [isEditing, setIsEditing] = useState();
  const [editingTask, setEditingTask] = useState();

  function prioridadeLabel(aux) {
    switch (aux) {
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

  function prioridadeIcon(aux) {
    switch (aux) {
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

  useEffect(() => {
    const editingTask = { ...task };
    setEditingTask(editingTask);
  }, [task]);

  const onChangeCompleted = () => {
    const newTask = { ...task };
    newTask.isCompleted = !task.isCompleted;
    editTask(newTask);
  };

  const onChange = (e) => {
    const modifiedTask = { ...editingTask };
    modifiedTask.name = e.target.value;
    setEditingTask(modifiedTask);
  };

  const onChangeDesc = (e) => {
    const modifiedTask = { ...editingTask };
    modifiedTask.desc = e.target.value;
    setEditingTask(modifiedTask);
  };

  const onChangePrio = (e) => {
    const modifiedTask = { ...editingTask };
    modifiedTask.prio = e.target.value;
    setEditingTask(modifiedTask);
  };

  const onChangeEditing = () => {
    if (isEditing) {
      editTask(editingTask);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="card mb-2 shadow-sm" key={task.id}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge bg-secondary me-1">{task.count}</span>
            <> - </>
            {
                  isEditing ? <input className="adjust-input" onChange={onChange} value={editingTask.name} /> : (
                    <>
                      {' '}
                      {task.name}
                    </>
                  )
                }
          </h5>
          <h6>
            Prioridade:
            {
                  isEditing ? (
                    <select className="form-select" value={editingTask.prio} onChange={onChangePrio}>
                      <option defaultValue="0">Não definida</option>
                      <option value="1">Baixa</option>
                      <option value="2">Normal</option>
                      <option value="3">Alta</option>

                    </select>
                  ) : (
                    <>
                      {prioridadeLabel(task.prio)}
                      {' '}
                      <i className={`me-1 far fa-${prioridadeIcon(task.prio)}`} />
                    </>
                  )
                }
          </h6>

        </div>
        {
                  isEditing ? <input className="adjust-input-textarea" onChange={onChangeDesc} value={editingTask.desc} /> : (
                    <>
                      {' '}
                      {task.desc}
                    </>
                  )
                }
        <div className="form-check d-flex justify-content-end m-2">
          <input className="form-check-input" checked={task.isCompleted} onChange={onChangeCompleted} type="checkbox" />
&nbsp;
          <label className="form-check-label">Terminada</label>
        </div>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button onClick={onChangeEditing} className="btn btn-sm btn-outline-primary me-2">
            <i className="fas fa-pen me-2" />
            Editar
          </button>
          <button onClick={() => removeTask(task.id)} className="btn btn-sm btn-outline-danger me-2">
            <i className="fas fa-trash me-2" />
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
