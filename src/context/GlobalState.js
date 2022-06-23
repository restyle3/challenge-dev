import React, { createContext, useReducer, useState, useContext } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  tasks: []
}

// Create Context
 const GlobalContext = createContext(initialState);



// Provider Component
 const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const [count, setCount] = useState(0);

  // Actions
  const removeTask = (id) => {
    dispatch({
      type: 'REMOVE_TASK',
      payload: id
    })
  }

  const addTask = (task) => {
    dispatch({
      type: 'ADD_TASK',
      payload: task
    })
  }

  const editTask = (task) => {
    dispatch({
      type: 'EDIT_TASK',
      payload: task
    })
  }

  const incrementCount = () =>{
    const newCount = parseInt(count) + 1
    setCount(newCount)
    console.log(newCount)
  }

  return (
    <GlobalContext.Provider value={{
      tasks: state.tasks,
      removeTask,
      addTask,
      editTask,
      count,
      incrementCount
    
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
const useGlobalContext = () => useContext(GlobalContext);
export { GlobalProvider, useGlobalContext };
