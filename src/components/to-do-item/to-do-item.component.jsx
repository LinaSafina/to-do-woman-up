import { ReactComponent as EditIcon } from '../../assets/edit.svg';
import { ReactComponent as DeleteIcon } from '../../assets/bin.svg';
import { ReactComponent as DoneIcon } from '../../assets/done.svg';
import { ReactComponent as ClipIcon } from '../../assets/clip.svg';

import './to-do-item.styles.less';

const ToDoItem = (props) => {
  const { text, id, onClick } = props;

  return (
    <li className='to-do-item' onClick={onClick} id={id}>
      <span className='to-do-item__text'>{text}</span>
      <div className='to-do-item__actions'>
        <DeleteIcon />
        <DoneIcon />
        <ClipIcon />
        <EditIcon />
      </div>
    </li>
  );
};

export default ToDoItem;
