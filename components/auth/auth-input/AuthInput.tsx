import style from './auth-input.module.css'

type AuthInputProps = {
  id: string
  type: string
  name: string
  value: string
  // eslint-disable-next-line no-unused-vars
  validate: (input: HTMLInputElement['value']) => void
  isValid: boolean | null
  error: string
  autoComplete?: string
}

const AuthInput = ({ id, type, name, value, validate, isValid, error, autoComplete }: AuthInputProps) => {
  return (
    <fieldset className={`${style.field} ${style.modalUpdate} ${style.required} ${isValid ? style.valid : isValid === false ? style.invalid : ''}`}>
      <input className='hidden' id={`${id}-prevent`} data-hidden type={type} name={`${name}-prevent`} data-empty />
      <input
        id={id}
        className={`${style.textInput} ${style.modalUpdate}`}
        type={type}
        autoComplete={autoComplete}
        required
        name={name}
        data-empty={value.length <= 0 ? true : false}
        value={value}
        onChange={(e) => {
          validate(e.target.value)
        }}
      />
      <label htmlFor={id} className={`${style.textInputLabel} ${style.modalUpdate}`}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      {isValid === false && <div className="mt-1 pl-4 text-[12px] text-[#fb133a]">{error}</div>}
    </fieldset>
  )
}

export default AuthInput
