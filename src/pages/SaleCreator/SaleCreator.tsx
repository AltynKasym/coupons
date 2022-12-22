import  { FC, useEffect, useState } from "react";
import "./SaleCreator.scss";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import HttpRequests from "../../utils/httpRequests";
import { useMatch } from "react-router-dom";
import { ICoupon } from "../../types/app.interface";
import Switch from "./components/Switch";
import CompanyDescription from "./components/CompanyDescription";

interface network {
  instagram:string
  telegram:string
  vkontakte:string
  whatsapp:string
  facebook:string
  odnoklassniki:string
}

interface companyData {
  id?:number
  company_name?:string
  logo?:string
  address?:string
  description?:string
  email?:string
  phone1?:string
  phone2?:string
  phone3?:string
  coupons?:ICoupon[]
  network?:network
}

const SaleCreator: FC = () => {

  const [companyData,setCompanyData] = useState<companyData>({});
  const [companyContact, setCompanyContact] = useState({});
  const companyId = useMatch('/sale-creator/:id/')?.params.id;
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    await HttpRequests.getData(`http://185.178.44.117/api/v1/company/${companyId}`).then(el =>{  
      setCompanyData(el);
      let contactData = {
        address:el.address,
        email:el.email,
        description:el.description,
        phone:el.phone1,
        phone1:el.phone2,
        phone2:el.phone3,
        instagram:el.network.instagram,
        vkontakte:el.network.vkontakte,
        odnoklassniki:el.network.odnoklassniki,
        facebook:el.network.facebook,
        coordinates: el.coordinates
      }
      setCompanyContact(contactData)
      setIsLoading(false); 
    });
  }
  
  useEffect(() => { 
    getData()
  },[])
    

  return (
    <div className="creator">
      <Breadcrumb objInfo={companyData.company_name} />
      <div className="container">
        <CompanyDescription logo={companyData.logo} name={companyData.company_name} description={companyData.description} />
        <div className="creator__switch">
          <Switch isLoading={isLoading} companyContact={companyContact} companyData={companyData} />
        </div>
      </div>
    </div>
  )
};

export default SaleCreator;
