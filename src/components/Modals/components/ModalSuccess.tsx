import successIcon from '../../../assets/images/modal/modal-succes.svg'
import "../utils/GeneralModalStyles.scss"
import ModalWrapper from "../utils/ModalWrapper/ModalWrapper";
import {FC} from "react";

interface ModalSuccess {
  setCloseModal: any
}

const ModalSuccess:FC<ModalSuccess> = ({setCloseModal}) => {
  return (
    <ModalWrapper setCloseModal={setCloseModal}>
      <div className="modal-status">
        <img src={successIcon} alt="check mark" className="modal-status__img"/>
        <h4 className="modal-status__title">
          Спасибо за покупку!
        </h4>
      </div>
    </ModalWrapper>

  );
};

export default ModalSuccess;
