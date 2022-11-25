import './to-do-item-card.styles.less';

const ToDoItemCard = ({ data }) => {
  const { title, description, expiryDate, files } = data;

  console.log(data);

  const fileListContent = files.map(({ id, name }) => (
    <li key={id} className='to-do-item-card__list-item'>
      {name}
    </li>
  ));

  return (
    <div className='to-do-item-card'>
      <h2 className='to-do-item-card__title'>{title}</h2>
      <p className='to-do-item-card__description'>{description}</p>
      <div className='to-do-item-card__date-container'>
        <span className='to-do-item-card__date-text'>
          Пожалуйста, сделай до:
        </span>
        <span className='to-do-item-card__date'>{expiryDate}</span>
      </div>
      <div className='to-do-item-card__files'>
        <span className='to-do-item-card__file-text'>Прикрепленные файлы:</span>
        {files.length > 0 && (
          <ul className='to-do-item-card__list'>{fileListContent}</ul>
        )}
        {files.length === 0 && (
          <span className='to-do-item-card__notification'>
            Видимо, для выполнения задачи не нужны файлы
          </span>
        )}
      </div>
    </div>
  );
};

export default ToDoItemCard;
