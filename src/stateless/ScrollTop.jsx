import React from 'react'
import { BsArrowUpShort } from 'react-icons/bs'
import './ScrollTop.css'

const ScrollTop = () => {

  function clickHandler(e) {
    e.preventDefault();
    const scrollUp = document.getElementById('scroll-up');
    if (scrollUp) {
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    }
  }


  return (
    <p className="scrollup" id="scroll-up" onClick={clickHandler} >
      <BsArrowUpShort className="uil scrollup__icon" />
    </p>
  )
}

export default ScrollTop