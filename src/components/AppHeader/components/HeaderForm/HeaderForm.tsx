import "./HeaderForm.scss";
import { FC, useState } from "react";
import classNames from "classnames";
import searchIcon from "../../../../assets/images/header/header-search.svg";
import { useNavigate } from "react-router-dom";
import HttpRequests from "../../../../utils/httpRequests";
import { _COUPONS_SEARCH_TEXT_ } from "../../../../data/consts";
import { ISearch } from "../../../../types/app.interface";

interface HeaderFormProps {
  isFormForMobile: boolean;
}

const HeaderForm: FC<HeaderFormProps> = ({ isFormForMobile }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState<ISearch>([]);

  const parentClassName: string = classNames(
    "header-form",
    { "search-state__form": isFormForMobile },
    { "header__form-block": !isFormForMobile }
  );

  const searchCoupons = (e: any) => {
    e.preventDefault();
    if(inputValue){
    navigate(`/result-search/${inputValue}`);
    setInputValue("");
    }else{
      navigate("/result-search/:name")
    }
  };

  const passLink = (e: any) => {
    navigate(`/result-search/${e.target.firstChild.data}`);
    setInputValue("");
    setSearchData([]);
  };

  const SearchFunc = async () => {
    const data = await HttpRequests.getData(
      _COUPONS_SEARCH_TEXT_ + `?name=${inputValue}`
    );
    setSearchData(data);
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
    if (inputValue.trim()) {
      SearchFunc();
    }
  };
  return (
    <div className={parentClassName}>
      <form className="header__form" onSubmit={searchCoupons}>
        <input
          type="text"
          className="header__input"
          placeholder="Поиск"
          onChange={handleChange}
          value={inputValue}
        />
        <button
          type="button"
          className="header__form-btn"
          onClick={searchCoupons}
        >
          <img src={searchIcon} alt="magnifier" />
        </button>
      </form>
      {searchData.length && inputValue ? (
        <div className="hints-data">
          <ul className="hints-data__titles">
            {searchData.map((el, idx): any => (
              <li
                onClick={passLink}
                onFocus={searchCoupons}
                className="hints-data__item"
                key={idx}
              >
                {el.title}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default HeaderForm;
