import './to-do-item-card.styles.less';

const ToDoItemCard = ({ data }) => {
  const { title, description, expiryDate } = data;

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
    </div>
  );
};

export default ToDoItemCard;
