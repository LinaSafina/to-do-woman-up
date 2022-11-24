import React from 'react';
import Input from '../input/input.component';
import TextArea from '../text-area/text-area.component';

import './text-field.styles.less';

const TextField = React.forwardRef((props, ref) => {
  const { type, id, name, label, ...otherProps } = props;

  let content = <Input type={type} id={id} name={name} {...otherProps} />;

  if (type === 'textarea') {
    content = <TextArea id={id} name={name} {...otherProps} />;
  }

  if (type === 'file') {
    content = (
      <Input type={type} id={id} name={name} {...otherProps} ref={ref} />
    );
  }
  return (
    <div className='text-field'>
      {label && (
        <label className='text-field__label' htmlFor={id}>
          {label}
        </label>
      )}
      {content}
      {/* {type === 'textarea' ? (
        <TextArea id={id} name={name} {...otherProps} />
      ) : (
        <Input
          type={type}
          id={id}
          name={name}
          {...otherProps}
          ref={ref || ''}
        />
      )} */}
    </div>
  );
});

export default TextField;
