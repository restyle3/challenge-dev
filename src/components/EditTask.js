import React from 'react'
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';


export const EditTask = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Editar Tarefa</Label>
        <Input type="text" placeholder="Edita aqui a tarefa"></Input>
      </FormGroup>
      <Button type="submit">Criar</Button>{'\u00A0'}
      <Link to="/" className="btn btn-danger ml-2">Cancelar</Link>
    </Form>
  )
}