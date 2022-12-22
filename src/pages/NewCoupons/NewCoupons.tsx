import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import NewCouponsContainer from "./component/NewCouponsContainer";
import "./NewCoupons.scss";

const NewCoupons = () => {
  return (
      <div className="new-coupons">
          <Breadcrumb />
          <div className="container">
            <div className="new-coupons__title">Новые купоны</div>
            <NewCouponsContainer />
          </div>
      </div>
  );
};

export default NewCoupons;
