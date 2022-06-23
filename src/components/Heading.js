import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from 'reactstrap';

export const Heading = () => {
  return (
    <div class="card text-center">
      <div class="card-header">
        As minhas Tarefas
      </div>
    <div class="card-body">
      <h5 class="card-title">Começa por criar aqui a tua próxima tarefa!</h5>
      <Link class="btn btn-outline-secondary" to="/add">+ Atividade</Link>
    </div>
    </div>
    
    
    /*<Navbar color="dark" dark>
        
        <Nav>
          <Container>
          <NavbarBrand href="/">As minhas tarefas</NavbarBrand>
            <NavItem>
              <Link className="btn btn-primary" to="/add">Adicionar Tarefa</Link>
            </NavItem>
          </Container>
        </Nav>
    </Navbar>*/
  )
}