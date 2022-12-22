import { FC, useState } from 'react'
import BlockMessage from '../../components/BlockMessage/BlockMessage';
import NewPassword from '../../components/Forms/RecoveryForm/NewPassword';
import RecoveryForm from '../../components/Forms/RecoveryForm/RecoveryForm'
import iconDone from '../../assets/icons/icon_done.svg'
import './RecoveryPassword.scss'

const RecoveryPassword:FC = () => {

  const [messageSend, setMessageSend] = useState<boolean>(false);
  const [edinPassword, setEditPassword] = useState<boolean>(false);
  const [changePassword, setChangePassword] = useState<boolean>(false);

    return  (
        <div className='recovery-password'>
            {
                !changePassword ? (
                    <div className='recovery-password__body'>
                        <h2 className='recovery-password__title'>Восстановление пароля</h2>
                        <span className='recovery-password__subtitle'>
                            Введите номер телефона чтобы отправить код подтверждения
                        </span>
                        <div className='recovery-password__form-block'>
                            {
                                !edinPassword ? 
                                    <RecoveryForm 
                                        messageSend={messageSend} 
                                        setMessageSend={setMessageSend} 
                                        setEditPassword={setEditPassword} 
                                    />
                                :
                                    <NewPassword setChangePassword={setChangePassword} /> 
                            }
                        </div>
                    </div>
                )
                :
                (
                  <BlockMessage title='Пароль успешно изменен' icon={iconDone} /> 
                )
            }
        </div>
    )
}

export default RecoveryPassword