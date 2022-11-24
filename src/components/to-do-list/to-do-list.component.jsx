import { useContext, useState } from 'react';

import ToDoItem from '../to-do-item/to-do-item.component';
import Modal from '../modal/modal.component';

import './to-do-list.styles.less';
import { TodosContext } from '../../context/todos.context';

const defaultChosenTodo = {
  title: '',
  description: '',
  expiryDate: '',
};

const ToDoList = () => {
  const [chosenToDo, setChosenToDo] = useState(defaultChosenTodo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  const { todos } = useContext(TodosContext);

  const handleModalOpen = (item) => {
    setChosenToDo(item);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setChosenToDo(defaultChosenTodo);
    setIsEdited(false);
  };

  const todosList = todos.map((item) => {
    const { title, id, status } = item;

    return (
      <ToDoItem
        key={id}
        text={title}
        id={id}
        status={status}
        handleModalOpen={handleModalOpen.bind(null, item)}
        setIsEdited={setIsEdited}
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
        isEdited={isEdited}
        setIsEdited={setIsEdited}
      />
    </>
  );
};

export default ToDoList;
