import React, { useContext } from 'react'
import './styles/ContactInfo.css'
import { GlobalContext } from '../GlobalState'

const ContactInfo = () => {
  const { checkLan } = useContext(GlobalContext)

  return (
    <section className='contact-info'>
      <div className="contact-details">
        <h3>{checkLan('Locație', 'Location')}:</h3>
        <p>Str. Plantelor Nr. 17, IAȘI 700680</p>
      </div>
      <div className="contact-details">
        <h3>Program:</h3>
        <p>{checkLan('Luni - Vineri', 'Monday - Friday')}: 8:00 - 13:00</p>
      </div>
      <div className="contact-details">
        <h3>{checkLan('Telefon', 'Phone number')}:</h3>
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
