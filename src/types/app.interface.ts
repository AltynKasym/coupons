export interface ILoginUser {
  first_name: string;
  last_name: string;
  phone: string | number;
  password: string;
  password2: string;
}

export interface IUser {
  access: string;
  first_name: string;
  last_name: string;
  phone: string;
}

export interface ICoupon {
  id: number;
  title: string;
  description: string;
  company_name: string;
  company_logo: string;
  preview_image: string;
  discount_percent: number;
  price: string;
  price_for_coupon: string;
  old_price: string;
  order: number;
  isActive: boolean;
}

export interface ITabsDetail {
  id: number;
  title: string;
  active: boolean;
}

export interface ICoordinate {
  lat: number;
  lng: number;
}

export interface IPrivacyPolicy {
  title: string;
  description: string;
}

interface IAccordionItem {
  question: string;
  answer: string;
}

export interface IAccordion extends Array<IAccordionItem> {}

export interface IContact {
  address: string;
  description: string;
  email: string;
  facebook: string;
  instagram: string;
  odnoklassniki: string;
  phone: string;
  phone1: string;
  phone2: string;
  phone3: string;
  vkontakte: string;
  whatsapp: string;
}

export interface IProductInfo {
  data: any;
}

interface ISearchItem {
  title: string
}

export interface ISearch extends Array<ISearchItem>{}

export interface ILoginInfo {
  phone: string;
  password: string;
}

export interface IChangePassword {
  old_password: string,
  new_password: string,
  new_password_repeat: string,
}