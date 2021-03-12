import React from 'react'
import './styles/Footer.css'
import { Link } from 'react-router-dom'
import FaceBookIcon from '../icons/facebook-icon.svg'

const Footer = () => {
  return (
    <footer className='container-fluid'>
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-8 col-md-7 col-sm-10 col-9">
          <Link to='/' style={{ color: '#641924' }} className='home-link'>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>Paideusis International Centre of Education</h2>
          </Link>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-1 d-flex align-items-center justify-content-between">
          <Link className='footer-link' to='/about'>Despre noi</Link>
          <Link className='footer-link' to='/admissions'>Înscrieri</Link>
          <Link className='footer-link' to='/contact'>Contact</Link>
        </div>
        <a href="https://www.facebook.com/FundatiaDeCaritatePaideusis/" className='col-lg-1 col-md-1 col-sm-1 col-2' target='_blank' rel="noreferrer">
          <img src={FaceBookIcon} alt="facebook icon" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
