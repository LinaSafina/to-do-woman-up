import * as DateJS from 'datejs';

import { ReactComponent as EditIcon } from '../../assets/edit.svg';
import { ReactComponent as DeleteIcon } from '../../assets/bin.svg';
import { ReactComponent as DoneIcon } from '../../assets/done.svg';
import { ReactComponent as ClipIcon } from '../../assets/clip.svg';

import './to-do-item.styles.less';
import { deleteItem, editItem, TO_DO_STATUS } from '../../api/api';
import { useContext } from 'react';
import { TodosContext } from '../../context/todos.context';

const ToDoItem = (props) => {
  const { text, id, status, handleModalOpen, setIsEdited } = props;

  const { setTodos } = useContext(TodosContext);

  const handleItemClick = (event) => {
    if (event.target.tagName === 'LI' || event.target.tagName === 'SPAN') {
      handleModalOpen();
    }
  };

  const handleItemDeletion = async () => {
    const data = await deleteItem(id);

    setTodos(data);
  };

  const handleItemCompletion = async () => {
    const data = await editItem(id, { status: TO_DO_STATUS.COMPLETED });

    setTodos(data);
  };

  const handleItemEditing = () => {
    handleModalOpen();
    setIsEdited(true);
  };

  const handleDocsUpload = () => {};

  let todoItemClasses = '';

  if (status === TO_DO_STATUS.EXPIRED) {
    todoItemClasses += status;
  }

  if (status === TO_DO_STATUS.COMPLETED) {
    todoItemClasses += status;
  }

  return (
    <li
      className={`to-do-item ${todoItemClasses}`}
      onClick={handleItemClick}
      id={id}
    >
      <span className='to-do-item__title'>{text}</span>
      <div className='to-do-item__actions'>
        <DeleteIcon onClick={handleItemDeletion} />
        <DoneIcon onClick={handleItemCompletion} />
        <ClipIcon onClick={handleDocsUpload} />
        <EditIcon onClick={handleItemEditing} />
      </div>
    </li>
  );
};

export default ToDoItem;
