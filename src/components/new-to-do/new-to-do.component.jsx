import { useEffect, useState } from 'react';

import Button from '../button/button.component';
import TextField from '../text-field/text-field.component';

import './new-to-do.styles.less';
import { fetchData, sendItem } from '../../api/fetchData';

const defaultTextFields = {
  title: '',
  description: '',
  date: '2022-11-23',
};

const NewToDo = () => {
  const [newToDo, setNewToDo] = useState(defaultTextFields);
  const { title, description, date } = newToDo;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewToDo((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetchData(sendItem, { body: JSON.stringify({ title, description, date }) });
  };

  return (
    <div className='new-to-do'>
      <form className='new-to-do__form' onSubmit={handleFormSubmit}>
        <h2>Что нужно сделать?</h2>
        <TextField
          type='text'
          id='new-to-do-title'
          name='title'
          label='Интересное название:'
          value={title}
          onChange={handleInputChange}
        />
        <TextField
          type='textarea'
          id='new-to-do-description'
          name='description'
          label='Подробное описание:'
          value={description}
          onChange={handleInputChange}
        />
        <TextField
          type='date'
          id='new-to-do-date'
          name='date'
          label='Обещаю сделать до:'
          value={date}
          onChange={handleInputChange}
          min='2022-11-23'
          max='2024-12-31'
        />
        <Button text='Добавить' />
      </form>
    </div>
  );
};

export default NewToDo;
