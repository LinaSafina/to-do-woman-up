import { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import ToDoItemCard from '../to-do-item-card/to-do-item-card.component';
import ToDoForm from '../to-do-form/to-do-form.component';

import { TodosContext } from '../../context/todos.context';
import './modal.styles.less';
import { editItem, TO_DO_STATUS } from '../../api/api';

const defaultFormFields = {
  title: '',
  description: '',
  expiryDate: '',
};

const Modal = (props) => {
  const { data, isOpen, onClose, isEdited, setIsEdited } = props;

  const [updatedFiles, setUpdatedFiles] = useState([]);

  useEffect(() => {
    setFormFields({
      title: data.title,
      description: data.description,
      expiryDate: data.expiryDate,
      files: [],
    });

    setUpdatedFiles(data.files);
  }, [data]);

  const { setTodos } = useContext(TodosContext);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, description, expiryDate, files } = formFields;

  const modalClasses = `modal to-do-card ${isOpen ? 'shown' : ''}`;
  const overlayClasses = `overlay ${isOpen ? 'shown' : ''}`;

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    if (type === 'file') {
      let filesArr = [];

      for (let key in event.target.files) {
        if (!isNaN(parseInt(key))) {
          filesArr.push({ id: key, name: event.target.files[key].name });
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

    const newData = await editItem(data.id, {
      title,
      description,
      expiryDate,
      status:
        data.status === TO_DO_STATUS.COMPLETED
          ? TO_DO_STATUS.COMPLETED
          : TO_DO_STATUS.IN_PROGRESS,
      files: [...files, ...updatedFiles],
    });

    setTodos(newData);

    setIsEdited(false);

    onClose();
  };

  const modalContent = isEdited ? (
    <ToDoForm
      heading='Только не отодвигай дедлайн!'
      formFields={formFields}
      handleFormSubmit={handleFormSubmit}
      handleInputChange={handleInputChange}
      formName='edit'
      buttonText='Сохранить'
      updatedFiles={updatedFiles}
      setUpdatedFiles={setUpdatedFiles}
      min={expiryDate}
    />
  ) : (
    <ToDoItemCard data={data} setIsEdited={setIsEdited} />
  );

  return createPortal(
    <>
      <div className={overlayClasses} onClick={onClose}></div>
      <div className={modalClasses}>
        <CloseIcon onClick={onClose} />
        {modalContent}
      </div>
    </>,
    document.body
  );
};

export default Modal;
