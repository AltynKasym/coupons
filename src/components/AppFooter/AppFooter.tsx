import { FC } from 'react'
import './AppFooter.scss'
import FooterItem from './components/FooterItem'
import FooterItemObj from './components/FooterItemData';

const AppFooter: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__list">
           {FooterItemObj.map((el,index) => {
            return <FooterItem key={index} isLink={el.isLink} title={el.title} itemData={el.items} />
           })}
        </div>
      </div>
    </footer>
  )
}

export default AppFooter