import React from 'react';

import './input.styles.less';

const Input = (props) => {
  const { type, id, name, ...otherProps } = props;

  return (
    <input className='input' type={type} id={id} name={name} {...otherProps} />
  );
};

export default Input;
