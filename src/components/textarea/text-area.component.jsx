import './text-area.styles.less';

const TextArea = (props) => {
  const { id, name, ...otherProps } = props;

  return (
    <textarea
      className='text-field__input'
      id={id}
      name={name}
      {...otherProps}
    />
  );
};

export default TextArea;
