import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../GlobalState'
import './styles/Contact.css'
import emailjs from 'emailjs-com'
import Map from '../components/Map'

const Contact = () => {
  const { changePage } = useContext(GlobalContext);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    changePage('contact');
  }, [changePage]);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "yahoo-paideusis",
        "template_ulybwpg",
        e.target,
        "user_PiNDWWN24bVU86kpVTjnk"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((err) => {
        console.log(err.text);
      });
    setEmailSent(true);
    e.target.reset();
  }

  return (
    <section id='contact'>
      <div className="container-fluid">
        <div className="row align-items-center">
          <form className="col-md-6 col-sm-12" onSubmit={e => sendEmail(e)}>
            <h1>Trimite un mesaj</h1>
            <div className="form-group">
              <label htmlFor="name">Nume, Prenume:</label>
              <input type="text" name='name' id='name' required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" name='email' id='email' required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesaj:</label>
              <textarea type="text" name='message' id='message' cols='50' rows='5' required></textarea>
            </div>
            <button type="submit" className="btn">Trimite</button>
            {emailSent && (
              <p style={{ fontSize: 'calc(.5vw + .5rem)', marginTop: 'calc(1vw + 1rem)' }}>Email sent</p>
            )}
          </form>
          <div className="col-md-1 col-sm-12"></div>
          <div className="col-md-5 col-sm-12 map">
            <Map />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
