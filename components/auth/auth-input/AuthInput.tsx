import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import style from './auth-input.module.css';

type AuthInputProps = {
  name: string;
  // eslint-disable-next-line no-unused-vars
  isValid: boolean | null;
  error: string | null;
};

const AuthInput = ({
  name,
  isValid,
  error,
  ...props
}: AuthInputProps & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return (
    <fieldset className={`${style.field} ${style.modalUpdate} ${style.required} ${isValid ? style.valid : isValid === false ? style.invalid : ''}`}>
      <input className="hidden" id={`${props.id}-prevent`} data-hidden type={props.type} name={`${name}-prevent`} data-empty />
      <input
        {...props}
        className={`${style.textInput} ${style.modalUpdate}`}
        required
        name={name}
        data-empty={props.value?.toString().length === 0 ? true : false}
      />
      <label htmlFor={props.id} className={`${style.textInputLabel} ${style.modalUpdate}`}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <div className={style.errorMessage}>{error}</div>
    </fieldset>
  );
};

export default AuthInput;
