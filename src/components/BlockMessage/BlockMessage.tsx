import { FC } from 'react'
import { Link } from 'react-router-dom';
import AppButton from '../UI/AppButton/AppButton';
import './BlockMessage.scss'

interface BlockMessageProps {
    title: string;
    icon: any;
    onClick?: any
}

const BlockMessage:FC<BlockMessageProps> = ({title, icon, onClick}) => {
  return (
    <div className='block-message'>
      <div className='block-message__body'>
        <img src={icon} alt="message icon" />
        <h2 className='block-message__title'>{title}</h2>
        <Link className='block-message__home-link' to={'/'}>
          <AppButton onClick={onClick}>
              На главную
          </AppButton>
        </Link>
      </div>
    </div>
  )
}

export default BlockMessage