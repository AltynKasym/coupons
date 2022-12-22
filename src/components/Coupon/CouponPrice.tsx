import { FC } from "react"

interface CouponPriceProps {
  icon: any,
  oldPrice: string | null,
  price: string,
  isOldPriceExist: boolean
  priceTitle: string
}

const CouponPrice: FC<CouponPriceProps> = ({oldPrice, price, isOldPriceExist, icon, priceTitle}) => {
  return (
    <div className="coupon-price">
      <img src={icon} alt="percent" className="coupon-price__img"/>
      <div className="coupon-price__content">
        <p className="coupon-price__title">{priceTitle}</p>
        <div className="coupon-price__prices">
          <span className="coupon-price__actual-price">
            {`${price} c`}
          </span>
          {
            isOldPriceExist && (
              <span className="coupon-price__old-price">
                {oldPrice && `${oldPrice} c`}
              </span>)
          }
        </div>
      </div>
    </div>
  );
};

export default CouponPrice;
