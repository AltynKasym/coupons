import React, { FC } from 'react'

type Props = {
    logo?:string
    name?:string
    description?:string
}

const CompanyDescription: FC <Props> = ({logo,name,description}) => {
  return (
    <div className="creator__about">
    <div className="creator__logo">
      <img src={logo} alt="error" className="creator__img" />
    </div>
    <div className="creator__description">
      <div className="creator__title">{name}</div>
      <div className="creator__subtitle">
       {description}
      </div>
    </div>
  </div>
  )
}

export default CompanyDescription