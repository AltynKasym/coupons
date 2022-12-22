import { FC, useState, useEffect } from "react";
import {  } from "react-router-dom";
import { Link, useLocation, useParams } from "react-router-dom";
import "./breadcrumb.scss";
import CompleteNameCrumb, { ICrum } from "./CompleteNameCrumb";

interface BreadcrumbProps {
  objInfo?: any;
  paramName?: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({objInfo, paramName}) => {
  const [bread, setBread] = useState<ICrum[]>([]);
  const location = useLocation();

  useEffect(() => {
    const getCrumbs = CompleteNameCrumb({location, objInfo, paramName});
    setBread(getCrumbs);
  }, [location.pathname, objInfo]);
 
  console.log(bread, objInfo);
  

  return (
    <div className="bread_wrap container">
      {bread.length ? (
        bread.map((obj, index) => {
          if (bread.length > 1 && index !== bread.length - 1)
            return (
              <Link key={obj.href} to={obj.href}>
                {obj.display}
              </Link>
            );
          else return <span key={obj.href} className="current_location">{obj.display}</span>;
        })
      ) : (
        <span>...</span>
      )}
    </div>
  );
};

export default Breadcrumb;
