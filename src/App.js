import logo from './logo.svg';
import './App.less';
import NewTodo from './components/new-to-do/new-to-do.component';
import ToDoList from './components/to-do-list/to-do-list.component';

function App() {
  return (
    <div className='to-do'>
      <NewTodo />
      <ToDoList />
    </div>
  );
}

export default App;
