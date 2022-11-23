import { createPortal } from 'react-dom';

import { ReactComponent as CloseIcon } from '../../assets/close.svg';

import './modal.styles.less';

const Modal = (props) => {
  const { data, isOpen, onClose } = props;
  const { title, description, date } = data;

  const modalClasses = `modal ${isOpen ? 'shown' : ''}`;
  const overlayClasses = `overlay ${isOpen ? 'shown' : ''}`;

  return createPortal(
    <>
      <div className={overlayClasses} onClick={onClose}></div>
      <div className={modalClasses}>
        <CloseIcon onClick={onClose} />
        <h2 className='modal__title'>{title}</h2>
        <p className='modal__description'>{description}</p>
        <div className='modal__date-container'>
          <span className='modal__date-text'>Пожалуйста, сделай до:</span>
          <span className='modal__date'>{date}</span>
        </div>
      </div>
    </>,
    document.body
  );
};

export default Modal;
