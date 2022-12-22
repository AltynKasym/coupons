import {useState, useEffect, FC} from "react";
import Coupons from "../../../components/Coupons/Coupons";
import { _COUPONS_ME_ } from "../../../data/consts";
import { useAppSelector } from "../../../hooks/reduxHook";
import HttpRequests from "../../../utils/httpRequests";
import { sortCouponsTabs } from "../../../utils/temporaryData/Tabs";
import Tabs from "../../../components/Tabs/Tabs";


const MyCouponsComponent= () => {
  const [couponsSort, setCouponsSort] = useState(sortCouponsTabs);
  const [status, setStatus] = useState("active");
  const [data, setData] = useState([]);
  const selector = useAppSelector;
  const user = selector((state) => state.user.user);

  const getMyCoupons = async () => {
    const response = await HttpRequests.getData(
      _COUPONS_ME_ + `?page=1&status=${status}`,
      user?.access
    );
    setData(response.results);
  };
  useEffect(() => {
    getMyCoupons();
  }, [status]);

  useEffect(() => {
    if (couponsSort[2].active) {
      setStatus("expired");
    } else if (couponsSort[1].active) {
      setStatus("activated");
    } else {
      setStatus("active");
    }
  }, [couponsSort]);
  return (
    <>
      <Tabs detailTypes={couponsSort} setDetailTypes={setCouponsSort} />
      <div className="my-coupons__cards">
        {data.length ? (
          <Coupons couponsArr={data} isLoading={false} />
        ) : (
          <div className="my-coupons__not-data">Мои купоны пусто</div>
        )}
      </div>
    </>
  );
};

export default MyCouponsComponent;
