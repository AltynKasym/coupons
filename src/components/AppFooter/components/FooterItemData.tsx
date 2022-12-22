import ok from '../../../assets/images/footer-icon/ok.svg';
import vk from '../../../assets/images/footer-icon/vk.svg';
import inst from '../../../assets/images/footer-icon/inst.svg';
import facebook from '../../../assets/images/footer-icon/facebook.svg';
import mail from  '../../../assets/images/footer-icon/mail.svg';
import phone from  '../../../assets/images/footer-icon/phone.svg';

export type itemsType = {
    subtitle: string,
    path: string,
    img?:string;
}
type objs = {
    title:string;
    items: itemsType[],
    isLink:boolean;
}

const obj: objs[] = [
    {
        title:'Покупателям',
        items:[
            {subtitle:'Как сделать заказ',path:'/help'},
            {subtitle:'Способы оплаты',path:'/help'},
            {subtitle:'Вопросы и ответы',path:'/help'},
            {subtitle:'Политика конфиденциальности',path:'/privacy-policy'},
        ],
        isLink:true
    },
    {
        title:'Компания',
        items:[
            {subtitle:'О нас',path:'/about-us'},
            {subtitle:'Контакты',path:'/contacts'},
            
        ],
        isLink:true
    },
    {
        title:'Мы в соц сетях',
        items:[
            {subtitle:'Вконтакте',path:'https://www.vk.com',img:vk},
            {subtitle:'Facebook',path:'https://www.facebook.com',img:facebook},
            {subtitle:'Одноклассники',path:'https://www.ok.ru',img:ok},
            {subtitle:'Instagram',path:'https://www.instagram.com',img:inst},
        ],
        isLink:false
    },
    {
        title:'Свяжитесь с нами',
        items:[
            {subtitle:'mail#mix.kg',path:'mailto:mail#mix.kg',img:mail},
            {subtitle:'+996 555 55 55 55',path:'tel:+996555555555',img:phone},
        ],
        isLink:false
    },
]


export default obj