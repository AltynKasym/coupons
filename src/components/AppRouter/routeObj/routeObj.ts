import { routePath } from "../../../utils/routePath/routePath";
import SignIn from "../../../pages/SignIn/SignIn";
import SignUp from "../../../pages/SignUp/SignUp";
import Help from "../../../pages/Help/Help";
import BecomePartner from "../../../pages/BecomePartner/BecomePartner";
import Home from "../../../pages/Home/Home";
import PageNotFound from "../../../pages/PageNotFound/PageNotFound";
import { FC } from "react";
import ResultSearch from "../../../pages/ResultSearch/ResultSearch";
import SaleCreator from "../../../pages/SaleCreator/SaleCreator";
import UserProfile from "../../../pages/UserProfile/UserProfile";
import PrivacyPolicy from "../../../pages/PrivacyPolicy/PrivacyPolicy";
import DetailProduct from "../../../pages/DetailProduct/DetailProduct";
import AboutUs from "../../../pages/AboutUs/AboutUs";
import Contact from "../../../pages/Contact/Contact"
import MyCoupons from "../../../pages/MyCoupons/MyCoupons"
import RecoveryPassword from "../../../pages/RecoveryPassword/RecoveryPassword";
import ChangeNumber from "../../../pages/ChangeNumber/ChangeNumber"
import ChangePassword from "../../../pages/ChangePassword/ChangePassword";
import Favorites from "../../../pages/Favorites/Favorites";
import NewCoupons from "../../../pages/NewCoupons/NewCoupons";

interface IPathObj {
  path: string;
  component: FC;
}

export const publicRoute: IPathObj[] = [
  {
    path: routePath.SIGN_IN,
    component: SignIn,
  },
  {
    path: routePath.SIGN_UP,
    component: SignUp,
  },
  {
    path: routePath.HELP,
    component: Help,
  },
  {
    path: routePath.HOME,
    component: Home,
  },
  {
    path: routePath.PAGE_NOT_FOUND,
    component: PageNotFound,
  },
  {
    path: routePath.RESULT_SEARCH,
    component: ResultSearch,
  },
  {
    path: routePath.SALE_CREATOR,
    component: SaleCreator,
  },
  {
    path: routePath.PRIVACY_POLICY,
    component: PrivacyPolicy,
  },
  {
    path: routePath.DETAIL_PRODUCT,
    component: DetailProduct,
  },
  {
    path: routePath.ABOUT_US,
    component: AboutUs,
  },
  {
    path: routePath.CONTACT,
    component: Contact,
  },
  {
    path: routePath.RECOVERY_PASSWORD,
    component: RecoveryPassword
  },
  {
    path: routePath.NEW_COUPONS,
    component: NewCoupons
  },
  {
    path: routePath.FAVORITES,
    component: Favorites
  },
  {
    path: routePath.MY_COUPONS,
    component: SignIn,
  },
  {
    path: routePath.MY_COUPONS,
    component: SignIn,
  },
];

export const privateRoute: IPathObj[] = [
  {
    path: routePath.BECOME_PARTNER,
    component: BecomePartner,
  },
  {
    path: routePath.HELP,
    component: Help,
  },
  {
    path: routePath.HOME,
    component: Home,
  },
  {
    path: routePath.PAGE_NOT_FOUND,
    component: PageNotFound,
  },
  {
    path: routePath.RESULT_SEARCH,
    component: ResultSearch,
  },
  {
    path: routePath.SALE_CREATOR,
    component: SaleCreator,
  },
  {
    path: routePath.USER_PROFILE,
    component: UserProfile,
  },
  {
    path: routePath.PRIVACY_POLICY,
    component: PrivacyPolicy,
  },
  {
    path: routePath.DETAIL_PRODUCT,
    component: DetailProduct,
  },
  {
    path: routePath.ABOUT_US,
    component: AboutUs,
  },
  {
    path: routePath.CONTACT,
    component: Contact,
  },
  {
    path: routePath.MY_COUPONS,
    component: MyCoupons,
  },
  {
    path: routePath.CHANGE_NUMBER,
    component: ChangeNumber
  },
  {
    path: routePath.CHANGE_PASSWORD,
    component: ChangePassword,
  },
  {
    path: routePath.USER_PROFILE,
    component: UserProfile
  },
  {
    path: routePath.FAVORITES,
    component: Favorites
  },
  {
    path: routePath.NEW_COUPONS,
    component: NewCoupons
  }
];

