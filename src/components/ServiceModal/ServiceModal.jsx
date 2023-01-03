import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { BsCheckCircle } from 'react-icons/bs'
import './ServiceModal.css'

const ServiceModal = ({ data, openModal }) => {
  return (
      <div className="services__modal-content">
        <div>
          <h4 className="services__modal-title">{data.title}</h4>
          <FaTimes className="uil services__modal-close" onClick={() => { openModal(false) }}/>
        </div>
        <ul className="services__modal-services grid">
          {data.elements && data.elements.map((element, index) => (
            <li key={`${data.title.replace(" ", "-")}-element-${index}`} className="services__modal-service">
              <BsCheckCircle className="uil services__modal-icon" />
              <p>
                {element}
              </p>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default ServiceModal