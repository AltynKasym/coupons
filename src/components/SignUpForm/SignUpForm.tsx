import { FC } from 'react'
import AppButton from '../UI/AppButton/AppButton'
import FormInput from '../UI/FormInput/FormInput'
import './SignUpForm.scss'

type SignUpFormProps = {}

const SignUpForm: FC<SignUpFormProps> = () => {

    return (
        <form className='sign-up__from'>
            <div className="sign-up__form-body">
                <FormInput type='text' placeholder={'Имя'}/>
                <FormInput type='text' placeholder={'Фамилия'}/>
                <FormInput type='text' placeholder={'Номер телефона'}/>
                <FormInput type='password' placeholder={'Придумайте пароль'}/>
                <FormInput type='password' placeholder={'Повторите пароль'}/>

                <AppButton >
                    Далее
                </AppButton>
            </div>
        </form>
    )
}

export default SignUpForm