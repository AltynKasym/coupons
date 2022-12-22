import "./MobileSearchInput.scss"

import {FC} from "react";
import HeaderForm from "../HeaderForm/HeaderForm";

interface MobileSearchInputProps {
  isSearchingActive: boolean
  setIsSearchingActive: any
}

const MobileSearchInput: FC<MobileSearchInputProps> = ({isSearchingActive, setIsSearchingActive}) => {
  const onOutsideClick = (event: any) => {
    const target = event.target as Element
    if (!target.closest('.header-form') && isSearchingActive) {
      setIsSearchingActive(false)
      document.body.classList.remove('modal_active-js')
    }
  }

  return (
    <div onClick={onOutsideClick} className={'search-state'}>
      <HeaderForm isFormForMobile={true}/>
    </div>
  )
}

export default MobileSearchInput