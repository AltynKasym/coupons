import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import womanWithPink from '../../../assets/images/main-before-footer/womanWithPink.svg';
import womanAndText from '../../../assets/images/main-before-footer/womanAndText.svg';
import funnyPeople from '../../../assets/images/main-before-footer/funnyPeople.svg';
import sale70 from '../../../assets/images/main-before-footer/sale70.svg';
import { FC } from 'react';


interface HomeGaleryProps {}

const HomeGalery: FC<HomeGaleryProps> = () => {
    const imgObj = [
        womanAndText,
        womanWithPink,
        womanAndText,
        womanWithPink,
        womanAndText,
        womanWithPink,
    ]

  return (
    <div className="home__end">
        <Swiper modules={[Pagination,Autoplay]} tag='section' effect='fade' wrapperTag='ul' spaceBetween={5} pagination={{clickable:true}} autoplay={{delay:3000,disableOnInteraction: false}}>
            {
                imgObj.map((el,index) => 
                    <SwiperSlide key={`slide-${index}`} tag='li' >
                        <img src={el} alt="error" className='home__end-slide' />
                    </SwiperSlide>
                )
            }
        </Swiper>
        <div className="home__end-imgs">
            <img src={sale70} alt="error"  className='home__end-img'/>
            <img src={funnyPeople} alt="error"  className='home__end-img'/>
            <img src={funnyPeople} alt="error"  className='home__end-img'/>
        </div>
    </div>
  )
}

export default HomeGalery