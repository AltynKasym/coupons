import { _COMPANY_, _COUPONS_ALL_ } from "../../data/consts";
import { routePath } from "../../utils/routePath/routePath";

export interface ICrum {
    display: string;
    href: string
}

interface ICompleteNameCrumbArg{
    location: any;
    objInfo: string;
    paramName?: string;
}

const CompleteNameCrumb = ({location, objInfo, paramName}: ICompleteNameCrumbArg) => {

    const crumbs: ICrum[] = [{
        display: 'Главная',
        href: '/'
    }];

    console.log(objInfo);
    

    if(location.pathname.includes(routePath.ABOUT_US)) crumbs.push({display: 'О нас', href: '/about-us'})
    if(location.pathname.includes(routePath.NEW_COUPONS)) crumbs.push({display: 'Новые купоны', href: '/new-coupons'})
    if(location.pathname.includes(routePath.CHANGE_NUMBER)) crumbs.push({display: 'Профиль', href: '/user-profile'})
    if(location.pathname.includes(routePath.CHANGE_PASSWORD)) crumbs.push({display: 'Профиль', href: '/user-profile'})
    if(location.pathname.includes(routePath.MY_COUPONS)) crumbs.push({display: 'Профиль', href: '/user-profile'})
    if(location.pathname.includes(routePath.USER_PROFILE)) crumbs.push({display: 'Профиль', href: '/user-profile'})
    if(location.pathname.includes(routePath.CONTACT)) crumbs.push({display: 'Контакты', href: '/contacts'})
    if(location.pathname.includes(routePath.FAVORITES)) crumbs.push({display: 'Избранные', href: '/favorites'})
    if(location.pathname.includes(routePath.HELP)) crumbs.push({display: 'Помощь', href: '/help'})
    if(location.pathname.includes(routePath.PRIVACY_POLICY)) crumbs.push({display: 'Политика конфиденциальности', href: '/privacy-police'})
    if(location.pathname.includes('result-search')) crumbs.push({display: `Результаты поиска: ${paramName ? paramName : ''}`, href: '/result-search'})
    if(location.pathname.includes('/detail-product')) {crumbs.push({display: objInfo, href: ``})}
    if(location.pathname.includes('/sale-creator')) {crumbs.push({display: objInfo, href: ``});}
    return crumbs

}

export default CompleteNameCrumb;