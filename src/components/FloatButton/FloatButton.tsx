import { FC } from 'react'
import './FloatButton.scss'
import iconWhatsapp from '../../assets/icons/float_icon_whatsapp.svg';

interface FloatButtonProps {}

const FloatButton: FC<FloatButtonProps> = () => {
  return (
    <div className='float-button'>
        <a href="https://www.whatsapp.com/" target='_blank'>
            <img src={iconWhatsapp} alt="WhatsApp" />
        </a>
    </div>
  )
}

export default FloatButton