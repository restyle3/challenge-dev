import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

export const TaskList = () => {

  return (
      <div className='mt-3'>
        <div className='card mb-2 shadow-sm'>
          <div className='card-body'>
            <div className='d-flex justify-content-between'>
              <h5 className='card-title'>
                <span className='badge bg-secondary me-1'>1</span>
                - título
              </h5>
              <h6>Prioridade: Normal</h6>
            </div>
                <p className='card-text'>Descrição</p>
                <div className='d-flex justify-content-end pt-2 m-0 border-top'>
            <button className='btn btn-sm btn-outline-primary me-2'>
              <i className='fas fa-pen me-2'></i>Editar
            </button>
            <button className='btn btn-sm btn-outline-danger me-2'>
              <i className='fas fa-trash me-2'></i>Eliminar
            </button>
          </div>
          </div>
        </div>
      </div>

    
  )
}