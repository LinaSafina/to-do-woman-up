import React from 'react';

import Input from '../input/input.component';
import TextArea from '../text-area/text-area.component';

import './text-field.styles.less';

/**
 * Component for showing a block with an input of different types and its label
 * @component
 * )
 */
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
        <label className='label' htmlFor={id}>
          {label}
        </label>
      )}
      {content}
    </div>
  );
});

export default TextField;
