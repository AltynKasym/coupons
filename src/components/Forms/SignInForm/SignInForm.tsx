import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { _COUPONS_ME_, _USERS_CHECK_USER_, _USERS_LOGIN_ } from '../../../data/consts'
import { ILoginInfo } from '../../../types/app.interface'
import HttpRequests from '../../../utils/httpRequests'
import AppButton from '../../UI/AppButton/AppButton'
import FormInput from '../../UI/FormInput/FormInput'
import PasswordInput from '../../UI/PasswordInput/PasswordInput'
import PhoneInput from '../../UI/PhoneInput/PhoneInput'
import './SignInForm.scss'
import SignInPassword from './SignInPassword'

interface SignInFormProps {
    enterPassword: boolean;
    setEnterPassword: any;
    setUserInfo: any;
    userInfo: any;
}

const SignInForm: FC<SignInFormProps> = ({enterPassword, setEnterPassword, setUserInfo, userInfo}) => {

    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onChange'});
    const [phoneCode, setPhoneCode] = useState<ILoginInfo>();
    const [warnClass, setWarnClass] = useState<string>('');
    
    const submitNumber = async (formData: any) => {
        formData.phone = phoneCode + formData.phone;
        await HttpRequests.postData(_USERS_CHECK_USER_, formData).then(data => {
            if(data.response?.status === 404){
                setWarnClass('sign-in__form--warn')
            } 
            if(data.message?.includes('существует')) {
                setWarnClass('')
                setEnterPassword(true);
                setUserInfo((prev: ILoginInfo) => {return {...prev, phone: formData.phone}})
            }
        })
    }

    return !enterPassword ? (
    <>
        <form 
            className={`sign-in__form ${warnClass}`} 
            onSubmit={handleSubmit(submitNumber)}
        >
            <div className="sign-in__form-body">
                <PhoneInput
                    type='number' 
                    placeholder='Введите номер телефона' 
                    register={register}
                    name={'phone'}
                    errors={errors.phone}
                    setPhoneCode={setPhoneCode}
                />
                <span className='sign-in__form--warn-text'>Пользователя с таким номером нет</span>
                <AppButton>
                    Войти
                </AppButton>
            </div>
        </form>
        <Link to={'/sign-up'}>Зарегистрироваться</Link>
    </>
    )
    : 
    <SignInPassword userInfo={userInfo} setUserInfo={setUserInfo}/>
}

export default SignInForm