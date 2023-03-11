// Third party
import React from 'react'
import { FiDownload } from 'react-icons/fi'
// Local
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import about_img from "../../assets/img/about.png"
// Data
import dbEnglish from "../../data/dbEnglish.json"
// Style
import "./CardAboutMe.css";

const CardAboutMe = () => {
    const cardaboutme = dbEnglish.components.CardAboutMe

    return (
        <section className="about section" id="about">
            <HeaderComponent data={cardaboutme.HeaderComponent} ></HeaderComponent>
            <div className="about__container container grid">
                <img src={about_img} alt="" className="about__img" />
                <div className="about__data">
                    <p className="about__description">
                        {cardaboutme.description}
                    </p>
                    <div className="about__info">
                        {cardaboutme.experience.map((exp,i) => {
                            return (<div key={`${exp.description[i]}-${i}`}>
                                <span className="about__info-title">
                                    {exp.amount}
                                </span>
                                <span className="about__info-name">
                                    {exp.description}
                                </span>
                            </div>)
                        })}
                        <div className="about__buttons">
                            <a download="" href="pdf/Alexa-Cv.pdf" className="button button--flex">
                                Download CV
                                <FiDownload className="uil down__icon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardAboutMe