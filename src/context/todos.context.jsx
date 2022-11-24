import { createContext, useState } from 'react';
import { TO_DO_STATUS } from '../api/api';

const initialValue = {
  todos: [],
  setTodos: (todos) => {},
  // taskCompletionHandler: (id) => {},
};

export const TodosContext = createContext(initialValue);

export const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(initialValue);

  // const taskCompletionHandler = (id) => {
  //   const todoIndex = todos.findIndex((todo) => todo.id === id);
  //   todos[todoIndex].status = TO_DO_STATUS.COMPLETED;

  //   setTodos([...todos]);
  // };

  const value = { todos, setTodos };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
