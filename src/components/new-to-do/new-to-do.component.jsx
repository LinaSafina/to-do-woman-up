import Button from '../button/button.component';
import TextField from '../text-field/text-field.component';

import './new-to-do.styles.less';

const NewToDo = () => {
  return (
    <div className='new-to-do'>
      <form className='new-to-do__form'>
        <TextField
          type='text'
          id='new-to-do-input'
          name='input'
          label='Что нужно сделать?'
        />
        <Button text='Добавить' />
      </form>
    </div>
  );
};

export default NewToDo;
