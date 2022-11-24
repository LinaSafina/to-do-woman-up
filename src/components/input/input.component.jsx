import React from 'react';

import './input.styles.less';

const Input = React.forwardRef((props, ref) => {
  const { type, id, name, ...otherProps } = props;

  return (
    <input
      className='text-field__input'
      type={type}
      id={id}
      name={name}
      {...otherProps}
      ref={ref}
    />
  );
});

export default Input;
