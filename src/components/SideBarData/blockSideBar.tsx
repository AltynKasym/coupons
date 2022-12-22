import avatar  from "../../assets/images/about-us/avatar.svg";
import activeAvatar  from "../../assets/images/about-us/active-avatar.svg";
import phone from "../../assets/images/about-us/phone.svg";
import activePhone from "../../assets/images/about-us/active-phone.svg";
import coupon from "../../assets/icons/coupon.svg";
import passowrd from "../../assets/icons/change-password.svg";
import logout from "../../assets/images/header/header-logout.svg";
import activePassword from "../../assets/images/about-us/active-password.svg"
import activeCoupon from "../../assets/images/about-us/active-Coupons.svg"

export const dataMenu = [
  {
    title: "О нас",
    link: "/about-us",
    img: avatar,
    activeImg:activeAvatar
  },
  {
    title: "Контакты",
    link: "/contacts",
    img: phone,
    activeImg:activePhone
  },
  {
    title: "Помощь",
    link: "/help",
    img: avatar,
    activeImg:activeAvatar
  },
  {
    title: "Выйти",
    link: "#",
    img: logout,
    class: "mob",
  },
];

export const dataProfile = [
  {
    title: "Профиль",
    link: "/user-profile",
    img: avatar,
    activeImg:activeAvatar
  },
  {
    title: "Мои купоны",
    link: "/my-coupons",
    img: coupon,
    activeImg:activeCoupon
  },
  {
    title: "Сменить номер",
    link: "/change-number",
    img: phone,
    activeImg:activePhone
  },
  {
    title: "Сменить пароль",
    link: "/change-password",
    img: passowrd,
    activeImg: activePassword
  },
  {
    title: "Выйти",
    link: "#",
    img: logout,
    class: "mob",
  },
];