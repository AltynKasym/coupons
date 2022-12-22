import { type } from 'os';
import {FC, useRef} from 'react'
import { useForm } from 'react-hook-form';
import AppButton from '../../../components/UI/AppButton/AppButton'
import FormInput from '../../../components/UI/FormInput/FormInput';
import PasswordInput from '../../../components/UI/PasswordInput/PasswordInput';
import { _USERS_CHANGE_PASSWORD_PUT_ } from '../../../data/consts';
import { useAppSelector } from '../../../hooks/reduxHook';
import { IChangePassword } from '../../../types/app.interface';
import HttpRequests from '../../../utils/httpRequests';

type ChangePasswordComponentProps = {
  setIsComplete: any
}

const ChangePasswordComponent : FC<ChangePasswordComponentProps> = ({setIsComplete}) => {
  const {handleSubmit, register, formState: {errors}, watch} = useForm<IChangePassword>();
  const selector = useAppSelector;
  const user = selector((state) => state.user.user);
  const password = useRef<any>(null);
  password.current = watch('new_password', '');

  const changePasswordFunc = async (data: any) => {
    const changeData = await HttpRequests.put(_USERS_CHANGE_PASSWORD_PUT_, data, user?.access);
    console.log(changeData, "changeData");
    if(changeData.status === "success") {
      setIsComplete(true)
    }
  };
  return (
      <div className="content__box">
        <form onSubmit={handleSubmit(changePasswordFunc)}>
          <FormInput
            placeholder="Текущий пароль"
            type="text"
            name="old_password"
            register={register}
            errors={errors.old_password}
          />
          <PasswordInput
            placeholder="Придумайте пароль"
            type="password"
            name="new_password"
            register={register}
            errors={errors.new_password}
          />
          <PasswordInput
            placeholder="Повторите пароль"
            type="password"
            name="new_password_repeat"
            register={register}
            errors={errors.new_password_repeat}
            password={password.current}
          />
          <AppButton>
            Сохранить
          </AppButton>
        </form>
      </div>
  )
}

export default ChangePasswordComponent