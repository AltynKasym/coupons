import { FC } from 'react'
import './FormInput.scss'

type FormInputProps = {
    placeholder: string;
    type: string;
    required?: any;
    errors?: any;
    register?:any;
    name?: string;
    onChange?: any;
    value?: any
}

const FormInput: FC<FormInputProps> = ({placeholder, type, required, register, name, errors, onChange, value}) => {

  // const [inputValue, setInputValue] = useState<string>('');


  return (
    <div className={`form-input-block ${errors?.message ? 'form-input-block--warn' : ''}`}>
      <input 
        placeholder={placeholder}
        type={type}
        required={required}
        onChange={onChange}
        value={value}
        // value={inputValue}
        // onChange={e => setInputValue(e.target.value)}
        
        {
          ...register ?  
            {...register(name, {
              required: "Минимум 2 символов", 
              minLength: {
                value: 2,
                message: 'Минимум 2 символов'
              }
            })} 
          : null
        }
      />
      {
        errors?.message ? <span className='form-input__err'>{errors?.message}</span> : null
      }
    </div>
  )
}

export default FormInput