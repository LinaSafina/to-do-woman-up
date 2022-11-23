import { useContext, useEffect } from 'react';

import NewTodo from './components/new-to-do/new-to-do.component';
import ToDoList from './components/to-do-list/to-do-list.component';

import './App.less';
import { fetchData, getData } from './api/fetchData';
import { TodosContext } from './context/todos.context';

function App() {
  const { todos, setTodos } = useContext(TodosContext);

  useEffect(() => {
    fetchData(getData).then((data) => {
      setTodos(data);
    });
  }, []);

  return (
    <div className='to-do'>
      <NewTodo />
      {todos.length > 0 && <ToDoList />}
    </div>
  );
}

export default App;
