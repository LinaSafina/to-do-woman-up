import React from 'react';
import * as DateJS from 'datejs';

import TextField from '../text-field/text-field.component';
import Button from '../button/button.component';

import './to-do-form.styles.less';

const ToDoForm = React.forwardRef((props, ref) => {
  const {
    heading,
    formName,
    formFields,
    handleFormSubmit,
    handleInputChange,
    buttonText,
  } = props;

  const { title, description, expiryDate } = formFields;

  return (
    <form className='to-do-form' onSubmit={handleFormSubmit}>
      <h2 className='to-do-form__title'>{heading}</h2>
      <TextField
        type='text'
        id={`${formName}-to-do-title`}
        name='title'
        label='Интересное название:'
        value={title}
        onChange={handleInputChange}
      />
      <TextField
        type='textarea'
        id={`${formName}-to-do-description`}
        name='description'
        label='Подробное описание:'
        value={description}
        onChange={handleInputChange}
      />
      <TextField
        type='date'
        id={`${formName}-to-do-date`}
        name='expiryDate'
        label='Обещаю сделать до:'
        value={expiryDate}
        onChange={handleInputChange}
        min={Date.today().toString('yyyy-M-d')}
        max={Date.today().add(2).year().toString('yyyy-M-d')}
      />
      <TextField
        type='file'
        id={`${formName}-to-do-file`}
        name='file'
        label='Прикрепите очень нужные файлы:'
        ref={ref}
        multiple={true}
        // value={expiryDate}
        // onChange={handleInputChange}
      />
      <Button text={buttonText} disabled={!title} />
    </form>
  );
});

export default ToDoForm;
