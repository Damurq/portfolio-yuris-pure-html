import React, { useState } from 'react'
import Qualification from '../../components/Qualification/Qualification'
import IconsComponent from '../../components/IconsComponent/IconsComponent'
import './ContainerQualification.css'

const ContainerQualification = ({ data }) => {

    const QualificationList = Object.keys(data)
    const [currentList, setCurrentList] = useState(QualificationList[0])

    const selectQualification = (e) => {
        setCurrentList(QualificationList[Number(e.currentTarget.id.split('-')[0])])
    }
    return (
        <div className="qualification__container container">
            <div className="qualification__tabs">
                {QualificationList.map((qual, index) => {
                    let className = (qual === currentList) ? "qualification__button button--flex qualification__active" : 'qualification__button button--flex'
                    let element = data[qual]
                    return (
                        <div id={`${index}-${element.header}`} onClick={selectQualification} key={`${index}-${element.header}`} className={className} data-target={element.header.toLowerCase()}>
                            <IconsComponent icon={element.icon} className={`uil qualification__icon`} />
                            {element.header}
                        </div>
                    )
                }
                )}
            </div>

            <div className="qualification__sections">
                {data[currentList].qualifications.map((element, index) => (
                    <div key={`${index}-${element.header}`} className="qualification__content qualification__active" data-content id={element.header.toLowerCase()}>
                        <Qualification data={element} index={index} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContainerQualification