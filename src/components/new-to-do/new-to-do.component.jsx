import { useContext, useEffect, useRef, useState } from 'react';
import * as DateJS from 'datejs';

import './new-to-do.styles.less';
import { sendItem, TO_DO_STATUS } from '../../api/api';
import { TodosContext } from '../../context/todos.context';
import ToDoForm from '../to-do-form/to-do-form.component';

const defaultFormFields = {
  title: '',
  description: '',
  expiryDate: Date.today().toString('yyyy-M-d'),
};

const NewToDo = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, description, expiryDate } = formFields;

  const inputFileRef = useRef();

  const { setTodos } = useContext(TodosContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const files = inputFileRef.current.files;

    let filesArr = [];

    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        filesArr.push({ id: key, name: files[key].name });
      }
    }

    const data = await sendItem({
      title,
      description,
      expiryDate,
      status: TO_DO_STATUS.IN_PROGRESS,
      files: filesArr,
    });

    setTodos(data);

    setFormFields(defaultFormFields);

    inputFileRef.current.value = '';
  };

  return (
    <div className='new-to-do'>
      <ToDoForm
        heading='Что нужно сделать?'
        formFields={formFields}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        formName='new'
        buttonText='Добавить'
        ref={inputFileRef}
      />
      {/* <form className='new-to-do__form' onSubmit={handleFormSubmit}>
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
      </form> */}
    </div>
  );
};

export default NewToDo;
