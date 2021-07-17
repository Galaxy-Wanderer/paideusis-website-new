import React, { useContext, useEffect, useRef } from 'react'
import Studying from '../images/studying.png';
import './styles/About.css'
import { GlobalContext } from '../GlobalState'
import Map from '../images/map.svg'
import happyBoy from '../images/happy-boy.png';
import { Link } from 'react-router-dom'

const About = ({ location }) => {
  const { changePage, checkLan } = useContext(GlobalContext);
  const advantages = useRef();

  if (location.hash === '#advantages' && advantages.current) {
    advantages.current.scrollIntoView();
    console.log('');
  }

  useEffect(() => {
    changePage('about');
  }, [changePage]);

  return (
    <section id='about'>
      <section className="landing container-fluid">
        <div className="row align-items-center">
          <div className="text col-lg-7 col-sm-12">
            <h1>{checkLan('Despre noi', 'About us')}</h1>
            <p>{checkLan('Centrul Educațional Paideusis funcționează de peste 25 de ani în Iași. Este înființat de către Fundația de caritate Paideusis ( "Paideusis" este un cuvânt din  limba greacă care înseamnă locul creșterii și al învățării copilului. )', 'The Paideusis Educational Center has been operating in Iasi for over 25 years. It is founded by the Paideusis Charity Foundation ("Paideusis" is a Greek word meaning the place where a child grows up and learns.)')}<br />
              {checkLan('Din anul 2020, Centrul Educațional Paideusis  oferă servicii educaționale elevilor înscriși la Școala King of Kings din Anglia, în programul de învățare la distanță.', 'From 2020, the Paideusis Educational Center offers educational services to students enrolled in the King of Kings School in England, in the distance learning program.')}<br />
              {checkLan('Programa școlară A.C.E. (Accelerated Christian Education) folosită de către Centrul Paideusis este furnizată de către Christian Education Europe (C.E.E.). Această  companie educațională monitorizează implementarea programei școlare A.C.E. în Europa. A.C.E. este concepută pentru a fi parcursă în mod individual.', 'The A.C.E. (Accelerated Christian Education) used by the Paideusis Center is provided by Christian Education Europe (C.E.E.). This educational company monitors the implementation of the A.C.E. in Europe. A.C.E. it is designed to be traversed individually.')}<br />
              {checkLan('La Centrul Educațional Paideusis, elevii beneficiază de ajutorul necesar pentru realizarea obiectivelor școlare, asistați fiind de personal calificat. De asemenea, ei participă la diferite activități colective, într-o atmosferă plăcută și antrenantă, îmbinând noțiunile teoretice cu practica și creativitatea. În acest mod, elevilor li se creează condiții să exceleze și să se dezvolte armonios.', 'At the Paideusis Educational Center, students benefit from the help needed to achieve school goals, assisted by qualified staff. They also participate in various collective activities, in a pleasant and engaging atmosphere, combining theoretical notions with practice and creativity. In this way, students are created conditions to excel and develop harmoniously.')}<br />

            </p>
          </div>
          <div className="col-lg-1 col-sm-12"></div>
          <div className="col-lg-4 col-sm-12">
            <img src={Studying} alt="studying" className='mx-auto' />
          </div>
        </div>
      </section>

      <section className="advantages container-fluid" ref={advantages}>
        <h1 className="text-center font-weight-bold" id='advantages'>{checkLan('Beneficii', 'Advantages')}</h1>
        <div className="row align-items-center">
          <div className="col-lg-1 col-md-12"></div>
          <div className="col-lg-3 col-md-12">
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>{checkLan('Educație bazată pe principii și valori creștine', 'Education based on Christian principles and values')}</span></p>
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>{checkLan('Curriculum testat de-a lungul a peste 40 de ani în peste 100 de țări', 'Curriculum tested over 40 years in over 100 countries No homework stress')}</span></p>
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>{checkLan('Fără stresul temelor', 'No homework stress')}</span></p>
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>{checkLan('Metode de instruire orientate pe nivel de studiu, nu pe clasă', 'Training methods oriented on study level, not on class')}</span></p>
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>{checkLan('Educatori atestați, cu experiență în formarea educațională', 'Certified educators with experience in educational training')}</span></p>
          </div>
          <div className="col-lg-1 col-md-12"></div>
          <div className="col-lg-2 col-md-12">
            <img src={happyBoy} alt="happy-boy" className='mx-auto' />
          </div>
          <div className="col-lg-1 col-md-12"></div>
          <div className="col-lg-3 col-md-12">
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>{checkLan('Formarea caracterului', 'Character building')}</span></p>
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>{checkLan('Dobândirea competențelor de comunicare în două limbi (engleză-română)', 'Acquisition of communication skills in two languages (English-Romanian)')}</span></p>
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>{checkLan('Pregătire pentru susținerea examenelor internaționale SAT și GED', 'Preparation for the SAT and GED international exams')}</span></p>
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>{checkLan('Socializare pozitivă', 'Positive socialization')}</span></p>
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>{checkLan('Mediu protejat', 'Protected environment')}</span></p>
          </div>
          <div className="col-lg-1 col-md-12"></div>
        </div>
      </section>

      <section className="centres">
        <h1 className='text-center'>{checkLan('Centre A.C.E. în România', 'A.C.E. Centres in Romania')}</h1>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12">
              <img src={Map} alt="map" className='w-100' />
            </div>
            <div className="col-md-1 col-sm-12"></div>
            <div className="col-md-5 col-sm-12">
              <div className="centre">
                <Link to='/'><h2>Paideusis International - Iași</h2></Link>
                <p>(004) 0742 457 009</p>
              </div>
              <div className="centre">
                <a href='https://adamanteducation.com/'><h2>Adamant International - Câmpina</h2></a>
                <p>(004) 0741 170 282</p>
              </div>
              <div className="centre">
                <h2>Faith - Cernica</h2>
                <p>(004) 0741 170 282</p>
              </div>
              <div className="centre">
                <h2>Forever Kids - Bran</h2>
                <p>(004) 0741 170 282</p>
              </div>
              <div className="centre">
                <h2>Little Lights - Bacău</h2>
                <p>(004) 0746 955 266</p>
              </div>
              <div className="centre">
                <h2>Eden Learning Centre - Băicoi</h2>
                <p>(004) 0742 120 886</p>
              </div>

              <div className="centre">
                <h2>Timothy - Satu Mare (Suceava)</h2>
                <p>(004) 0746 097 403</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default About