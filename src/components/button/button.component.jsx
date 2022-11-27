import './button.styles.less';

/**
 * Component for showing a button
 * @component
 * )
 */
const Button = (props) => {
  const { text, className = '', disabled } = props;

  const btnClasses = `button ${className ? className : ''} ${
    disabled ? 'disabled' : ''
  }`;

  return <button className={btnClasses}>{text}</button>;
};

export default Button;
