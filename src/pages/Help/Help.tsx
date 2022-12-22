import { FC, useEffect, useState } from "react";
import Accordion from "../../components/Accordion/Accordion";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import SideBar from "../../components/SideBar/SideBar";
import { dataMenu } from "../../components/SideBarData/blockSideBar";
import { _INFO_FAQ_ } from "../../data/consts";
import { IAccordion } from "../../types/app.interface";
import HttpRequests from "../../utils/httpRequests";
import "./help.scss";

const Help: FC = () => {
  const [data, setData] = useState<IAccordion>([]);

  const getFaqData = async () => {
    const newData = await HttpRequests.getData(_INFO_FAQ_);
    setData(newData);
  };

  useEffect(() => {
    getFaqData();
  }, []);
  return (
    <div className="content">
      <Breadcrumb />
      <div className="container">
        <div className="content__inner">
          <SideBar items={dataMenu} />
          <div className="content__page">
            <h2 className="content__title">Помощь</h2>
            <Accordion items={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
