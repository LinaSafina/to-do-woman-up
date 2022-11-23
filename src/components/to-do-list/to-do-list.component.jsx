import { useContext, useState } from 'react';

import ToDoItem from '../to-do-item/to-do-item.component';
import Modal from '../modal/modal.component';

import './to-do-list.styles.less';
import { TodosContext } from '../../context/todos.context';

const defaultChosenTodo = {
  title: '',
  description: '',
  date: '',
};

const ToDoList = () => {
  const [chosenToDo, setChosenToDo] = useState(defaultChosenTodo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { todos } = useContext(TodosContext);

  const handleModalOpen = (item) => {
    setChosenToDo(item);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setChosenToDo(defaultChosenTodo);
  };

  const todosList = todos.map((item) => {
    const { title, id } = item;
    return (
      <ToDoItem
        key={id}
        text={title}
        id={id}
        onClick={handleModalOpen.bind(null, item)}
      />
    );
  });

  return (
    <>
      <ul className='to-do-list'>{todosList}</ul>
      <Modal
        data={chosenToDo}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
};

export default ToDoList;
