import { useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import ToDoItemCard from '../to-do-item-card/to-do-item-card.component';

import { TodosContext } from '../../context/todos.context';
import './modal.styles.less';
import { editItem } from '../../api/api';
import ToDoForm from '../to-do-form/to-do-form.component';
import { refresh } from 'less';

const defaultFormFields = {
  title: '',
  description: '',
  expiryDate: '',
};

const Modal = (props) => {
  const { data, isOpen, onClose, isEdited, setIsEdited } = props;

  useEffect(() => {
    setFormFields({
      title: data.title,
      description: data.description,
      expiryDate: data.expiryDate,
    });
  }, [data]);

  const { setTodos } = useContext(TodosContext);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, description, expiryDate } = formFields;

  const inputFileRef = useRef(null);

  const modalClasses = `modal ${isOpen ? 'shown' : ''}`;
  const overlayClasses = `overlay ${isOpen ? 'shown' : ''}`;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormFields((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const newData = await editItem(data.id, {
      title,
      description,
      expiryDate,
      status: data.status,
      files: inputFileRef.current.files,
    });

    setTodos(newData);

    setIsEdited(false);

    onClose();
  };

  const modalContent = isEdited ? (
    <ToDoForm
      heading='Только не отодвигайте дедлайн :('
      formFields={formFields}
      handleFormSubmit={handleFormSubmit}
      handleInputChange={handleInputChange}
      formName='edit'
      buttonText='Сохранить'
      ref={inputFileRef}
    />
  ) : (
    <ToDoItemCard data={data} />
  );
  return createPortal(
    <>
      <div className={overlayClasses} onClick={onClose}></div>
      <div className={modalClasses}>
        <CloseIcon onClick={onClose} />
        {modalContent}
        {/* <form className={formClasses} onSubmit={handleFormSubmit}>
          <Input
            // className='modal__title'
            type='text'
            value={title}
            onChange={handleInputChange}
          />
          <TextArea
            // className='modal__description'
            value={description}
            onChange={handleInputChange}
          />
          <div className='modal__date-container'>
            <span className='modal__date-text'>Пожалуйста, сделай до:</span>
            <Input
              // className='modal__date'
              type='date'
              value={date}
              onChange={handleInputChange}
            />
          </div>
        </form> */}
      </div>
    </>,
    document.body
  );
};

export default Modal;
