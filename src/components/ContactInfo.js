import React from 'react'
import './styles/ContactInfo.css'

const ContactInfo = () => {
  return (
    <section className='contact-info'>
      <div className="contact-details">
        <h3>Locație:</h3>
        <p>Str. Plantelor Nr. 17, IAȘI 700680</p>
      </div>
      <div className="contact-details">
        <h3>Program:</h3>
        <p>Luni - Vineri: 8:00 - 13:00</p>
      </div>
      <div className="contact-details">
        <h3>Telefon:</h3>
        <p><span>0231 222 690</span>  <span>0742 457 009</span></p>
      </div>
      <div className="contact-details">
        <h3>Email:</h3>
        <p>paideusis@yahoo.com</p>
      </div>
    </section>
  )
}

export default ContactInfo
