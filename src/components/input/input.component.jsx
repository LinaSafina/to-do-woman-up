import './input.styles.less';

const Input = (props) => {
  const { type, id, name, ...otherProps } = props;

  return (
    <input
      className='text-field__input'
      type={type}
      id={id}
      name={name}
      {...otherProps}
    />
  );
};

export default Input;
