import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
// Data
import dbEnglish from "../../data/dbEnglish.json"
import imgSrc from '../../assets/img/project.png'
// Style
import "./Message.css";

const Message = (section) => {

    const message = dbEnglish.components.Message

    return (
        <section className="project section">
            <div className="project__bg">
                <div className="project__container container grid">
                    <div className="project__data">
                        <h2 className="project__title">{message.title}</h2>
                        <p className="project__description">
                        {message.description}
                        </p>
                        <a href="#contact" className="button button--flex button--white">
                            Contact 
                            <AiOutlineSend className="uil project__icon button__icon" />
                        </a>
                    </div>
                    <img src={imgSrc} alt="" className="project__img" />
                </div>
            </div>
        </section>

    )
}

export default Message