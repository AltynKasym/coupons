import favoriteIcon from '../../assets/images/header/header-favorite.svg';
import couponIcon from '../../assets/images/header/header-coupon.svg';

export const userLinksArrFunc = (userRoute: any) => [
    {route: '/favorites', image: favoriteIcon, title: 'Избранное'},
    {route: '/my-coupons', image: couponIcon, title: 'Мои купоны'},
    {...userRoute},
]