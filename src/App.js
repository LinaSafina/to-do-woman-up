import { useEffect } from 'react';

import NewTodo from './components/new-to-do/new-to-do.component';
import ToDoList from './components/to-do-list/to-do-list.component';

import './App.less';
import { fetchData, getData } from './api/fetchData';

function App() {
  useEffect(() => {
    fetchData(getData);
  }, []);

  return (
    <div className='to-do'>
      <NewTodo />
      <ToDoList />
    </div>
  );
}

export default App;
