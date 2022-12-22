import { FC } from "react";
import { Link } from "react-router-dom"
import {itemsType} from './FooterItemData';

interface Props {
  isLink:boolean;
  itemData:itemsType[];
  title:string;
}

const FooterItem: FC<Props> = ({isLink,itemData,title}) => {
  return (
    <div className="footer__item">
    <div className="footer__title">{title}</div>
    <div className="footer__child-list">
        {itemData.map((el,index:number) => (
            <div className="footer___child-list-item" key={el.subtitle}>
              {isLink ? <Link to={el.path} className={'footer__link'}>{el.subtitle}</Link>
              : <>
                   <img src={el.img} className={'footer__link-img'}/>
                    <a href={el.path} target={'_blank'} className={'footer__link footer__link-icon'}>{el.subtitle}</a>
                </>
              }
            </div>
        ))}
    </div>
  </div>
  )
}

export default FooterItem
