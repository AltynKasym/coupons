import "./ModalInfoContent.scss";
import ticketIcon from "../../../../assets/images/modal/modal-ticket.svg";
import clockIcon from "../../../../assets/images/modal/modal-clock.svg";
import { IProductInfo } from "../../../../types/app.interface";
import Spinner from "../../../Spinner/Spinner";

const ModalInfoContent = ({ data }: IProductInfo) => {
  const sym = /-/gi;
  return data ? (
    <>
      <p className="modal-info-content__text">{data.title}</p>
      <div className="modal-info-content__sale">
        <div className="modal-info-content__sale-index">
          {data.discount_percent}%
        </div>
        <div className="modal-info-content__sale-expiration">
          <h5 className="modal-info-content__sale-title">
            Период действия акции:
          </h5>
          <div className="modal-info-content__sale-date-wrapper">
            <p className="modal-info-content__sale-date">
              с {data.start_active_date?.replace(sym, ".")}
            </p>
            <p className="modal-info-content__sale-date">
              по {data.end_active_date?.replace(sym, ".")}
            </p>
          </div>
        </div>
      </div>
      <div className="modal-info-content__stats">
        <div className="modal-info-content__stats-item">
          <img src={ticketIcon} alt="ticket" />
          <span className="modal-info-content__stats-title">
            {data.bought_quantity} купонов купили
          </span>
        </div>
        <div className="modal-info-content__stats-item">
          <img src={clockIcon} alt="clock" />
          <span className="modal-info-content__stats-title">
            Время продаж ограничено!
          </span>
        </div>
      </div>
    </>
  ) : (
    <Spinner />
  );
};

export default ModalInfoContent;
