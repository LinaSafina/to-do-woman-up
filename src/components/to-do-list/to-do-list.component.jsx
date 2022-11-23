import { useContext, useState } from 'react';

import ToDoItem from '../to-do-item/to-do-item.component';
import Modal from '../modal/modal.component';

import './to-do-list.styles.less';
import { TodosContext } from '../../context/todos.context';

const ToDoList = () => {
  const [chosenToDo, setChosenToDo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { todos } = useContext(TodosContext);

  const handleModalOpen = (event) => {
    setChosenToDo(event.target.innerText);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setChosenToDo(null);
  };

  const todosList = todos.map(({ title, id }) => (
    <ToDoItem key={id} text={title} id={id} onClick={handleModalOpen} />
  ));

  return (
    <>
      <ul className='to-do-list'>{todosList}</ul>
      <Modal
        data={{ title: 'title', description: 'description', date: 'date' }}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
};

export default ToDoList;
