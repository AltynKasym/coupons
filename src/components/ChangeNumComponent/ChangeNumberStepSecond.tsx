import { FC } from "react";
import AppButton from "../UI/AppButton/AppButton";
import FormInput from "../UI/FormInput/FormInput";

interface ChangeNumberStepSecondProps {
    setCompleteChange: any 
}

const ChangeNumberStepSecond:FC<ChangeNumberStepSecondProps> = ({setCompleteChange}) => {
  return (
    <div className="">
      <h3>+996 555 55 55 55</h3>
      <div className="top-link">
        <a href="#" className="change-number__links content__text">
          Неверный номер телефона?
        </a>
      </div>
      <FormInput placeholder="Введите код подтверждения" type="text" />
      <AppButton onClick={() => setCompleteChange(true)}>Сменить номер</AppButton>
      <div className="bottom-link">
        <a href="#" className="change-number__links content__text">
          Не пришло SMS сообщение?
        </a>
      </div>
      <AppButton disabled>Отправить снова через 0:59</AppButton>
    </div>
  );
};

export default ChangeNumberStepSecond;
