import { useEffect } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer"

function App() {

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset
      Array.from(sections).forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
      })

      window.addEventListener('scroll', scrollHeader)
      /*==================== SHOW SCROLL UP ====================*/
      window.addEventListener('scroll', scrollUp)
    })
  })

  function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
  }

  /*==================== SHOW SCROLL UP ====================*/
  function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (scrollUp) {
      if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }
  }


  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer />
    </div>
  );
}


export default App;
