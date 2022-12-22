import React, { FC } from "react";
import { IProductInfo } from "../../../../types/app.interface";
import "./productPeriod.scss";

type Props = {};

const sym = /-/gi;

const ProductPeriod: FC<IProductInfo> = ({ data }) => {
  return (
    <div className="product-period">
      <p className="product-period-title">Период действия акции</p>
      <p className="product-period__date">
        с
        <span className="product-period__date-start">
          {data.start_active_date?.replace(sym, ".")}
        </span>
        по
        <span className="product-period__date-finish">
          {" "}
          {data.end_active_date?.replace(sym, ".")}
        </span>
      </p>
      <p className="product-period-title">
        {data.bought_quantity} купонов купили
      </p>
      <p className="product-period-title">Время продаж ограничено!</p>
    </div>
  );
};

export default ProductPeriod;
