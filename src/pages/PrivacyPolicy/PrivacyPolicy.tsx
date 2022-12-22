import { FC, useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import { _INFO_FOOTER_FAQ_, _INFO_PRIVACY_POLICY_ } from "../../data/consts";
import { IPrivacyPolicy } from "../../types/app.interface";
import HttpRequests from "../../utils/httpRequests";
import "./privacyPolicy.scss";

const PrivacyPolicy: FC = () => {
  const [data, setData] = useState<IPrivacyPolicy>({
    title: '',
    description: ''
  });
    const privacyPolicyData = async () => {
      const newData = await HttpRequests.getData(_INFO_PRIVACY_POLICY_);
      setData(newData);
    };

  useEffect(() => {
    privacyPolicyData();
  }, []);
  return (
    <div className="content">
      <Breadcrumb />
      <div className="container">
        <div className="privacy-policy">
          <h3 className="content__title privacy-policy__title">{data.title}</h3>
          <p className="content__text">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
