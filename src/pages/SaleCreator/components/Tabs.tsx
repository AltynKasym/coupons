import React, { FC, useState } from "react";
import "./Tabs.scss";

type tabsObj = {
    id:number;
    title:string;
}

type Props = {
    tabsObj:tabsObj[];
    active:number;
    setActive:any;
}

 const Tabs: FC<Props> = ({ tabsObj,active,setActive }) => {
  return (
    <div className="tabs">
        {tabsObj.map((el,index) => {
            return <button key={index} className={el.id === active ? 'tabs-item active' : 'tabs-item'} onClick={() => {
                setActive(el.id)
            }}> {el.title}</button>
        })}
    </div>
  );
}

export default Tabs;