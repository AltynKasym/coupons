import './AppHeader.scss'
import logo from '../../assets/images/header/header-logo.svg'
import searchIcon from '../../assets/images/header/header-search.svg'
import logoutIcon from '../../assets/images/header/header-logout.svg'
import burgerIcon from '../../assets/images/header/header-burger.svg'
import {FC, useEffect, useRef, useState} from "react";
import {Link} from 'react-router-dom'
import HeaderForm from "./components/HeaderForm/HeaderForm";
import NavMenu from "./components/NavMenu/NavItems";
import SideBar from "./components/Sidebar/SideBar";
import MobileSearchInput from "./components/MobileSearchInput/MobileSearchInput";
import { hideShowHeader } from '../../utils/utilsFunctions'
import { useAppSelector } from '../../hooks/reduxHook'
import { userLinksArrFunc } from '../../utils/temporaryData/headerArr'

interface AppHeaderProps {
  username: string 
}

const AppHeader: FC<AppHeaderProps> = ({username}) => {
  const selector = useAppSelector;
  const user = selector(state => state.user.user);
  
  const userRoute = {
    route: user ? '/user-profile' : '/sign-in',
    image: logoutIcon,
    username: user ? user.first_name : 'Войти'
  }

  const [isSidebarOpened, setIsSidebarOpened] = useState<boolean>(false)
  const [isSearchingActive, setIsSearchingActive] = useState<boolean>(false)
  const [userLinksArr, setUserLinksArr] = useState<any>(userLinksArrFunc(userRoute))
  const headerRef = useRef<any>(null);

  
  useEffect(() => {
    hideShowHeader(headerRef);
  }, [])

  useEffect(() => {
    setUserLinksArr(userLinksArrFunc(userRoute));
    console.log(userLinksArr)
  }, [user])

  const onOpenSearchModal = () => {
    setIsSearchingActive(true)
    document.body.classList.add('modal_active-js')
  }

  const onOpenSidebar = () => {
    setIsSidebarOpened(true)
    document.body.classList.add('modal_active-js')
  }

  const onCloseSidebar = () => {
    setIsSidebarOpened(false)
    document.body.classList.remove('modal_active-js')
  }

  return (
    <header className='header'>
      <div className="header__body" ref={headerRef}>
        <div className="header__top-wrapper">
          <div className="header__top container">
            <nav className="header-nav nav">
              <ul className="header-nav__list">
                <NavMenu items={[
                  {route: '/about-us', title: 'О нас'},
                  {route: '/help', title: 'Помощь'},
                  {route: '/contacts', title: 'Контакты'}
                ]} borderRight={false} onCloseSidebar={onCloseSidebar}/>
              </ul>
            </nav>
            <a href={`tel:+996 000 00 00 00`} className="header__phone">
              <span>Тел. для справки:</span> +996 000 00 00 00  
            </a>
          </div>
        </div>

        <div className="header__bottom-wrapper">
          <div className="header__bottom container">
            <button className="header__search-btn--mobile" onClick={onOpenSearchModal}>
              <img src={searchIcon} alt="magnifier" width={30} height={30}/>
            </button>
            {
              isSearchingActive &&
              <MobileSearchInput setIsSearchingActive={setIsSearchingActive}
                          isSearchingActive={isSearchingActive}/>
            }
            <Link to="/" className="header__logo">
              <img src={logo} alt="logotype"/>
            </Link>

            <HeaderForm isFormForMobile={false}/>

            <nav className="header-nav">
              <ul className="header-nav__list">
                <NavMenu items={userLinksArr} borderRight={true} onCloseSidebar={onCloseSidebar}/>
              </ul>
            </nav>
            <button type="button" className="header__burger-btn" onClick={onOpenSidebar}>
              <img src={burgerIcon} alt="burger icon"/>
            </button>
          </div>
        </div>

        <SideBar 
          items={userLinksArr}
          isSidebarOpened={isSidebarOpened} 
          setIsSidebarOpened={setIsSidebarOpened}
        />
      </div>
    </header>
  )
}

export default AppHeader