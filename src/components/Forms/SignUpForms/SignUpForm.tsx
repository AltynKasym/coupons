import { FC, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { _USERS_AUTH_ } from '../../../data/consts'
import { ILoginUser } from '../../../types/app.interface'
import HttpRequests from '../../../utils/httpRequests'
import { signUpInputs } from '../../../utils/temporaryData/signInputs'
import AppButton from '../../UI/AppButton/AppButton'
import FormInput from '../../UI/FormInput/FormInput'
import PasswordInput from '../../UI/PasswordInput/PasswordInput'
import PhoneInput from '../../UI/PhoneInput/PhoneInput'
import './SignUpForm.scss'

interface SignUpFormProps {
    continueSignUp: any;
    setUserData: any;
}

const SignUpForm: FC<SignUpFormProps> = ({continueSignUp, setUserData}) => {

    const {register, handleSubmit, formState: {errors}, watch} = useForm<ILoginUser>({mode: 'onBlur'});
    const [phoneCode, setPhoneCode] = useState();
    const password = useRef<any>(null);
    password.current = watch('password', '');

    const userObjSubmit: SubmitHandler<ILoginUser> = async (formData: any) => {
        formData.phone = phoneCode + formData.phone

            await HttpRequests.postData(_USERS_AUTH_, formData).then(data => {
                console.log(data);
                
                const responseData = data?.response?.data?.message;
                
                if(responseData?.includes('Попробуйте позже')){
                    console.log('Send data');
                    setUserData(formData);
                    continueSignUp(true);
                } else{
                    console.log(responseData);
                }
            })
    }

    return (
        <form className='sign-up__from' onSubmit={ handleSubmit(userObjSubmit) }>
            <div className="sign-up__form-body">
                {
                    signUpInputs.map(obj => {
                        if(obj.type === 'text') return (
                            <FormInput 
                                type={obj.type}
                                placeholder={obj.placeholder} 
                                register={register}
                                name={obj.name}
                                errors={errors[obj.name as keyof ILoginUser]}
                                key={obj.name}
                            />
                        )
                        if(obj.type === 'number') return (
                            <PhoneInput
                                type={obj.type}
                                placeholder={obj.placeholder} 
                                register={register}
                                name={obj.name}
                                errors={errors[obj.name as keyof ILoginUser]}
                                key={obj.name}
                                setPhoneCode={setPhoneCode}
                            />
                        )
                        if(obj.type === 'password') {
                            return <PasswordInput 
                                register={register} 
                                name={obj.name} 
                                type={obj.type}
                                placeholder={obj.placeholder}
                                errors={errors[obj.name as keyof ILoginUser]}
                                key={obj.name}
                                password={obj.name === 'password' ? undefined : password.current}
                            />
                        }
                    })
                }
                <AppButton /* onClick={} */>
                    Далее
                </AppButton>
            </div>
        </form>
    )
}

export default SignUpForm