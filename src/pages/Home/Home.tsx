import {FC, useEffect, useMemo, useState} from 'react'
import Category from './components/Category/Category'
import HomeGalery from './components/HomeGalery'
import Coupons from '../../components/Coupons/Coupons'
import HttpRequests from '../../utils/httpRequests'
import { _COUPONS_ALL_ } from '../../data/consts'
import './Home.scss'

const Home: FC = () => {
  const [couponList, setCouponList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const couponResponse = await HttpRequests.getData(_COUPONS_ALL_)

      setCouponList(couponResponse.results)
      setIsLoading(false)
    }
    fetchData()
      .catch(e => console.log(e))
  }, [])

  return (
    <div className={"home"}>
      <div className="container">
        <Category setCouponList={setCouponList} />
        <Coupons title='Новые купоны' couponsArr={couponList} isLoading={isLoading} isLink={true}/>
        <HomeGalery />
      </div>
    </div>
  )
}

export default Home