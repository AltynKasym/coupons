import { useEffect, useState } from "react";
import Coupons from "../../../components/Coupons/Coupons";
import { _COUPONS_ALL_} from "../../../data/consts";
import { ICoupon } from "../../../types/app.interface";
import HttpRequests from "../../../utils/httpRequests";
import Subcategory from "../component/Subcategory";



const NewCouponsContainer = () => {
    const [coupons, setCoupons] = useState<ICoupon[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [numberOfCoupons, setNumberOfCoupons] = useState(8);
    const [activeSubcategory,setActiveSubcategory] = useState(1);
  
    useEffect(() => {
      const fetchData = async () => {
        const couponResponse = await HttpRequests.getData(_COUPONS_ALL_+`?tags=${activeSubcategory}`);
        setCoupons(couponResponse.results);
        setIsLoading(false);
      };
      fetchData().catch((e) => console.log(e));
      setNumberOfCoupons(8)
    }, [activeSubcategory]);
  
  return (
        <>
            <Subcategory setActiveSubcategory={setActiveSubcategory} activeSubcategory={activeSubcategory} />
            <Coupons 
            title=' ' 
            isPagination={coupons.length > numberOfCoupons}  
            couponsArr={coupons.slice(0,numberOfCoupons)} 
            setNumberOfCoupons={setNumberOfCoupons} 
            isLoading={isLoading} />
        </>
  )
}

export default NewCouponsContainer