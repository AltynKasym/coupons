import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { localStorageKeys, _USERS_LOGIN_ } from '../../../data/consts';
import { useAppDispatch } from '../../../hooks/reduxHook';
import { saveUser } from '../../../store/slices/user';
import { ILoginInfo } from '../../../types/app.interface';
import HttpRequests from '../../../utils/httpRequests';
import AppButton from '../../UI/AppButton/AppButton';
import PasswordInput from '../../UI/PasswordInput/PasswordInput';

type Props = {
    userInfo: any;
    setUserInfo: any;
}

const SignInPassword: FC<Props> = ({userInfo, setUserInfo}) => {

    const {handleSubmit, register, formState: {errors}} = useForm();
    const [warnClass, setWarnClass] = useState<string>('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const authUser = async (formData: any) => {
        setUserInfo((prev: ILoginInfo) => {return {...prev, password: formData.password}});
        const currentData = {...userInfo, password: formData.password};
        
        await HttpRequests.postData(_USERS_LOGIN_, currentData).then(data => {
            console.log(data);
            if(!data.access){
                if(data.response.data?.detail || data.response.data?.password) {
                    setWarnClass('sign-in__form--warn')
                };
            } else{
                dispatch(saveUser(data));
                localStorage.setItem(localStorageKeys.currentUserToken, JSON.stringify(data))
                navigate('/');
            }
        })
    }

    return (
    <>
        <form className={`sign-in__form ${warnClass}`} onSubmit={handleSubmit(authUser)}>
            <div className="sign-in__form-body">
                <PasswordInput
                    register={register} 
                    name={'password'} 
                    type={'password'}
                    placeholder={'Введите пароль'}
                    errors={errors.password}
                />
                <span className='sign-in__form--warn-text'>Неверный пароль.</span>
                <AppButton>
                    Войти
                </AppButton>
            </div>
        </form>
        <Link to={'/recovery-password'}>Не помню пароль</Link>
    </>
    )
}

export default SignInPassword