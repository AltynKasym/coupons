import kgIcon from '../../assets/icons/countryIcon/kg.png';
import kzIcon from '../../assets/icons/countryIcon/kz.png';
import uzIcon from '../../assets/icons/countryIcon/uz.png';
import ruIcon from '../../assets/icons/countryIcon/ru.png';
import trIcon from '../../assets/icons/countryIcon/tr.png';

export interface IPhoneCodesObj {
    id: number;
    active: boolean;
    code: string;
    country: string;
    icon: any;
}

export const phoneCodesList: IPhoneCodesObj[] = [
    {
        id: 1,
        active: true,
        code: '+996',
        country: 'KG',
        icon: kgIcon
    },
    {
        id: 2,
        active: false,
        code: '+7',
        country: 'KZ',
        icon: kzIcon
    },
    {
        id: 3,
        active: false,
        code: '+998',
        country: 'UZ',
        icon: uzIcon
    },
    {
        id: 4,
        active: false,
        code: '+90',
        country: 'TR',
        icon: trIcon
    },
    {
        id: 5,
        active: false,
        code: '+7',
        country: 'RU',
        icon: ruIcon
    }
]