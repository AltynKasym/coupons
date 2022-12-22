import "./ModalAcitvated.scss";
import succesIcon from "../../../../assets/images/modal/modal-succes.svg";
import ModalWrapper from "../../utils/ModalWrapper/ModalWrapper";
import ModalInfoContent from "../../utils/ModalInfoContent/ModalInfoContent";
import { FC } from "react";

interface ModalActivatedProps {
  setCloseModal: any;
  data?: any;
}

const ModalActivated: FC<ModalActivatedProps> = ({ setCloseModal, data }) => {
  return (
    <ModalWrapper setCloseModal={setCloseModal}>
      <div className="modal-activated">
        <div className="modal-activated__head">
          <img src={succesIcon} alt="QR code" />

          <h4 className="modal-activated__title">Купон успешно активирован</h4>
        </div>

        <ModalInfoContent data={data} />
      </div>
    </ModalWrapper>
  );
};

export default ModalActivated;
