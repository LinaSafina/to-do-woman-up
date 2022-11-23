import './text-field.styles.less';

const TextField = (props) => {
  const { type, id, name, label } = props;

  return (
    <div className='text-field'>
      {' '}
      <label className='text-field__label' htmlFor={id}>
        {label}
      </label>
      <input className='text-field__input' type={type} id={id} name={name} />
    </div>
  );
};

export default TextField;
