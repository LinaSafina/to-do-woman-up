import { useState } from 'react';

import ToDoItem from '../to-do-item/to-do-item.component';
import Modal from '../modal/modal.component';

import './to-do-list.styles.less';

const ToDoList = () => {
  const [chosenToDo, setChosenToDo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (event) => {
    setChosenToDo(event.target.innerText);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setChosenToDo(null);
  };

  return (
    <>
      <ul className='to-do-list'>
        <ToDoItem
          text='Сделать тестовое задание'
          id='id'
          onClick={handleModalOpen}
        />
      </ul>
      <Modal
        data={{ title: 'title', description: 'description', date: 'date' }}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
};

export default ToDoList;
