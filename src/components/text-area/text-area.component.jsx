import './text-area.styles.less';

/**
 * Component for showing a textarea
 * @component
 * )
 */
const TextArea = (props) => {
  const { id, name, ...otherProps } = props;

  return (
    <textarea className='input textarea' id={id} name={name} {...otherProps} />
  );
};

export default TextArea;
