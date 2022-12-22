import { FC, useState } from 'react'
import { ICoupon } from '../../../types/app.interface'
import './CouponSort.scss'
import { betterSort, selectArr } from './selectData'

interface CouponSortProps {
    coupons: ICoupon[]
    setCoupons:any
}

const CouponSort: FC<CouponSortProps> = ({coupons,setCoupons}) => {

    const [dropDown, setDropDown] = useState<boolean>(false);
    const [activeItem, setActiveItem] = useState<number>(0);
    const closeDrop = () => {setDropDown(false)};
    
    const selectSort = (order:number,element:string,id:number) => {
        const cloneCoupons = [...coupons]
        betterSort(cloneCoupons,order,element)
        setCoupons(cloneCoupons)
        setActiveItem(id)
    }

    return (
        <div 
            className={`sort-coupons ${!dropDown ? '' : 'sort-coupons--drop'}`}
            onClick={closeDrop}
        >
            <span 
                className='sort-coupons__select'
                onClick={(e) => {
                    e.stopPropagation();
                    setDropDown(!dropDown);
                }}
            >
                Сортировать по ▾
            </span>
            <ul className='sort-coupons__list'>
                {
                    selectArr.map(obj => 
                        <li 
                            key={obj.id}
                            className={`sort-coupons__item ${activeItem !== obj.id ? '' : 'sort-coupons__item--active'}`}
                            onClick={() => selectSort(obj.order,obj.element,obj.id)}
                        >
                                {obj.display}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default CouponSort