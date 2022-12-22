import "./NavItems.scss"
import {FC} from 'react';
import {Link} from "react-router-dom";
import classNames from "classnames";

interface NavItemsProps {
  items: any[],
  borderRight: boolean,
  onCloseSidebar: any
}

const NavItems: FC<NavItemsProps> = ({items, borderRight, onCloseSidebar}) => {
  return (
    <>
      {
        items.map((item, index, array) => (
            item.title?.length 
            ? 
              <li key={index}
                  className={classNames({'header-nav__item': borderRight})}
                  onClick={onCloseSidebar}>
                <Link to={item.route} className="header-nav__link">
                  {item.image && <img src={item.image} alt="heart"/>}
                  {item.title}
                </Link>
              </li>
            :
            <li key={index}
                className={classNames({'header-nav__item': borderRight})}
                onClick={onCloseSidebar}>
              <Link to={item.route} className="header-nav__link">
                {item.image && <img src={item.image} alt="Sign"/>}
                  {item.username}
              </Link>
            </li>
        ))
      }
    </>
  );
};

export default NavItems;
