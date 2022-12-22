import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Coupons from "../../components/Coupons/Coupons";
import { _COUPONS_SEARCH_ } from "../../data/consts";
import HttpRequests from "../../utils/httpRequests";
import "./ResultSearch.scss";

const ResultSearch: FC = () => {
  const [searchResult, setSearchResult] = useState([]);
  const params = useParams()

  useEffect(() => {
    HttpRequests.getData(_COUPONS_SEARCH_ + `?search=${params.name}`).then(
      ({ results }) => {
        setSearchResult(results);
      }
    );
  }, [params]);

  return (
    <div className="result-search">
      <Breadcrumb paramName={params.name} />
      <div className="result-search__body container">
        {params.name?.trim() && searchResult.length ? (
          <Coupons
            title="Результаты поиска"
            couponsArr={searchResult}
            isCouponsSort={true}
            isLoading={false}
          />
        ) : (
          <div className="result-search__not-found">
            По Вашему запросу ничего не найдено.
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultSearch;
