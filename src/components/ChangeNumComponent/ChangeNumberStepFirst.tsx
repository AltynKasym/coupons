import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { _USERS_CHANGE_OLD_PHONE_ } from '../../data/consts'
import { useAppSelector } from '../../hooks/reduxHook'
import HttpRequests from '../../utils/httpRequests'
import AppButton from '../UI/AppButton/AppButton'
import FormInput from '../UI/FormInput/FormInput'
import PhoneInput from '../UI/PhoneInput/PhoneInput'

interface ChangeNumberStepFirstProps  {
    setNextstep: any
}

const ChangeNumberStepFirst: FC<ChangeNumberStepFirstProps> = ({ setNextstep }) => {

  const selector = useAppSelector;
  const user = selector(state => state.user.user)

  const [phoneCode, setPhoneCode] = useState();
  const {register, formState: {errors, isValid}, handleSubmit} = useForm({mode: 'onChange'})
  const [responseMessage, setResponseMessage] = useState('');

  const numberSubmit = async (formData: any) => {
    formData.phone = phoneCode + formData.phone;
    await HttpRequests.postData(_USERS_CHANGE_OLD_PHONE_, formData, user?.access).then(data => {
      console.log(data);
      setResponseMessage(data.response?.data?.message)
    })
  }

  return (
    <form onSubmit={handleSubmit(numberSubmit)}>
         <p className="description">
                Введите новый номер телефона чтобы отправить код подтверждения
              </p>
              <PhoneInput 
                setPhoneCode={setPhoneCode} 
                type="number" 
                placeholder="Новый номер телефона" 
                name='phone'
                register={register}
                errors={errors.phone}
              />
              { responseMessage.length ?
                <span className='change-number__errMess'>{responseMessage}</span>
                :
                null
              }
              <AppButton disabled={isValid ? false : true} >Далее</AppButton>
    </form>
  )
}

export default ChangeNumberStepFirst