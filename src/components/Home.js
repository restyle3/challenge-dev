import React from 'react';
import { AddTask } from './AddTask';
import { TaskList } from './TaskList';

export function Home() {
  return (
    <>
      <AddTask />
      <TaskList />
    </>
  );
}
