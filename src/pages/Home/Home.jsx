import React from 'react'
import CardAboutMe from '../../container/CardAboutMe/CardAboutMe'
import CardPortfolio from '../../container/CardPortfolio/CardPortfolio'
import CardPresentation from '../../container/CardPresentation/CardPresentation'
import CardQualification from '../../container/CardQualification/CardQualification'
import CardSkills from '../../container/CardSkills/CardSkills'
import Contact from '../../container/CardContact/CardContact'
import Message from '../../components/Message/Message'
import ScrollTop from '../../stateless/ScrollTop'
import SectionServices from '../../container/SectionServices/SectionServices'

const Home = () => {
    return (
        <>
            <CardPresentation />
            <CardAboutMe />
            <CardSkills />
            <CardQualification />
            <SectionServices />
            {/* <CardPortfolio /> */}
            <Message />
            <Contact />
            <ScrollTop />
        </>
    )
}

export default Home