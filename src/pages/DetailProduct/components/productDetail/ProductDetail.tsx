import { FC, useEffect, useRef, useState } from "react";
import Tabs from "../../../../components/Tabs/Tabs";
import { IProductInfo } from "../../../../types/app.interface";
import { detailTabs } from "../../../../utils/temporaryData/Tabs";
import "./productDetail.scss";

const detailCondition = () => {
  return (
    <>
      <p className="product-detail-subtitle">
        Купон дает право скидки 50% на блюда кухни на выбор в четырех
        ресторанах.
      </p>
      <div className="product-detail-description">
        Купон действует в любой день в любое время работы ресторана. Один
        человек может купить неограниченное количество купонов для себя или в
        подарок (из расчета один купон — одному человеку). Если идете вдвоем или
        компанией, необходимо приобретать купон на каждого. Для ребенка до 6 лет
        (включительно) купон не требуется.
      </div>
    </>
  );
};
const detailAdress = () => {
  return (
    <>
      <p className="product-detail-subtitle">
        Акция действует в ресторанах по следующим адресам:
      </p>

      <div className="product-detail-address">
        <span>— г. Москва, ул. Новослободская, д. 16;</span>
        <span>— г. Москва, ул. Городецкая, д. 5;</span>
        <span>
          — г. Москва, ул. Петровка, д. 18/2 (ул. Петровские Линии, д. 2/18);
        </span>
        <span>— г. Москва, ул. 1-я Тверская-Ямская, д. 7.</span>
      </div>
    </>
  );
};
const detailDesc = () => {
  return (
    <p className="product-detail-description">
      По купонам обслуживаются компании до 8 человек (включительно). Если хотите
      прийти большей компанией, чем указано выше, то возможность и условия
      посещения необходимо согласовать с администрацией ресторана по телефону.
      Купон не распространяется на блюда «Стейк мясника», «Мрамор-кабоб»,
      «Тамерлан», «Лосось по-чайхански», «Лосось на пару», «Каре ягненка» и
      «Бургер № 1», напитки, заказы навынос, доставку, паровые коктейли,
      бизнес-ланчи, а также другие спецпредложения ресторана (в том числе
      сезонное меню). Обязательно предварительное бронирование столика по
      телефону, в противном случае в обслуживании будет отказано.
    </p>
  );
};

const ProductDetail: FC<IProductInfo> = ({ data }) => {
  const [detailTypes, setDetailTypes] = useState(detailTabs);
  const [rootClass, setRootClass] = useState<string>("");

  const showTrueDescribe = () => {
    const trueDescribeId = detailTypes.find((obj) => obj.active === true)?.id;

    if (trueDescribeId === 1) {
      setRootClass("product-detail__list--cond");
    }
    if (trueDescribeId === 2) {
      setRootClass("product-detail__list--desc");
    }
    if (trueDescribeId === 3) {
      setRootClass("product-detail__list--adress");
    }
  };

  useEffect(() => {
    showTrueDescribe();
  }, [detailTypes]);

  // function cutTegs(str: string) {
  //   let regex = /( |<([^>]+)>)/gi,
  //     result = str.replace(/<\/?[^>]+(>|$)/gi, "").replace(/&nbsp;/gi, " ");

  //   return result;
  // }

  return (
    <div className="product-detail">
      <div className={"product-detail-tabs"}>
        <Tabs detailTypes={detailTypes} setDetailTypes={setDetailTypes} />
      </div>
      <div className="product-detail__slider">
        <ul className={`product-detail__list ${rootClass}`}>
          <li
            className="product-detail__item"
            dangerouslySetInnerHTML={{ __html: data.conditions }}
          ></li>
          <li
            className="product-detail__item"
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></li>
          <li className="product-detail__item">{detailAdress()}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
