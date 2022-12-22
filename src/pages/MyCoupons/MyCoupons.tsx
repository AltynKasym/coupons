import { FC } from "react";
import SideBar from "../../components/SideBar/SideBar";
import { dataProfile } from "../../components/SideBarData/blockSideBar";
import "./myCoupons.scss";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import MyCouponsComponent from "./component/MyCouponsComponent";

const MyCoupons: FC = () => {
  return (
    <div className="content">
      <Breadcrumb />
      <div className="container">
        <div className="content__inner">
          <SideBar items={dataProfile} />
          <div className="content__page">
            <h2 className="coupons__title">Мои купоны</h2>
            <div className="line line-my-coupons"></div>
            <MyCouponsComponent/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCoupons;
