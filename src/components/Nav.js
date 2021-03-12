import React, { useState, useContext } from 'react'
import Logo from '../images/logo.svg';
import './styles/Nav.css'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../GlobalState'

const Nav = () => {
  const [navActive, setNavActive] = useState(false);
  const [shadow, setShadow] = useState(false)
  const { page } = useContext(GlobalContext) 
  
  window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  })

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${shadow && 'shadow'}`}>
      {/* need to add shadow when scrolling down */}
      <Link onClick={() => setNavActive(false)} to='/' className='navbar-brand'>
        <img src={Logo} alt="logo" />
      </Link>
      <div className={`navbar-nav font-weight-bold ml-auto ${navActive ? 'active' : null}`}>
        <Link onClick={() => setNavActive(false)} to='/' className={`nav-link ${page === 'home' && 'active'}`}>Acasă</Link>
        <Link onClick={() => setNavActive(false)} to='/despre-noi' className={`nav-link ${page === 'about' && 'active'}`}>Despre noi</Link>
        <Link onClick={() => setNavActive(false)} to='/curriculum' className={`nav-link ${page === 'curriculum' && 'active'}`}>Curriculum</Link>
        <Link onClick={() => setNavActive(false)} to='/înscrieri' className={`nav-link ${page === 'admissions' && 'active'}`}>Înscrieri</Link>
        <Link onClick={() => setNavActive(false)} to='/contact' className={`nav-link ${page === 'contact' && 'active'}`}>Contact</Link>
      </div>
      <button className="burger" onClick={() => setNavActive(!navActive)}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </nav>
  )
}

export default Nav
