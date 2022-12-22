import { FC, useState } from 'react'
import BlockMessage from '../../BlockMessage/BlockMessage'
import AppButton from '../../UI/AppButton/AppButton'
import FormInput from '../../UI/FormInput/FormInput'
import './ConfirmForm.scss'
import iconDone from '../../../assets/icons/icon_done.svg'
import ResendMessage from '../ResendMessage/ResendMessage'
import { ILoginUser } from '../../../types/app.interface'
import { useForm } from 'react-hook-form'
import HttpRequests from '../../../utils/httpRequests'
import { _USERS_CHECK_USER_, _USERS_LOGIN_, _USERS_LOGIN_CONFIRM_ } from '../../../data/consts'
import { useUserAuth } from '../../../hooks/useUserAuth'

interface ConfirmFormProps {
    userData: ILoginUser | undefined;
    setSendUserData: any;
}

const ConfirmForm: FC<ConfirmFormProps> = ({userData, setSendUserData}) => {
    const [numberConfirmation, setNumberConfirmation] = useState<boolean>(false);
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onChange'});
    const [signInData, setSignInData] = useState<any>();
    const [errMess, setErrMess] = useState<string>('');
    const {comeIn} = useUserAuth();

    const sumbitCode = async (formData: any) => {
        const newObj = {...userData, confirmation_code: formData.code}
        console.log(newObj, userData);
        
        await HttpRequests.postData(_USERS_LOGIN_CONFIRM_, newObj).then(data => {
            console.log(data);
            if(data.response?.data?.message.includes("Неверный")){
                setErrMess(data.response.data?.message)
            } 
            if(data === ''){
                console.log(userData);
                
                const loginObj = {
                    phone: userData?.phone,
                    password: userData?.password
                }
                setErrMess('')
                setNumberConfirmation(true);
                HttpRequests.postData(_USERS_LOGIN_, loginObj).then(data => {
                    setSignInData(data)
                })
            }
            
        })
    }

    return !numberConfirmation ? (
        <div className='confirm-form'>
            <h2 className='confirm-form__title'>Подтверждение номера телефона</h2>
            <div className='confirm-form__number-block'>
                <span className='confirm-form__number'>{userData?.phone}</span>
                <span 
                    className='confirm-form__number-ask'
                    onClick={() => setSendUserData(false)}
                >Неверный номер телефона?</span>
            </div>
            <form className='confirm-form__form' onSubmit={handleSubmit(sumbitCode)}>
                <div className='confirm-form__body'>
                    <FormInput 
                        type='text' 
                        placeholder='Введите код подтверждения' 
                        register={register}
                        name='code'
                        errors={errors.code}
                    />
                    {
                        errMess.length ? <span className='confirm-form__err-mess'>{errMess}</span> : null
                    }
                    <AppButton /* onClick={() => setNumberConfirmation(true)} */>Подтвердить</AppButton>
                </div>
            </form>
            
            <ResendMessage />
        </div>
    ) 
    : 
    (
        <BlockMessage onClick={signInData ? () => comeIn(signInData, true) : null} title='Телефон подтвержден' icon={iconDone} />
    )
}

export default ConfirmForm