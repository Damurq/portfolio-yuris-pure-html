import React from 'react'
import CardSkills from '../../container/CardSkills/CardSkills'
import CardAboutMe from '../../container/CardAboutMe/CardAboutMe'
import CardPresentation from '../../container/CardPresentation/CardPresentation'
import ScrollTop from '../../stateless/ScrollTop'
import CardQualification from '../../container/CardQualification/CardQualification'
import Contact from '../../container/CardContact/CardContact'
import SectionServices from '../../container/SectionServices/SectionServices'
import Message from '../../components/Message/Message'

const Home = () => {
    return (
        <React.Fragment>
            <CardPresentation />
            <CardAboutMe />
            <CardSkills />
            <CardQualification />
            <SectionServices />
            <Message />
            <Contact />
            <ScrollTop />
        </React.Fragment>
    )
}

export default Home