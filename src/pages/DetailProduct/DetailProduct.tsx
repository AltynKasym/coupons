import { FC, useEffect, useState } from "react";
import "./detailProduct.scss";

import ProductInfo from "./components/productInfo/ProductInfo";
import ProductDetail from "./components/productDetail/ProductDetail";
import ProductPeriod from "./components/productPeriod/ProductPeriod";
import SocialLinks from "./components/socialLinks/SocialLinks";
import ProductSlider from "./components/productSlider/ProductSlider";
import BranchAddresses from "./components/BranchAddresses/BranchAddresses";
import Coupons from "../../components/Coupons/Coupons";
import { couponsArr } from "../../utils/temporaryData/testCoupons";
import Map from "../../components/Map/Map";
import { useJsApiLoader } from "@react-google-maps/api";
import { useAppSelector } from "../../hooks/reduxHook";
import { coordinateBishkek } from "../../utils/coordinates/coordinates";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import HttpRequests from "../../utils/httpRequests";
import MapMarker from "../../components/MapCompanyMarker/MapCompanyMarker";
import { useParams } from "react-router-dom";
import MapCompanyMarker from "../../components/MapCompanyMarker/MapCompanyMarker";
import { _COUPONS_ALL_ } from "../../data/consts";
import Spinner from "../../components/Spinner/Spinner";
import { Context } from "./context/Context";
import ModalQR from "../../components/Modals/components/ModalQR/ModalQR";
import ModalWrapper from "../../components/Modals/utils/ModalWrapper/ModalWrapper";
import ModalActivated from "../../components/Modals/components/ModalActivated/ModalActivated";
import ModalSuccess from "../../components/Modals/components/ModalSuccess";
import ModalError from "../../components/Modals/components/ModalError";

const DetailProduct: FC = () => {
  const selector = useAppSelector;
  const KALNUR_Google_API_KEY = selector((state) => state.map_api.api);
  const { id } = useParams();

  const [dataCoupon, setDataCoupon] = useState<any>(null);
  const [companyCoordinates, setCompanyCoordinates] = useState<any>("");

  let initialState: any = [];
  const [isOpenWindow, setIsOpenWindow] = useState<any>([]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: KALNUR_Google_API_KEY,
  });

  const getCoupon = async () => {
    const newData = await HttpRequests.getData(_COUPONS_ALL_ + id);

    setDataCoupon(newData);
  };

  const getCompanyCoordinates = async () => {
    if (dataCoupon !== null) {
      const coordinates = await HttpRequests.getData(
        "http://185.178.44.117/api/v1/company/" + dataCoupon.company_id
      );
      setCompanyCoordinates(coordinates);
    }
  };

  useEffect(() => {
    getCoupon().catch((e) => console.log(e));
  }, [id]);

  useEffect(() => {
    getCompanyCoordinates().catch((e) => console.log(e));
  }, [dataCoupon]);

  return dataCoupon ? (
    <>
      <div className="detail-product">
        {/* <ModalQR data={dataCoupon} /> */}
        {/* <ModalActivated data={dataCoupon} /> */}
        {/* <ModalSuccess /> */}
        {/* <ModalError /> */}
        <Breadcrumb  objInfo={dataCoupon.title}/>
        <div className="container">
          <div className="detail-product__inner">
            <ProductSlider data={dataCoupon} />
            <ProductInfo data={dataCoupon} />
            <ProductDetail data={dataCoupon} />
            <div>
              <ProductPeriod data={dataCoupon} />
              <SocialLinks data={dataCoupon} />
            </div>
          </div>
          <div className="detail-product__coupons">
            <div className="detail-product__coupons-inner">
              <Coupons
                title="Похожие товары"
                couponsArr={dataCoupon.similar_products}
                isLoading={false}
              />
            </div>
          </div>
          <Context.Provider
            value={[initialState, isOpenWindow, setIsOpenWindow]}
          >
            <div className="detail-product__map">
              {!isLoaded ? (
                <h1>Loadin Map</h1>
              ) : (
                <Map center={coordinateBishkek}>
                  {companyCoordinates && (
                    <MapCompanyMarker data={companyCoordinates.coordinates} />
                  )}
                </Map>
              )}

              {companyCoordinates && (
                <BranchAddresses data={companyCoordinates.coordinates} />
              )}
            </div>
          </Context.Provider>
        </div>
      </div>
    </>
  ) : (
    <Spinner />
  );
};

export default DetailProduct;
