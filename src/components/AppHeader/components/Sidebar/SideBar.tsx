import "./SideBar.scss"
import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";
import classNames from "classnames";
import NavMenu from "../NavMenu/NavItems";
import closeSidebarIcon from "../../../../assets/images/header/header-close-sidebar.svg";
import logo from "../../../../assets/images/header/header-logo.svg";
import favoriteIcon from "../../../../assets/images/header/header-favorite.svg";
import couponIcon from "../../../../assets/images/header/header-coupon.svg";
import logoutIcon from "../../../../assets/images/header/header-logout.svg";

interface SideBarProps {
  items: any[]
  isSidebarOpened: boolean
  setIsSidebarOpened: any
}

const SideBar: FC<SideBarProps> = ({items, isSidebarOpened, setIsSidebarOpened}) => {

  const onCloseSidebar = () => {
    setIsSidebarOpened(false)
    document.body.classList.remove('modal_active-js')
  }

  return (
    <div className={classNames('header__sidebar', 'sidebar', {"sidebar--active": isSidebarOpened})}>
      <div className="sidebar__inner">
        <button className="sidebar__close-btn" onClick={onCloseSidebar}>
          <img src={closeSidebarIcon} alt="X" width={22} height={22}/>
        </button>
        <Link to="/" className="header__logo sidebar__logo">
          <img src={logo} alt="logotype"/>
        </Link>
        <nav className="sidebar__nav">
          <ul className="sidebar__list">
            <NavMenu items={[
              {route: '/about-us', title: 'О нас'},
              {route: '/help', title: 'Помощь'},
              {route: '/contacts', title: 'Контакты'},
            ]} borderRight={false} onCloseSidebar={onCloseSidebar}/>
            <li className="sidebar__line"/>
              <NavMenu items={items} borderRight={false} onCloseSidebar={onCloseSidebar}/>
            <li className="sidebar__item">
              <a href={`tel:+996 000 00 00 00`} className="header-nav__link header__phone sidebar__phone">
                <span>Тел. для справки:</span> +996 000 00 00 00 
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
