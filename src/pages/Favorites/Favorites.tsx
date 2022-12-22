import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb'
import Coupons from '../../components/Coupons/Coupons'
import {useAppSelector} from "../../hooks/reduxHook"
import "./Favorites.scss"

const Favorites = () => {
  const favoriteList = useAppSelector(state => state.favoriteSlice.favoriteList)

  return (
    <div className='favorites'>
      <Breadcrumb/>
      <div className='favorites__body container'>
        {
          favoriteList.length > 0
            ? <Coupons couponsArr={favoriteList} title={'Избранное'} isCouponsSort={true}/>
            : <h3 className="favorites__title">Нет избранных</h3>
        }
      </div>
    </div>
  )
}

export default Favorites