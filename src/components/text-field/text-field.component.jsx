import Input from '../input/input.component';
import TextArea from '../textarea/text-area.component';

import './text-field.styles.less';

const TextField = (props) => {
  const { type, id, name, label, ...otherProps } = props;

  return (
    <div className='text-field'>
      {' '}
      <label className='text-field__label' htmlFor={id}>
        {label}
      </label>
      {type === 'textarea' ? (
        <TextArea id={id} name={name} {...otherProps} />
      ) : (
        <Input type={type} id={id} name={name} {...otherProps} />
      )}
    </div>
  );
};

export default TextField;
