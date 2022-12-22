import { FC, useState } from "react";
import BlockMessage from "../../components/BlockMessage/BlockMessage";
import ConfirmForm from "../../components/Forms/ConfirmForm/ConfirmForm";
import SignUpForm from "../../components/Forms/SignUpForms/SignUpForm";
import ModalWrapper from "../../components/Modals/utils/ModalWrapper/ModalWrapper";
import iconDone from '../../assets/icons/icon_done.svg'
import "./SignUp.scss";
import { ILoginUser } from "../../types/app.interface";

const SignUp: FC = () => {
  const [sendUserData, setSendUserData] = useState<boolean>(false);
  const [userData, setUserData] = useState<ILoginUser>();

  console.log(userData);
  

  return (
    <div className="sign-up">
      <div className="sign-up__body">
        {!sendUserData ? (
          <div className="sign-up__form-block">
            <h2 className="sign-up__title">Регистрация</h2>
            <SignUpForm continueSignUp={setSendUserData} setUserData={setUserData} />
          </div>
        ) : (
          <ConfirmForm userData={userData} setSendUserData={setSendUserData} />

          // <ModalWrapper setCloseModal={setUserData} isCloseBtn={true}>
          //   <BlockMessage title='Ваши данные на модерации' icon={iconDone}/>
          // </ModalWrapper>
        )}
      </div>
    </div>
  );
};

export default SignUp;
