import { FC, useState } from "react";
import BlockMessage from "../../components/BlockMessage/BlockMessage";
import ChangeNumberStepFirst from "../../components/ChangeNumComponent/ChangeNumberStepFirst";
import ChangeNumberStepSecond from "../../components/ChangeNumComponent/ChangeNumberStepSecond";
import SideBar from "../../components/SideBar/SideBar";
import { dataProfile } from "../../components/SideBarData/blockSideBar";
import Success from "../../assets/icons/icon_done.svg";
import "./change-number.scss";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";

const ChangeNumber: FC = () => {
  const [nextStep, setNextStep] = useState(false);
  const [completeChange, setCompleteChange] = useState(false);

  return (
    <div className="content">
      <Breadcrumb/>
      <div className="container">
        {completeChange ? (
          <BlockMessage icon={Success} title="Номер успешно изменен" />
        ) : (
          <div className="content__inner">
            <SideBar items={dataProfile} />
            <div className="content__page box change-number">
              <h2 className="content__title change-number__title">
                Смена номера
              </h2>
              <div className="content__box">
                {nextStep ? (
                  <ChangeNumberStepSecond
                    setCompleteChange={setCompleteChange}
                  />
                ) : (
                  <ChangeNumberStepFirst setNextstep={setNextStep} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangeNumber;
