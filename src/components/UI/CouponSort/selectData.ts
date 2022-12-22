import { ICoupon } from "../../../types/app.interface";

export interface ISelectObj {
    dataValue: string;
    display: string;
    id: number;
    element:string
    order:number;
}

export const selectArr: ISelectObj[] = [
    {
        dataValue: 'letter',
        display: 'По алфавиту',
        id:1,
        element:'title',
        order:1
    },
    {
        dataValue: 'priceUp',
        display: 'По цене (низкая > высокая)',
        id:2,
        element:'price',
        order:1
    },
    {
        dataValue: 'priceDown',
        display: 'По цене (высокая > низкая)',
        id:3,
        element:'price',
        order:-1
    }
]

export const betterSort = (arr:ICoupon[],number:number,elem:string) =>{
    return arr.sort((a:any,b:any) =>{
      const first = isNaN(+a[elem]) ? a[elem] : +a[elem]
      const second = isNaN(+a[elem]) ? b[elem] : +b[elem]

        if (first > second) return number
        else if (second > first) return -number
        return 0
    })
};

