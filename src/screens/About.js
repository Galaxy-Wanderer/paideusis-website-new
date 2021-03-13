import React, { useContext, useEffect, useRef } from 'react'
import Studying from '../images/studying.png';
import './styles/About.css'
import { GlobalContext } from '../GlobalState'
import Map from '../images/map.svg'
import happyBoy from '../images/happy-boy.png';

const About = ({ location }) => {
  const { changePage } = useContext(GlobalContext);
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
            <h1>Despre noi</h1>
            <p>Centrul Educațional Paideusis funcționează de peste 25 de ani în Iași. Este înființat de către Fundația de caritate Paideusis ( "Paideusis" este un cuvânt din  limba greacă care înseamnă locul creșterii și al învățării copilului. )<br />
              Din anul 2020, Centrul Educațional Paideusis  oferă servicii educaționale elevilor înscriși la Școala King of Kings din Anglia, în programul de învățare la distanță.<br />
              Programa școlară A.C.E. (Accelerated Christian Education) folosită de către Centrul Paideusis este furnizată de către Christian Education Europe (C.E.E.). Această  companie educațională monitorizează implementarea programei școlare A.C.E. în Europa. A.C.E. este concepută pentru a fi parcursă în mod individual.<br />
              La Centrul Educational Paideusis, elevii beneficiază de ajutorul necesar pentru realizarea obiectivelor școlare, asistați fiind de personal calificat. De asemenea, ei participă la diferite activități colective, într-o atmosferă plăcută și antrenantă, îmbinând noțiunile teoretice cu practica și creativitatea. În acest mod, elevilor li se creează condiții să exceleze și să se dezvolte armonios.<br />

            </p>
          </div>
          <div className="col-lg-1 col-sm-12"></div>
          <div className="col-lg-4 col-sm-12">
            <img src={Studying} alt="studying" className='mx-auto' />
          </div>
        </div>
      </section>

      <section className="advantages container-fluid" id='advantages' ref={advantages}>
        <h1 className="text-center font-weight-bold">Beneficii</h1>
        <div className="row align-items-center">
          <div className="col-lg-1 col-md-12"></div>
          <div className="col-lg-3 col-md-12">
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>Educație bazată pe principii și valori creștine</span></p>
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>Curriculum testat de-a lungul a peste 40 de ani în peste 100 de țări</span></p>
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>Fără stresul temelor </span></p>
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>Metode de instruire orientate pe nivel de studiu, nu pe clasă </span></p>
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>Educatori atestați, cu experiență în formarea educațională</span></p>
          </div>
          <div className="col-lg-1 col-md-12"></div>
          <div className="col-lg-2 col-md-12">
            <img src={happyBoy} alt="happy-boy" className='mx-auto' />
          </div>
          <div className="col-lg-1 col-md-12"></div>
          <div className="col-lg-3 col-md-12">
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>Formarea caracterului</span></p>
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>Dobândirea competențelor de comunicare în două limbi (engleză-română)</span></p>
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>Pregătire pentru susținerea examenelor internaționale SAT și GED</span></p>
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>Socializare pozitivă </span></p>
            <p className='d-flex' style={{ alignItems: 'flex-start' }}><i className='far fa-check-circle'></i> <span>Mediu protejat</span></p>
          </div>
          <div className="col-lg-1 col-md-12"></div>
        </div>
      </section>

      <section className="centres">
        <h1 className='text-center'>Centre A.C.E. în România</h1>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12">
              <img src={Map} alt="map" className='w-100' />
            </div>
            <div className="col-md-1 col-sm-12"></div>
            <div className="col-md-5 col-sm-12">
              <div className="centre">
                <h2>Paideusis International - Iași</h2>
                <p>(004) 0742 457 009</p>
              </div>
              <div className="centre">
                <h2>Adamant International - Câmpina</h2>
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