import './ModalWrapper.scss'
import closeIcon from '../../../../assets/images/modal/modal-close.svg'
import {FC, useEffect} from "react";

interface ModalWrapperProps {
  children: any,
  setCloseModal: any;
  isCloseBtn?: any;
}

const ModalWrapper: FC<ModalWrapperProps> = ({children, setCloseModal, isCloseBtn}) => {

  useEffect(() => {
    document.body.classList.add('modal_active-js')
    return () => {
      document.body.classList.remove('modal_active-js')
    }
  }, [])

  const onClose = () => {
    setCloseModal(false)
  }

  return (
    <div className="modal-wrapper">
      <div className="modal-wrapper__inner">
        <div className="modal-wrapper__window">
          {
            !isCloseBtn 
            ? 
              <button className="modal-wrapper__close-btn" onClick={onClose}>
                <img src={closeIcon} alt="X" />
              </button>
            :
              null
          }
          {
            children
          }
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
