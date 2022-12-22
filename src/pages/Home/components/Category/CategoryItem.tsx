import { FC, useState } from 'react'

interface CategoryItemProps {
    onClick:any;
    img:any;
    title:string;
    id:number;
    activeImg:any;
}

const CategoryItem : FC <CategoryItemProps> = ({activeImg,img,title,onClick,id}) => {
    
    const activatingItem = () => onClick(id);
    const [isHover,setIsHover] = useState(false)

    return (
        <li onClick={activatingItem} className="home__category-item">
            <div className='home__category-img-block' onMouseEnter={() => { setIsHover(true)}} onMouseLeave={() => { setIsHover(false)}}>
                <img src={isHover ? activeImg : img} alt="error" className='home__category-img' />
            </div>
            <div className="home__category-title">{title}</div>
        </li>
    )
}

export default CategoryItem