// React
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { ImSun } from 'react-icons/im'
import { FaMoon } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineAppstore } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'

import IconsComponent from '../IconsComponent/IconsComponent'
// Locals
import { changeTheme } from "../../features/theme/theme"
// Styles
import "./Navbar.css";
// Data
import dbEnglish from "../../data/dbEnglish.json"

const Navbar = () => {
    // Declaration of the Hooks
    const theme = useSelector((state) => state.theme.currentTheme)
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false)

    const navbar = dbEnglish.components.Navbar

    useEffect(() => {
        if (theme === "LIGHT") {
            document.body.classList.remove('dark-theme')
        }
        else if (theme === "DARK") {
            document.body.classList.add('dark-theme')
        }
    }, [theme])

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#about" className="nav__logo">Yuris</a>
                <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list grid">
                        {navbar.map((section, index) => {
                            return section.type === "Link"
                                ? (<li key={"nav-li-" + index} className="nav__item"><Link className="nav__link active-link" to={section.href}>
                                    <IconsComponent icon={section.icon} className={`nav__icon uil`} /> {section.name}
                                </Link></li>)
                                : (<li key={"nav-li-" + index} className="nav__item"><a className={section.name === "Home" ? "nav__link" : "nav__link active-link"} onClick={() => { setShowMenu(!showMenu) }} href={section.href}>
                                    <IconsComponent icon={section.icon} className={`nav__icon uil`} /> {section.name}
                                </a></li>)
                        })}
                    </ul>
                    <FaTimes className="nav__icon uil nav__close" id="nav-close" onClick={() => { setShowMenu(!showMenu) }} />
                </div>
                <div className="nav__btns">
                    {/* <!-- Theme change button --> */}
                    <p className='change-theme' id="theme-button" onClick={() => dispatch(changeTheme())}>
                        {theme === "LIGHT"
                            ? <ImSun />
                            : <FaMoon />}
                    </p>
                    <div className="nav__toggle" id="nav-toggle" onClick={() => { setShowMenu(!showMenu) }}>
                        <AiOutlineAppstore className="nav__icon uil" />
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Navbar