import React, { useEffect, useState, useContext } from "react";
import "./branchAddresses.scss";
import HttpRequests from "../../../../utils/httpRequests";
import { _INFO_OUR_MAP_COORDINATES_ } from "../../../../data/consts";
import { IProductInfo } from "../../../../types/app.interface";
import { Context } from "../../context/Context";

type Props = {};

export default function BranchAddresses({ data }: IProductInfo) {
  const [address, setAddress]: any = useState([]);
  let [initialState, isOpenWindow, setIsOpenWindow] = useContext(Context);

  const getAddress = () => {
    const newData = data;
    setAddress(newData);
  };

  useEffect(() => {
    getAddress();
  }, []);

  function showMarkerInfo(id: number) {
    initialState[id] = !initialState[id];
    setIsOpenWindow(initialState);
  }

  return (
    <div className="addresses">
      {address?.map((item: any, index: any) => {
        return (
          <div
            className={
              isOpenWindow[index]
                ? "addresses__item addresses__item-accent"
                : "addresses__item "
            }
            key={index}
            onClick={() => {
              showMarkerInfo(index);
            }}
          >
            <p className="addresses__item-address">{item.address}</p>
            <p className="addresses__item-address">{item.phone}</p>
          </div>
        );
      })}
    </div>
  );
}
