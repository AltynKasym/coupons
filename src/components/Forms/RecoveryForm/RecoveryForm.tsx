import { FC } from 'react'
import { Link } from 'react-router-dom'
import AppButton from '../../UI/AppButton/AppButton'
import FormInput from '../../UI/FormInput/FormInput'
import ResendMessage from '../ResendMessage/ResendMessage'
import './RecoveryForm.scss'

interface RecoveryFormProps {
    messageSend: boolean;
    setMessageSend: any;
    setEditPassword: any
}

const RecoveryForm: FC<RecoveryFormProps> = ({messageSend, setMessageSend, setEditPassword}) => {
  return !messageSend ? (
    <form className='recovery-password__form'>
        <div className="recovery-password__form-body">
            <FormInput type='text' placeholder='Введите номер телефона' />
            <AppButton 
                onClick={(e: any) => {
                    e.preventDefault();
                    setMessageSend(true)
                }}>
                Войти
            </AppButton>
        </div>
    </form>
  )
  : 
  (
    <form className='recovery-password__form'>
        <div className="recovery-password__form-body">
            <FormInput type='text' placeholder='Введите номер телефона' />
            <FormInput type='text' placeholder='Введите код подтверждения' />
            <AppButton 
                onClick={(e: any) => {
                    e.preventDefault();
                    setEditPassword(true);
                }}
            >
                Далее
            </AppButton>
            <ResendMessage />
        </div>
    </form>
  )
}

export default RecoveryForm