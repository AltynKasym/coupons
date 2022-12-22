import { FC, useState } from 'react'
import SignInForm from '../../components/Forms/SignInForm/SignInForm'
import './SignIn.scss'

const SignIn: FC = () => {

  const [enterPassword, setEnterPassword] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState({phone: '',password: ''})
  console.log(userInfo)

  return (
    <div className='sign-in'>
      <div className='sign-in__body'>
        <h2 className='sign-in__title'>Войдите, чтобы продолжить</h2>
        {
          !enterPassword ? null : <span className='sign-in__number'>{userInfo.phone}</span>
        }
        <div className='sign-in__form-block'>
          <SignInForm 
            enterPassword={enterPassword} 
            setEnterPassword={setEnterPassword} 
            setUserInfo={setUserInfo} 
            userInfo={userInfo} 
          />
        </div>
      </div>
    </div>
  )
}

export default SignIn