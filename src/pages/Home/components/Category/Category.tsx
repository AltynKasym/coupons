import obj from '../../../../utils/temporaryData/category-img-object';
import CategoryItem from './CategoryItem';
import { FC, useEffect, useState } from 'react'
import './Category.scss'
import HttpRequests from '../../../../utils/httpRequests';
import { _CATEGORIES_ } from '../../../../data/consts';

interface CategoryProps {
    setCouponList:any;
}

const Category: FC<CategoryProps> = ({setCouponList}) => {

    const [activeCategory,setActiveCategory] = useState(0);

    useEffect(() => {
        HttpRequests.getData(`http://185.178.44.117/api/v1/coupons/subcategory/${activeCategory}/`).then(el => {
            setCouponList(el.results)
        })
    },[activeCategory])

    return (
        <ul className="home__category">
            {
                obj.map((el,index) => 
                    <CategoryItem 
                        onClick={setActiveCategory} 
                        id={el.id} 
                        key={index} 
                        img={activeCategory !== el.id ? el.img : el.activeImg} 
                        title={el.title}
                        activeImg={el.activeImg}
                    />
                )
            }
        </ul>
    )
}

export default Category