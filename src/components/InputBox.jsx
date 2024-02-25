import styles from './InputBox.module.css';

function InputBox({
  kind,
  type = '',
  name = '',
  required = null,
  label = '',
  value = '',
  onChange,
}) {
  return (
    <div className={styles.inputBox}>
      <label htmlFor={name}>{label}</label>
      {kind === 'input' && (
        <input
          type={type}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
      {kind === 'textarea' && (
        <textarea
          name={name}
          required={required}
          value={value}
          onChange={onChange}
        ></textarea>
      )}
    </div>
  );
}

export default InputBox;
