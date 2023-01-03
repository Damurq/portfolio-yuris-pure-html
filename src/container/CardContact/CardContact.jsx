import React from 'react'
// Components
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import ContactForm from '../../components/ContactForm/ContactForm'
import InformationCard from '../../components/InformationCard/InformationCard'
// Data
import dbEnglish from "../../data/dbEnglish.json"
// Style
import './CardContact.css'

const CardContact = () => {

    const cardContact = dbEnglish.components.Contact

    return (
        <section className="contact section" id="contact">
            <HeaderComponent data={cardContact.HeaderComponent} />
            <div className="contact__container container grid">
                <div>
                    {cardContact.extra.map((data, index) => (
                        <InformationCard data={data} key={`extra-info--contact-${index}`}/>
                    ))}
                </div>
                <ContactForm />
            </div>
        </section>
    )
}

export default CardContact