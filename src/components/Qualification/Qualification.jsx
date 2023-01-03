import React, { Fragment } from 'react'
import { AiFillCalendar } from 'react-icons/ai'
import './Qualification.css'

const Qualification = ({ data, index }) => {
  return (
    <div className="qualification__data">
      {index % 2 === 0
        ? (<Fragment>
          <div></div>
          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
          <div>
            <h3 className="qualification__title">{data.header}</h3>
            <span className="qualification__subtitle">{data.description}</span>
            <div className="qualification__calendar">
              <AiFillCalendar className="uil" />
              {data.date}
            </div>
          </div>
        </Fragment>)
        : (<Fragment>
          <div>
            <h3 className="qualification__title">{data.header}</h3>
            <span className="qualification__subtitle">{data.description}</span>
            <div className="qualification__calendar">
              <AiFillCalendar className="uil" />
              {data.date}
            </div>
          </div>
          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>
        </Fragment>)}
    </div >
  )
}

export default Qualification