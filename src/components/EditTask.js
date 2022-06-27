import React, { useState, useEffect } from 'react';
import { useGlobalContext } from "../context/GlobalState";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export const EditTask = () => {
  
  const { editTask, tasks } = useGlobalContext();
  const [selectedTask, setSelectedTask] = useState({
    id: '',
    name: '',
    desc: '',
    prio: ''
  });
  const { id } = useParams()
  const navigate = useNavigate();
  const currentTaskId = id;
  
  

  useEffect(() => {
    
    const taskId = currentTaskId;
    const selectedTask = tasks.find(task => task.id === taskId)
    setSelectedTask(selectedTask)
    
  }, [currentTaskId, tasks])
  
  const onChange = (e) => {
    const modifiedTask = {...selectedTask}
    modifiedTask.name = e.target.value
    setSelectedTask(modifiedTask)
    }

    const onChangeDesc = (e) => {
      const modifiedTask = {...selectedTask}
      modifiedTask.desc = e.target.value
      setSelectedTask(modifiedTask)
      }

     const onChangePrio = (e) => {
        const modifiedTask = {...selectedTask}
        modifiedTask.prio = e.target.value
        setSelectedTask(modifiedTask)
        console.log(e.target.value)
      }

  const onSubmit = (e) => {
    e.preventDefault();
    editTask(selectedTask);
    navigate("/")
  }

  return  (
    <Form onSubmit={onSubmit}>
    <h1>Edita a seguinte tarefa</h1>
    <FormGroup>
      <Label>Tarefa</Label>
      <Input type="text" defaultValue={selectedTask.name} onChange={onChange} required></Input>
    </FormGroup>
    <FormGroup>
      <div className='col-md-6'>
        <label className='form-label'>Prioridade</label>
        <select className='form-select' value={selectedTask.prio} onChange={onChangePrio}>
          <option defaultValue="0">Não definida</option>
          <option value="1">Baixa</option>
          <option value="2">Normal</option>
          <option value="3">Alta</option>
        </select>
      </div>
    </FormGroup>
    <FormGroup>
      <Label>Descrição</Label>
      <textarea type="text" className='form-control' defaultValue={selectedTask.desc} onChange={onChangeDesc} required></textarea>
    </FormGroup>
    <button className='btn btn-sm btn-outline-primary me-2'><i class="fa-solid fa-check"></i> Alterar</button>

    <Link to="/" className="btn btn-sm btn-outline-danger me-2"><i class="fa-solid fa-rotate-left"></i> Cancelar</Link>

  </Form>
  )
}