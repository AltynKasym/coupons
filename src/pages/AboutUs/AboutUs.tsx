import { FC, useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import "./aboutUs.scss";
import { dataMenu } from "../../components/SideBarData/blockSideBar";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import HttpRequests from "../../utils/httpRequests";
import { _INFO_ABOUT_US_ } from "../../data/consts";

const AboutUs: FC = () => {
  const [data, setData] = useState("");

  const getAboutUsData = async () => {
    const data = await HttpRequests.getData(_INFO_ABOUT_US_);
    setData(data.description);
  };

  useEffect(() => {
    getAboutUsData();
  }, []);
  return (
    <div className="content">
      <Breadcrumb />
      <div className="container">
        <div className="content__inner">
          <SideBar items={dataMenu} />
          <div className="content__page">
            <h3 className="content__title aboutUs-title">О нас</h3>
            <p className="content__text">{data}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
