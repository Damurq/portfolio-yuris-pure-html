import React from 'react'
// Local
import Skill from '../../components/Skill/Skill'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
// Data
import dbEnglish from "../../data/dbEnglish.json"
// Style
import './CardSkills.css';

const CardSkills = () => {

    const cardskills = dbEnglish.components.CardSkills

    return (
        <section className="skills section" id="skills">
            <HeaderComponent data={cardskills.HeaderComponent} ></HeaderComponent>
            <div className="skills__container container grid">
                {cardskills.skills.map((option) => (
                    <Skill data={option} key={`${option.name}`}></Skill>
                ))}
            </div>
        </section>
    )
}

export default CardSkills