import { FC } from 'react'
import './AppButton.scss'

interface AppButtonProps {
    children: any;
    disabled?: boolean;
    onClick?: any;
}

const AppButton: FC<AppButtonProps> = ({children, disabled, onClick}) => {
  return (
    <div className='app-button'>
        <button disabled={disabled} onClick={onClick}>
            {children}
        </button>
    </div>
  )
}

export default AppButton