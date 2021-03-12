import React, { useState, useEffect, useContext } from 'react'
import './styles/Home.css'
import Children from '../images/school.png'
import Learning from '../images/learning.png'
import Levels from '../components/Levels'
import Faq from '../components/Faq'
import AceLogo from '../images/ace-logo.png';
import CeeLogo from '../images/cee-logo.png'
import KingOfKingsLogo from '../images/kingofkings-logo.png'
import Classroom from '../images/classroom.png'
import Abc from '../images/abc.png'
import { GlobalContext } from '../GlobalState'
import { Link } from 'react-router-dom'

const Home = () => {
  let [slide, setSlide] = useState(1);
  const { changePage } = useContext(GlobalContext)

  useEffect(() => {
    changePage('home');
  },  [changePage]);

  return (
    <>
      <section className="landing container-fluid">
        <div className="row align-items-center">
          <div className="text col-md-5">
            <h1>O nouă metodă educațională<br />în Iași</h1>
            <p>Centrul Educațional Paideusis aduce în atenția părinților beneficiile unei metode educaționale unice în Iași.</p>
            <Link to='/despre-noi#advantages' className="btn">Beneficii</Link>
          </div>
          <div className="slider col-md-7">
            <i style={{ opacity: slide === 1 ? 0.5 : 1 }} className="fas fa-chevron-left" onClick={() => slide > 1 && setSlide(slide -= 1)}></i>
            <div className="slider-container">
              <div className="images">
                <img style={{ opacity: slide === 1 ? 1 : 0 }} src={Children} alt="children" />
                <img style={{ opacity: slide === 2 ? 1 : 0 }} src={Classroom} alt="children" />
                <img style={{ opacity: slide === 3 ? 1 : 0 }} src={Abc} alt="children" />
              </div>
              <div className="buttons">
                <button className={slide === 1 ? "fas fa-circle" : "far fa-circle"} onClick={() => setSlide(1)}></button>
                <button className={slide === 2 ? "fas fa-circle" : "far fa-circle"} onClick={() => setSlide(2)}></button>
                <button className={slide === 3 ? "fas fa-circle" : "far fa-circle"} onClick={() => setSlide(3)}></button>
              </div>
            </div>
            <i style={{ opacity: slide === 3 ? 0.5 : 1 }} className="fas fa-chevron-right" onClick={() => slide < 3 && setSlide(slide += 1)}></i>
          </div>
        </div>
      </section>

      <section className='values d-flex'>
        <div className="value value1">
          <h2>Educație creștină</h2>
        </div>
        <div className="value value2">
          <h2>Învățare<br />individuală</h2>
        </div>
        <div className="value value3">
          <h2>Formarea<br />caracterului</h2>
        </div>
        <div className="value value4">
          <h2>Standard<br />academic<br />ridicat</h2>
        </div>
      </section>

      <div style={{ background: '#f5f3e4', paddingBottom: 'calc(1vw + 1rem)', marginTop: 'calc(5vw + 5rem)' }}>
        <section className="learning container-fluid">
          <div className="row align-items-center">
            <div className="text col-md-7 col-sm-12">
              <h1>Aici copilul<br />învață și se dezvoltă</h1>
              <p>Ambientul și metodele de instruire sunt orientate pe elev. Se ține cont de unicitatea copilului care trebuie să parcurgă cu succes cinci nivele de instruire: grădiniță, ABC’s, L1-3, L4-7, L8-12.</p>
              <Link to='/curriculum' className="btn" style={{ background: '#bf3545', color: 'white' }}>Curriculum</Link>
            </div>
            <div className="col-md-1 col-sm-12"></div>
            <img src={Learning} alt="learning" className='col-md-4 w-100 col-sm-12' />
          </div>
        </section>
        <Levels />
      </div>

      <Faq />

      <section className="partners">
        <h1>Partenerii noștri</h1>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-1"></div>
            <a href='https://www.aceministries.com/' target='_blank' rel="noreferrer" className="col-2">
              <img src={AceLogo} alt="ace logo" />
            </a>
            <div className="col-1"></div>
            <a href='https://www.christian.education/' target='_blank' rel="noreferrer" className="col-3">
              <img src={CeeLogo} alt="cee-logo" />
            </a>
            <div className="col-1"></div>
            <a href='https://www.kingofkingsschool.org.uk/' target='_blank' rel="noreferrer" className="col-2">
              <img src={KingOfKingsLogo} alt='king of kings logo' />
            </a>
            <div className="col-1"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
