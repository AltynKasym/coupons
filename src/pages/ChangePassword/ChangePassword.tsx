import { FC, useState } from "react";
import BlockMessage from "../../components/BlockMessage/BlockMessage";
import SideBar from "../../components/SideBar/SideBar";
import { dataProfile } from "../../components/SideBarData/blockSideBar";
import "./changePassword.scss";
import Success from "../../assets/icons/icon_done.svg";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import ChangePasswordComponent from "./component/changePasswordComponent";

const ChangePassword: FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="content">
      <Breadcrumb />
      <div className="container">
        {isComplete ? (
          <BlockMessage icon={Success} title="Пароль успешно изменен" />
        ) : (
          <div className="content__inner">
            <SideBar items={dataProfile} />
            <div className="content__page box change-password">
              <h2 className="content__title change-password__title">
                Сменить пароль
              </h2>
              <ChangePasswordComponent setIsComplete={setIsComplete} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangePassword;
