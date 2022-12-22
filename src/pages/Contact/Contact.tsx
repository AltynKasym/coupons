import { FC, useEffect, useState } from "react";
import ContactComponent from "./components/ContactComponent";
import SideBar from "../../components/SideBar/SideBar";
import { dataMenu } from "../../components/SideBarData/blockSideBar";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import HttpRequests from "../../utils/httpRequests";
import { _INFO_NETWORKS_, _INFO_OUR_MAP_COORDINATES_ } from "../../data/consts";
import { IContact } from "../../types/app.interface";

const Contact: FC = () => {
  const [data, setData] = useState<IContact>({
    address: "",
    description: "",
    email: "",
    facebook: "",
    instagram: "",
    odnoklassniki: "",
    phone: "",
    phone1: "",
    phone2: "",
    phone3: "",
    vkontakte: "",
    whatsapp: "",
  });
  const [ourCoor, setOurCoor] = useState<any>({});
  const getNetworkData = async () => {
    const newData = await HttpRequests.getData(_INFO_NETWORKS_);
    const coordinates = await HttpRequests.getData(_INFO_OUR_MAP_COORDINATES_);
    coordinates.forEach((item: any) => {
      item.geolocation = item.coordinates;
    });
    setData(newData);
    setOurCoor(coordinates);
  };

  useEffect(() => {
    getNetworkData();
  }, []);
  return (
    <div className="content">
      <Breadcrumb />
      <div className="container">
        <div className="content__inner">
          <SideBar items={dataMenu} />
          <div className="content__page">
            <ContactComponent data={data} coord={ourCoor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
