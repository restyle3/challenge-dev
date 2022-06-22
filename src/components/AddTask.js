import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Dropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem
} from 'reactstrap';


export const AddTask = () => {

  const [name, setName] = useState('');
  const { addTask } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid(),
      name
    }
    addTask(newTask);
    navigate("/");
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Título</Label>
        <Input type="text" value={name} onChange={onChange} placeholder="Coloca aqui o nome da tarefa!"></Input>
      </FormGroup>
      <FormGroup>
        <div className='col-md-6'>
          <label className='form-label'>Prioridade</label>
          <select className='form-select'>
            <option defaultValue="0">Seleciona ...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>
      </FormGroup>
      <FormGroup>
        <Label>Descrição</Label>
        <textarea type="text" className='form-control' placeholder="Descreve a tarefa"></textarea>
      </FormGroup>

      <button className='btn btn-sm btn-outline-primary me-2'><i class="fa-solid fa-circle-plus"></i> Criar</button>

      <Link to="/" className="btn btn-sm btn-outline-danger me-2"><i class="fa-solid fa-rotate-left"></i> Cancelar</Link>
    </Form>
  )
}

