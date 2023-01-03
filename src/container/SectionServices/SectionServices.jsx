import React from 'react'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import CardService from '../CardService/CardService'
// Data
import dbEnglish from "../../data/dbEnglish.json"

import './SectionServices.css'

const SectionServices = () => {

    const sectionServices = dbEnglish.components.SectionServices

    return (
        <section className="services section" id="services">
            <HeaderComponent data={sectionServices.HeaderComponent} />
            <div className="services__container container grid">
                {sectionServices.Services && sectionServices.Services.map((service, index) => (
                    <CardService key={`${service.title.replace(" ", "-")}-${index}`} data={service} />
                ))}
            </div>
        </section>
    )
}

export default SectionServices