import "../utils/GeneralModalStyles.scss"
import errorIcon from '../../../assets/images/modal/modal-error.svg'
import ModalWrapper from "../utils/ModalWrapper/ModalWrapper";
import {FC} from "react";

interface ModalErrorProps {
  setCloseModal: any
}

const ModalError:FC<ModalErrorProps> = ({setCloseModal}) => {
  return (
    <ModalWrapper setCloseModal={setCloseModal}>
      <div className="modal-status">
        <img src={errorIcon} alt="check mark" className="modal-status__img"/>
        <h4 className="modal-status__title">
          Ошибка. Повторите еще раз.
        </h4>
      </div>
    </ModalWrapper>
  );
};

export default ModalError;
