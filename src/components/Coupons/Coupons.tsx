import {FC, useEffect, useState} from "react";
import {ICoupon} from "../../types/app.interface";
import Coupon from "../Coupon/Coupon";
import CouponSort from "../UI/CouponSort/CouponSort";
import Skeleton from "../Skeleton";
import "./Coupons.scss";
import {useNavigate} from 'react-router-dom';
import {syncAllFavorites} from "../../store/slices/favoriteSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHook";


interface coupons {
  title?: string;
  couponsArr: ICoupon[];
  isCouponsSort?: boolean | undefined;
  isLoading?: boolean;
  setNumberOfCoupons?: any;
  isLink?: boolean
  isPagination?: boolean
}

const Coupons: FC<coupons> = ({
                                title,
                                isPagination,
                                couponsArr,
                                isCouponsSort,
                                isLoading,
                                setNumberOfCoupons,
                                isLink
                              }) => {

  const [coupons, setCoupons] = useState<ICoupon[]>([])
  const favoriteList = useAppSelector(state => state.favoriteSlice.favoriteList)

  const navigate = useNavigate()

  useEffect(() => {
    setCoupons(couponsArr)
  }, [couponsArr])

  const checkIsCouponFavorite = (id: number) => {
    let flag = false
    favoriteList && favoriteList.forEach((item: any) => {
      if(item.id == id) flag = true
    })
    return flag
  }

  return (
    <div className="coupons">
      <div className="coupons__title-block">
        <h2 className="coupons__title">{title}</h2>
        {!isCouponsSort ? null : <CouponSort setCoupons={setCoupons} coupons={couponsArr}/>}
      </div>
      <div className="coupons__list">
        {
          isLoading ? Array.from({length: 12}).map((item, id) => (
              <div className="coupon skeleton" key={id}>
                <Skeleton/>
              </div>
            ))
            : coupons.map(obj => {
              return <Coupon
                couponObj={obj}
                // @ts-ignore
                isFavorited={() => checkIsCouponFavorite(obj.id)}
                  key={Number(obj.id) * Math.random()}
                />
              }
            )
        }
      </div>
      {isPagination || isLink ?
        <div className="coupons__pagination" onClick={() => {
          if (isLink) return navigate('/new-coupons')
          else setNumberOfCoupons((el: number) => el += 8)
        }}>
          <button className='coupons__btn'>Посмотреть ещё</button>
        </div>
        :
        null}
    </div>
  );
};

export default Coupons;
