import vk from "../../../../assets/images/detail-product/VK.svg";
import facebook from "../../../../assets/images/detail-product/facebook.svg";
import ok from "../../../../assets/images/detail-product/OK.svg";
import telegram from "../../../../assets/images/detail-product/telegram.svg";
import whatsapp from "../../../../assets/images/detail-product/whatsapp.svg";
import "./socialLinks.scss";
import { IProductInfo } from "../../../../types/app.interface";

type Props = {};

export default function SocialLinks({ data }: IProductInfo) {
  return (
    <div className="social-links">
      <p className="social-links-title">Поделиться</p>
      <ul className="social-links__block">
        <li className="social-links__block-item">
          <a href="/">
            <img src={vk} alt="" />
          </a>
        </li>
        <li className="social-links__block-item">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location}&quote=${data?.title}`}
          >
            <img src={facebook} alt="" />
          </a>
        </li>
        <li className="social-links__block-item">
          <a
            href={`
            http://www.ok.ru/dk?st.cmd=addShare&st.s=1&st._surl=${window.location}&st.comments=${data?.title}`}
          >
            <img src={ok} alt="" />
          </a>
        </li>
        <li className="social-links__block-item">
          <a
            href={`https://t.me/share/url?url=${window.location}&text=${data?.title}
          
         `}
          >
            <img src={telegram} alt="" />
          </a>
        </li>
        <li className="social-links__block-item">
          <a
            href={`https://wa.me/?text=${data?.title}%5Cn%20${window.location}`}
          >
            <img src={whatsapp} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}
