import { FC } from "react";
import { IProductInfo } from "../../../../types/app.interface";
import "./productPrice.scss";

type Props = {};

const ProductPrice: FC<IProductInfo> = ({ data }) => {
  return (
    <div className="product-cost">
      <p className="product-cost-title">Цена за купон:</p>
      <p className="product-cost-price">от {data.price_for_coupon} сом</p>
      <p className="product-cost-title">Цена c купоном:</p>
      <p className="product-cost-price">
        {data.price} сом
        <span className="product-cost-old-price"> {data.old_price} сом</span>
      </p>
    </div>
  );
};
export default ProductPrice;
