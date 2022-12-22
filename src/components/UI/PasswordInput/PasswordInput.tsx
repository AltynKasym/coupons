import { FC, useState } from 'react'
import PasswordIcon from './PasswordIcon';

type PasswordInputProps = {
    placeholder: string;
    type: string;
    name?: string;
    register?: any;
    errors?: any;
    password?: any;
}

const PasswordInput: FC<PasswordInputProps> = ({register, name, placeholder, errors, password}) => {

  // const [inputValue, setInputValue] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  return (
        <div className={`form-input-block ${errors?.message ? 'form-input-block--warn' : ''}`}>
        <input 
            placeholder={placeholder}
            type={passwordVisible ? 'text' : 'password'}
            {...register ? {
              ...password === undefined
              ? 
              {...register(name, {
                  required: "Минимум 6 символов", 
                  minLength: {
                    value: 6,
                    message: "Минимум 6 символов"
                  }
                })}
              :
              {...register(name, {
                validate: (value: any) => 
                  value === password || "Пароли не совпадают"
              })}
            }
            :
            null
            }
        />
        <PasswordIcon passwordVisible={passwordVisible} setPasswordVisible={setPasswordVisible}/>
        {
          errors?.message ? <span className='form-input__err'>{errors?.message}</span> : null
        }
    </div>
  )
}

export default PasswordInput