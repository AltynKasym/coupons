import { FC, useState } from "react";
import { saleCreatorTabsData } from "../../../utils/temporaryData/contactTabs";
import ContactComponent from "../../../pages/Contact/components/ContactComponent";
import Tabs from "./Tabs";
import Coupons from "../../../components/Coupons/Coupons";

type Props = {
    companyContact:any;
    companyData:any;
    isLoading:boolean;
}

const Switch: FC<Props> = ({companyContact,isLoading,companyData}) => {
    const [active, setActive] = useState(1);
  return ( 
    <div className="creator__switch">
        <div className="creator__switch-btn">
            <Tabs tabsObj={saleCreatorTabsData} active={active} setActive={setActive} />
        </div>
        {active == 1 ? (
            <Coupons isLoading={isLoading} title="Акции" couponsArr={companyData.coupons || []} />
            ) : (
            <ContactComponent data={companyContact} />
        )}
    </div>
  )
}

export default Switch