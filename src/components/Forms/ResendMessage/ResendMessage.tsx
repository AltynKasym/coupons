import { FC } from 'react'
import AppButton from '../../UI/AppButton/AppButton'
import './ResentMessage.scss'

interface ResendMessageProps {}

const ResendMessage: FC<ResendMessageProps> = ({}) => {
  return (
    <div className='resend-message'>
        <span className='resend-message__message-ask'>Не пришло SMS сообщение?</span>
        <AppButton disabled={true}>Отправить снова через 0:59</AppButton>
    </div>
  )
}

export default ResendMessage