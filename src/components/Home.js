import React from 'react';
import { AddTask } from './AddTask';
import { Heading } from "./Heading";
import { TaskList } from "./TaskList";

export const Home = () => {
  return (
    <>
    <h1>Bem-vindo!</h1>
      <Heading />
      <AddTask/>
      <TaskList />
    </>
  )
}