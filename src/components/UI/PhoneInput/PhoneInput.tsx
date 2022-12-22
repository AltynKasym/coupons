import { FC, useEffect, useState } from 'react'
import SelectNumberCode from '../SelectNumberCode/SelectNumberCode';
import './PhoneInput.scss'

type PhoneInputProps = {
    placeholder: string;
    type: string;
    required?: any;
    errors?: any;
    register?:any;
    name?: string;
    setPhoneCode: any;
}

const PhoneInput: FC<PhoneInputProps> = ({placeholder, type, required, register, name, errors, setPhoneCode}) => {

  const [numberCode, setNumberCode] = useState();
  
  useEffect(() => {
    setPhoneCode(numberCode)
  }, [numberCode])

  return (
    <div className={`form-input-block phone-input ${errors?.message ? 'form-input-block--warn' : ''}`}>
      <SelectNumberCode setNumberCode={setNumberCode}/>
      <input 
        placeholder={placeholder}
        type={type}
        required={required}
        {...register ?  
          {...register(name, {
            required: "Введите действительный номер", 
            minLength: {
              value: 8,
              message: 'Минимум 8 символов'
            }
        })} 
        : null}
      />
      {
        errors?.message ? <span className='form-input__err'>{errors?.message}</span> : null
      }
    </div>
  )
}

export default PhoneInput