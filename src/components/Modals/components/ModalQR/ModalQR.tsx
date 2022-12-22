import "./ModalQR.scss";
import qrCodeIcon from "../../../../assets/images/modal/modal-qr.png";
import ModalWrapper from "../../utils/ModalWrapper/ModalWrapper";
import ModalInfoContent from "../../utils/ModalInfoContent/ModalInfoContent";
import { FC } from "react";
import { IProductInfo } from "../../../../types/app.interface";

interface ModalQRProps {
  setCloseModal: any;
  data? : any;
}

const ModalQR: FC<ModalQRProps> = ({ setCloseModal, data }) => {
  console.log("dataFromQR", data);
  return (
    <ModalWrapper setCloseModal={setCloseModal}>
      <div className="modal-qr">
        <div className="modal-qr__img-block">
          <img src={qrCodeIcon} alt="QR code" />
        </div>
        <ModalInfoContent data={data} />
      </div>
    </ModalWrapper>
  );
};

export default ModalQR;
