import { FC, useEffect, useState } from 'react'
import { phoneCodesList } from '../../../utils/temporaryData/phoneCodes'
import './SelectNumberCode.scss'

interface SelectNumberCodeProps {
    setNumberCode?: any
}

const SelectNumberCode: FC<SelectNumberCodeProps> = ({setNumberCode}) => {

    const [arrCode, setArrCode] = useState(phoneCodesList);
    const [dropDown, setDropDown] = useState(false);

    const selectCode = (e: any) => {
        const clickTab =  e.currentTarget.dataset.phoneId;
        
        setArrCode((prevState: any) => 
            prevState.map((obj: any) => {
                if(obj.id === +clickTab) {
                    return { ...obj, active: true }
                }
                else {return { ...obj, active: false }}
            })
        )
        setDropDown(false)
    }

    useEffect(() => {
        const currentCode = arrCode.find(obj => obj.active)?.code;
        setNumberCode(currentCode);
    }, [arrCode])

  return (
    <div  
        className={`select-number-code ${dropDown ? 'select-number-code--drop' : ''}`}
        onClick={() => setDropDown(!dropDown)}
    > 
        <ul className='select-number-code__list'>
            {
                arrCode.map(obj => 
                    <li
                        className={`select-number-code__item ${obj.active ? 'select-number-code__item--active' : ''}`}
                        key={obj.id}
                        onClick={selectCode}
                        data-phone-id={obj.id}
                        data-phone-code={obj.code}
                    >
                        <img src={obj.icon} alt={obj.country} />
                        <span> {obj.code}</span>
                    </li>  
                )
            }
        </ul>  
        {/* <b>▾</b> */}
    </div>
  )
}

export default SelectNumberCode