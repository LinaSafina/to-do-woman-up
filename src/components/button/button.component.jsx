import './button.styles.less';

const Button = (props) => {
  const { text, className = '', disabled } = props;

  const btnClasses = `button ${className ? className : ''} ${
    disabled ? 'disabled' : ''
  }`;

  return <button className={btnClasses}>{text}</button>;
};

export default Button;
