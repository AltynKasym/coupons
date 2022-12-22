import { FC } from "react";
import { NavLink } from "react-router-dom";

type SideBarProps = {
  items: any;
  onClick?: any
};

const SideBarItem: FC<SideBarProps> = ({ items, onClick}) => {
  return (
    <li className={`sideBar__item ${items.class ? items.class : ""}`} onClick={items.class === "mob" ? onClick : null}>
      <NavLink
        to={items.link}
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <img src={window.location.pathname === items.link ? items.activeImg : items.img} alt="avatar" className="sideBar__img"/>
        {items.title}
      </NavLink>
    </li>
  );
};

export default SideBarItem;