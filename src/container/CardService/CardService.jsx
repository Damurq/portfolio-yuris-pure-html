import React, { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

import ServiceModal from '../../components/ServiceModal/ServiceModal'
import IconsComponent from '../../components/IconsComponent/IconsComponent'

import './CardService.css'

const CardService = ({ data }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="services__content">
            <div>
                <IconsComponent icon={data.icon} className={"uil services__icon"} />
                <h3 className="services__title">{data.title}</h3>
            </div>
            <span className="button button--flex button--small button--link services__button" onClick={() => { setOpen(true) }}>
                View More
                <AiOutlineArrowRight className="uil button__icon" />
            </span>
            <div className={`services__modal ${open ? "active-modal" : ""}`}>
                <ServiceModal data={data} openModal={setOpen} />
            </div>
        </div>
    )
}

export default CardService