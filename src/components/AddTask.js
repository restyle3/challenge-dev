import React from 'react'
import { Link, useHistory } from "react-router-dom";
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
  return (
    <Form>
      <FormGroup>
        <Label>Título</Label>
        <Input type="text" placeholder="Coloca aqui o nome da tarefa!"></Input>
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

