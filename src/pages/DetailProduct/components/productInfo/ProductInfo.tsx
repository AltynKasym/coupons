import {log} from "console";
import {FC, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Interface} from "readline";
import logo from "../../../../assets/images/detail-product/company-logo.png";
import ModalActivated from "../../../../components/Modals/components/ModalActivated/ModalActivated";
import ModalError from "../../../../components/Modals/components/ModalError";
import ModalQR from "../../../../components/Modals/components/ModalQR/ModalQR";
import ModalSuccess from "../../../../components/Modals/components/ModalSuccess";
import ModalInfoContent from "../../../../components/Modals/utils/ModalInfoContent/ModalInfoContent";
import ModalWrapper from "../../../../components/Modals/utils/ModalWrapper/ModalWrapper";
import {IProductInfo} from "../../../../types/app.interface";
import { _COUPONS_BUY_ } from "../../../../data/consts";
import HttpRequests from "../../../../utils/httpRequests";
import ProductPrice from "../productPrice/ProductPrice";
import "./productInfo.scss";
import {useAppDispatch, useAppSelector} from "../../../../hooks/reduxHook";
import {addToFavorites, removeFromFavorites} from "../../../../store/slices/favoriteSlice";

const ProductInfo: FC<IProductInfo> = ({data}) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [linkBuy, setLinkBuy] = useState<string>('');
  const [isModalWrapper, setIsModalWrapper] = useState<boolean>(false);

  const favoriteList = useAppSelector((state: any) => state.favoriteSlice.favoriteList)
  const selector = useAppSelector;
  const user = selector(state => state.user.user);
  const navigate = useNavigate();

  const dispatch = useAppDispatch()

  useEffect(() => {
    setIsFavorite(favoriteList.some((item: any) => data.id == item.id))
  }, []);
  const onClickFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(data.id))
    } else {
      addToFavorites(data)
    }
    setIsFavorite(prev => !prev)
  }

  const buyObj: any = {
    coupon_id: +data.company_id
  };

  const buyCoupon = async () => {
    console.log(buyObj, user?.access);

    if(buyObj.coupon_id && user?.access){
    
      await HttpRequests.postData(_COUPONS_BUY_, buyObj, user.access).then(data => {
        console.log(data);
        setLinkBuy(data.detail);
        setIsModalWrapper(true)
      })
    }
  }

  return (
    <>
      {
        linkBuy.length && isModalWrapper ? (
          <ModalWrapper setCloseModal={setIsModalWrapper}>
            <iframe src={linkBuy}/>
          </ModalWrapper>
        ) : null
      }
      <div className="product-info">
        <Link to={`/sale-creator/${data.company_id}`}>
          <div className="product-info-company">
            <img src={data.company_logo} alt={data.company_name}/>
            <h3 className="product-info-company__name">{data.company_name}</h3>
          </div>
        </Link>
        <div className="product-info-common-description">
          <p className="product-info-discount">
            Купон на скидку {data.discount_percent}%
          </p>
          <p className="product-info-description">{data.title}</p>
        </div>
        <ProductPrice data={data}/>

        <div className="product-info-buttons">
          <button
            className="button-buy"
            onClick={() => {
              user ? buyCoupon() : navigate('/sign-in')
            }}
          >
            Купить купон
          </button>
          <div
            className="button-favorite"
            onClick={onClickFavorite}>
            {
              isFavorite
                ? <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.50098 0.312521C3.35763 0.313811 2.26147 0.768577 1.453 1.57705C0.644532 2.38552 0.189767 3.48167 0.188477 4.62502C0.188477 9.99924 7.48091 14.6804 9.00098 15.5972C10.521 14.6804 17.8135 9.99924 17.8135 4.62502C17.8133 3.62827 17.4679 2.66234 16.836 1.89148C16.2041 1.12061 15.3247 0.592375 14.3474 0.396585C13.3701 0.200796 12.3551 0.349534 11.475 0.817513C10.5949 1.28549 9.90412 2.04382 9.51998 2.96358C9.4772 3.06595 9.4051 3.15338 9.31275 3.21488C9.2204 3.27637 9.11193 3.30918 9.00098 3.30918C8.89003 3.30918 8.78156 3.27637 8.68921 3.21488C8.59686 3.15338 8.52476 3.06595 8.48198 2.96358C8.15501 2.1775 7.60226 1.50604 6.89364 1.03415C6.18501 0.562252 5.35235 0.311121 4.50098 0.312521Z"
                    fill="#4B5FA5"/>
                </svg>
                : <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.001 17.8125C9.90472 17.8126 9.81008 17.7879 9.7261 17.7408C8.01663 16.7395 6.41224 15.5688 4.93716 14.2463C1.70316 11.3357 0.0634766 8.4351 0.0634766 5.62503C0.0638362 4.46198 0.437001 3.32966 1.1282 2.39428C1.8194 1.4589 2.79224 0.769707 3.90392 0.427863C5.01561 0.0860202 6.2076 0.109527 7.30494 0.494933C8.40228 0.880338 9.34719 1.60735 10.001 2.56925C10.6548 1.60735 11.5997 0.880338 12.697 0.494933C13.7944 0.109527 14.9863 0.0860202 16.098 0.427863C17.2097 0.769707 18.1826 1.4589 18.8738 2.39428C19.565 3.32966 19.9381 4.46198 19.9385 5.62503C19.9385 8.4351 18.2988 11.3357 15.0647 14.2463C13.5896 15.5688 11.9852 16.7395 10.2758 17.7408C10.1918 17.7878 10.0972 17.8125 10.001 17.8125ZM5.50098 1.31253C4.35763 1.31382 3.26147 1.76859 2.453 2.57706C1.64453 3.38553 1.18977 4.48168 1.18848 5.62503C1.18848 10.9993 8.48091 15.6804 10.001 16.5973C11.521 15.6804 18.8135 10.9993 18.8135 5.62503C18.8133 4.62828 18.4679 3.66236 17.836 2.89149C17.2041 2.12062 16.3247 1.59239 15.3474 1.3966C14.3701 1.20081 13.3551 1.34955 12.475 1.81753C11.5949 2.2855 10.9041 3.04384 10.52 3.9636C10.4772 4.06597 10.4051 4.1534 10.3127 4.21489C10.2204 4.27639 10.1119 4.3092 10.001 4.3092C9.89003 4.3092 9.78156 4.27639 9.68921 4.21489C9.59686 4.1534 9.52476 4.06597 9.48198 3.9636C9.15501 3.17751 8.60226 2.50605 7.89363 2.03416C7.18501 1.56226 6.35235 1.31113 5.50098 1.31253Z"
                    fill="#4B5FA5"
                  />
                </svg>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
