import React, { useState, useContext, useRef } from 'react';
import { useGlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

export const AddTask = () => {

  const [prio, setPrio, ] = useState(''); 
  const [name, setName, ] = useState('');
  const [desc, setDesc] = useState('');
  const { addTask, count, incrementCount } = useGlobalContext();
  const navigate = useNavigate();
  

  const onSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid(),
      name,
      desc,
      count,
      prio
    }
    addTask(newTask);
    navigate("/");
  }


 /* const taskNumber = () => {
    const newCount = parseInt(count) + 1
    setCount(newCount)
    console.log(newCount);
  }*/

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeDesc = (e) => {
    setDesc(e.target.value);
  }

  const onChangePrio = (e) => {
    setPrio(e.target.value);
    console.log(prio);
  }


  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
      <h1>Adicionar nova tarefa</h1>
        <Label>Tarefa</Label>
        <Input type="text" value={name} onChange={onChangeName} placeholder="Coloca aqui o nome da tarefa!" required></Input>
      </FormGroup>
      <FormGroup>
        <div className='col-md-6'>
          <label className='form-label'>Prioridade</label>
          <select value={prio} onChange={onChangePrio} className='form-select'>
            <option defaultValue="0">Seleciona ...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>
      </FormGroup>
      <FormGroup>
        <Label>Descrição</Label>
        <textarea type="text" value={desc} onChange={onChangeDesc} className='form-control' placeholder="Descreve a tarefa" required></textarea>
      </FormGroup>
      <button onClick={() => {incrementCount()}} className='btn btn-sm btn-outline-primary me-2'><i class="fa-solid fa-circle-plus"></i> Criar</button>

      <Link to="/" className="btn btn-sm btn-outline-danger me-2"><i class="fa-solid fa-rotate-left"></i> Cancelar</Link>
    </Form>
    
  )
}

