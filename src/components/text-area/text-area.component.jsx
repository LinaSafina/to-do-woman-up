import './text-area.styles.less';

const TextArea = (props) => {
  const { id, name, ...otherProps } = props;

  return (
    <textarea className='input textarea' id={id} name={name} {...otherProps} />
  );
};

export default TextArea;
