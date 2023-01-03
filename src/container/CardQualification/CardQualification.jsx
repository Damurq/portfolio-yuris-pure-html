import React from 'react'
//Local
import ContainerQualification from '../ContainerQualification/ContainerQualification'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
// Data
import dbEnglish from "../../data/dbEnglish.json"

const CardQualification = () => {

    const cardQualification = dbEnglish.components.CardQualification
    return (
        <section className="qualification section">
            <HeaderComponent data={cardQualification.HeaderComponent} />
            <ContainerQualification data={cardQualification.elements} />
        </section>
    )
}

export default CardQualification