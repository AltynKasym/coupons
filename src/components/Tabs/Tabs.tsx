import { FC, useState } from "react";
import { ITabsDetail } from "../../types/app.interface";
import "./Tabs.scss";

interface TabsProps {
  detailTypes: any;
  setDetailTypes: any;
}

const Tabs: FC<TabsProps> = ({ detailTypes, setDetailTypes }) => {
  const selectDescribe = (e: any) => {
    const clickTab = e.target.dataset.id;

    setDetailTypes((prevState: ITabsDetail[]) =>
      prevState.map((obj) => {
        if (obj.id === +clickTab) {
          return { ...obj, active: true };
        } else {
          return { ...obj, active: false };
        }
      })
    );
  };

  return (
    <div className="tabs">
      {detailTypes.map((obj: ITabsDetail) => (
        <button
          className={`tabs-item ${obj.active ? "tabs-item--active" : ""}`}
          data-id={obj.id}
          onClick={(e) => selectDescribe(e)}
          key={obj.id}
        >
          {obj.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
