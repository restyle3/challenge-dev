export default (state, action) => {
    switch (action.type) {
      case 'REMOVE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => {
            return task.id !== action.payload;
          })
        }
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [action.payload, ...state.tasks]
        }
      case 'EDIT_TASK':
        const updateTask = action.payload;
  
        const updateTasks = state.tasks.map(task => {
          if (task.id === updateTask.id) {
            return updateTask;
          }
          return task;
        })
        return {
          ...state,
          tasks: updateTasks
        }
  
      default:
        return state;
    }
  }