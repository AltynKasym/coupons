import { FC } from 'react'
import BlockMessage from '../../BlockMessage/BlockMessage'
import AppButton from '../../UI/AppButton/AppButton'
import PasswordInput from '../../UI/PasswordInput/PasswordInput'

interface NewPasswordProps {
    setChangePassword: any;
}

const NewPassword: FC<NewPasswordProps> = ({setChangePassword}) => {

  return (
    <div className='new-password'>
        <h2 className='Восстановление пароля'></h2>
        <form className='new-password__form'>
            <PasswordInput type='password' placeholder='Введите новый пароль' />
            <PasswordInput type='password' placeholder='Повторите новый пароль' />
            <AppButton onClick={(e: any) => {
                e.preventDefault();
                setChangePassword(true)
            }}>
                Далее
            </AppButton>
        </form>
    </div>
  )
}

export default NewPassword