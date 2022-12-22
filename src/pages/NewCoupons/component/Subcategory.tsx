import  { FC, useEffect, useState } from 'react'
import { _TAG_ } from '../../../data/consts';
import HttpRequests from '../../../utils/httpRequests';
import { subcategoryList } from '../../../utils/temporaryData/subcategory-data'

type Props = {
    activeSubcategory:number;
    setActiveSubcategory:any;
}

type tagsType = {
    id?:number;
    title?:string;
}

const Subcategory:FC <Props> = ({setActiveSubcategory,activeSubcategory}) => {
    const [tagsData,setTagsData] = useState<tagsType[]>([])

    useEffect(() => {
        HttpRequests.getData(_TAG_).then(el => {
            setTagsData(el)
        })
    },[])

  return (
        <div className="new-coupons__category-list">
            {tagsData.map((el,index) => {
                return <div 
                key={index}
                className={activeSubcategory === el.id ? 'new-coupons__category-active-item' : 'new-coupons__category-item'}
                onClick={() => setActiveSubcategory(el.id)}
                >
                {el.title}
                </div>
            })}
        </div>
  )
}

export default Subcategory