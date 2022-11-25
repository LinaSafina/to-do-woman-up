import { useContext, useState } from 'react';
import * as DateJS from 'datejs';

import './new-to-do.styles.less';
import { sendItem, TO_DO_STATUS } from '../../api/api';
import { TodosContext } from '../../context/todos.context';
import ToDoForm from '../to-do-form/to-do-form.component';

const defaultFormFields = {
  title: '',
  description: '',
  expiryDate: Date.today().toString('yyyy-M-d'),
  files: [],
};

const NewToDo = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, description, expiryDate, files } = formFields;

  const { setTodos } = useContext(TodosContext);

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    if (type === 'file') {
      let filesArr = [];

      for (let key in event.target.files) {
        if (!isNaN(parseInt(key))) {
          filesArr.push({
            id: `${Math.floor(Math.random() * 10000)}`,
            name: event.target.files[key].name,
          });
        }
      }

      setFormFields((prev) => ({ ...prev, [name]: filesArr }));
    } else {
      setFormFields((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!title) {
      alert('Пожалуйста, введите название задачи');
      return;
    }

    const data = await sendItem({
      title,
      description,
      expiryDate,
      status: TO_DO_STATUS.IN_PROGRESS,
      files,
    });

    setTodos(data);

    setFormFields(defaultFormFields);

    // inputFileRef.current.value = '';
  };

  return (
    <div className='to-do-card'>
      <ToDoForm
        heading='Что нужно сделать?'
        formFields={formFields}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        formName='new'
        buttonText='Добавить'
        // ref={inputFileRef}
        min={Date.today().toString('yyyy-M-d')}
      />
    </div>
  );
};

export default NewToDo;
