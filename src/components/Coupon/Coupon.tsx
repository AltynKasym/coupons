import './Coupon.scss'
import notFavoritedIcon from "../../assets/images/coupon/coupon-favorite.svg"
import favoritedIcon from "../../assets/images/coupon/coupon-favorited.svg"
import percentIcon from "../../assets/images/coupon/coupon-percent.svg"
import noImage from "../../assets/images/coupon/no-image.jpg"
import costIcon from "../../assets/images/coupon/coupon-price.svg"

import {FC, useState} from "react";
import CouponPrice from "./CouponPrice"
import {Link} from 'react-router-dom';
import {ICoupon} from "../../types/app.interface";
import {addToFavorites, removeFromFavorites} from "../../store/slices/favoriteSlice";
import {useAppDispatch} from "../../hooks/reduxHook";

type CouponProps = {
  couponObj: ICoupon
  isFavorited: boolean
}

const Coupon: FC<CouponProps> = ({couponObj, isFavorited}) => {
  const {
    id,
    title,
    company_name,
    company_logo,
    price,
    old_price,
    price_for_coupon,
    discount_percent,
    preview_image,
  }: ICoupon = couponObj

  const [isFavorite, setIsFavorite] = useState(isFavorited)
  const dispatch = useAppDispatch()

  const shortedTitle = title.slice(0, 90)

  const onClickFavorite = (event: any) => {
    event.preventDefault()

    if(isFavorite) {
      dispatch(removeFromFavorites(id))
    } else {
      dispatch(addToFavorites(couponObj))
    }
    setIsFavorite(prev => !prev)
  }

  return (
    <div className="coupon">
      <Link to={`/detail-product/${id}`}>
        <div className="coupon__top">
          <div className='coupon__img-block'>
            <img src={preview_image ? preview_image : noImage} alt="coupon" className="coupon__img"/>
          </div>
          {
            discount_percent > 0 && (
              <div className="coupon__sale">
                <span>{discount_percent}%</span>
              </div>
            )
          }
          <button type="button"
                  className="coupon__favorite"
                  onClick={onClickFavorite}>
            <img src={isFavorite ? favoritedIcon : notFavoritedIcon} alt="heart"/>
          </button>
        </div>
        <div className="coupon__bottom">
          <div className="coupon__bottom-head">
            <div className="coupon__logo-block">
              <img src={company_logo} alt="coupon logo" className="coupon__logo"/>
            </div>
            <h4 className="coupon__title">
              {company_name}
            </h4>
          </div>
          <div className="coupon__description">
            {
              shortedTitle.length < 90
                ? shortedTitle
                : `${shortedTitle}...`
            }
          </div>
          <div className="coupon__prices">
            <CouponPrice price={price}
                         oldPrice={old_price}
                         icon={percentIcon}
                         priceTitle={"Цена скидки с купоном:"}
                         isOldPriceExist/>

            <CouponPrice price={price_for_coupon}
                         oldPrice={null}
                         icon={costIcon}
                         isOldPriceExist={false}
                         priceTitle={"Цена за купон:"}/>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Coupon
