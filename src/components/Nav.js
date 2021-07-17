import React, { useState, useContext } from 'react'
import Logo from '../images/logo.svg';
import './styles/Nav.css'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../GlobalState'

const Nav = () => {
  const [navActive, setNavActive] = useState(false);
  const [shadow, setShadow] = useState(false)
  const { page, changeLan, checkLan } = useContext(GlobalContext)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  })

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${shadow && 'shadow'}`} style={{ background: shadow ? '#F5F3E4' : '#fdfbec' }}>
      <Link onClick={() => setNavActive(false)} to='/' className='navbar-brand'>
        <img src={Logo} alt="logo" />
      </Link>
      <div className={`navbar-nav font-weight-bold ml-auto ${navActive ? 'active' : null}`}>
        <Link onClick={() => setNavActive(false)} to='/' className={`nav-link ${page === 'home' && 'active'}`}>{checkLan('Acasă', 'Home')}</Link>
        <Link onClick={() => setNavActive(false)} to='/despre-noi' className={`nav-link ${page === 'about' && 'active'}`}>{checkLan('Despre noi', 'About us')}</Link>
        <Link onClick={() => setNavActive(false)} to='/curriculum' className={`nav-link ${page === 'curriculum' && 'active'}`}>Curriculum</Link>
        <Link onClick={() => setNavActive(false)} to='/înscrieri' className={`nav-link ${page === 'admissions' && 'active'}`}>{checkLan('Înscrieri', 'Admissions')}</Link>
        <Link onClick={() => setNavActive(false)} to='/contact' className={`nav-link ${page === 'contact' && 'active'}`}>Contact</Link>
        <div className="nav-link" style={{ display: 'flex', alignItems: 'baseline' }}>
          <div style={{ marginRight: '.5rem' }}>RO</div>
          <div className="custom-control custom-switch">
            <input checked={checkLan(false, true)} onChange={() => changeLan()} style={{ width: '50px' }} type="checkbox" className="custom-control-input" id="customSwitch1" />
            <label className="custom-control-label" htmlFor="customSwitch1">EN</label>
          </div>
        </div>
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
