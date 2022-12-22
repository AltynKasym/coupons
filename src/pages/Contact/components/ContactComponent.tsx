import { FC } from "react";
import "./contact.scss";
import Phone from "../../../assets/images/about-us/phone-contact.svg";
import email from "../../../assets/images/about-us/email.svg";
import location from "../../../assets/images/about-us/location.svg";
import facebook from "../../../assets/images/about-us/facebook.svg";
import VKontakte from "../../../assets/images/about-us/VKontakte.svg";
import instagram from "../../../assets/images/about-us/instagram.svg";
import odnoklassniki from "../../../assets/images/about-us/odnoklassniki.svg";
import Map from "../../../components/Map/Map";
import { coordinateBishkek } from "../../../utils/coordinates/coordinates";
import { useAppSelector } from "../../../hooks/reduxHook";
import { useJsApiLoader } from "@react-google-maps/api";
import MapSaleMarker from "../../../components/MapCompanyMarker/MapSaleMarker";

type ContactComponentProps = {
  data: any;
  coord?: any;
};

const ContactComponent: FC<ContactComponentProps> = ({ data, coord }) => {
  const selector = useAppSelector;
  const KALNUR_Google_API_KEY = selector((state) => state.map_api.api);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: KALNUR_Google_API_KEY,
  });

  console.log("coord from ContactComponent", coord);

  return (
    <div>
      <h3 className="content__title contact-info__title">Контакты</h3>
      <p className="content__text">{data.description}</p>
      <div className="contact-info">
        <ul>
          <h4>Наши телефоны:</h4>
          <li>
            <a className="contact-info__item" href={"tel:" + data.phone}>
              <img src={Phone} className="contact-info__img" /> {data.phone}
            </a>
          </li>
          <li>
            <a className="contact-info__item" href={"tel:" + data.phone1}>
              <img src={Phone} className="contact-info__img" /> {data.phone1}
            </a>
          </li>
          <li>
            <a className="contact-info__item" href={"tel:" + data.phone2}>
              <img src={Phone} className="contact-info__img" /> {data.phone2}
            </a>
          </li>
        </ul>
        <div className="contact-info__line"></div>
        <ul>
          <h4>Email:</h4>
          <li>
            {" "}
            <a className="contact-info__item" href={"mailto:" + data.email}>
              <img src={email} className="contact-info__img" /> {data.email}
            </a>
          </li>
          <h4 className="contact-info__item">Наш адрес:</h4>
          <li>
            <a
              className="contact-info__item"
              href="http://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003"
              target="_blank"
            >
              <img src={location} className="contact-info__img" />{" "}
              {data.address}
            </a>
          </li>
        </ul>
        <div className="contact-info__line"></div>
        <ul>
          <h4>Мы в социальных сетях:</h4>
          <li>
            <a
              className="contact-info__item"
              href={data.facebook}
              target="_blank"
            >
              <div className="contact-info__img">
                <img src={facebook} alt="facebook" />
              </div>{" "}
              Facebook
            </a>
          </li>
          <li>
            <a
              className="contact-info__item"
              href={data.vkontakte}
              target="_blank"
            >
              <div className="contact-info__img">
                <img src={VKontakte} alt="vkontakte" />{" "}
              </div>
              VKontakte
            </a>
          </li>
          <li>
            <a
              className="contact-info__item"
              href={data.instagram}
              target="_blank"
            >
              <div className="contact-info__img">
                <img src={instagram} alt="instagram" />
              </div>{" "}
              Instagram
            </a>
          </li>
          <li>
            <a
              className="contact-info__item"
              href={data.odnoklassniki}
              target="_blank"
            >
              <div className="contact-info__img">
                <img src={odnoklassniki} alt="odnoklassniki" />
              </div>{" "}
              Odnoklassniki
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-info__map">
        {!isLoaded ? (
          <h1>Loading Map</h1>
        ) : (
          <Map center={coordinateBishkek}>
            <MapSaleMarker data={coord ? coord : data.coordinates} />
          </Map>
        )}
      </div>
    </div>
  );
};

export default ContactComponent;
