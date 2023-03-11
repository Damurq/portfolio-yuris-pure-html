import React from 'react'
import './CardPortfolio.css'

const CardPortfolio = () => {
    let srcImg = "../../assets/img/about.png"

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <spam className="section__subtitle">Most recent work</spam>

            <div className="portfolio__container container swiper">
                <div className="swiper-wrapper">
                    <div className="portfolio__content grid swiper-slide">
                        <img src={srcImg} alt="" className="portfolio__img" />
                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Modern Website</h3>
                                <p className="portfolio_description">Website adaptable to all devices, with ui components and
                                    animated interactions.</p>
                                <a href="#demo" className="button button--flex button__small portfolio__button">
                                    Demo
                                    <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                    </div>
                    <div className="portfolio__content grid swiper-slide">
                        <img src={srcImg} alt="" className="portfolio__img" />
                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Modern Website</h3>
                                <p className="portfolio_description">Website adaptable to all devices, with ui components and
                                    animated interactions.</p>
                                <a href="#demo" className="button button--flex button__small portfolio__button">
                                    Demo
                                    <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                    </div>
                    <div className="portfolio__content grid swiper-slide">
                        <img src={srcImg} alt="" className="portfolio__img" />
                            <div className="portfolio__data">
                                <h3 className="portfolio__title">Modern Website</h3>
                                <p className="portfolio_description">Website adaptable to all devices, with ui components and
                                    animated interactions.</p>
                                <a href="#demo" className="button button--flex button__small portfolio__button">
                                    Demo
                                    <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                            </div>
                    </div>
                </div>
                <div className="swiper-button-next">
                    <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
                </div>
                <div className="swiper-button-prev">
                    <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    )
}

export default CardPortfolio