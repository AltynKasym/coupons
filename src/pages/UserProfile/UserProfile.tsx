import { FC } from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import SideBar from "../../components/SideBar/SideBar";
import { dataProfile } from "../../components/SideBarData/blockSideBar";
import UserForm from "./component/user-form";
import "./profile.scss";

const UserProfile: FC = () => {

  return (
    <div className="content">
      <Breadcrumb />
      <div className="container">
        <div className="content__inner">
          <SideBar items={dataProfile} />
          <div className="content__page box profile">
            <h2 className="content__title profile__title">Профиль</h2>
            <div className="content__box">
              <UserForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
