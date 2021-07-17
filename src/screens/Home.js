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
  const { changePage, checkLan } = useContext(GlobalContext)

  useEffect(() => {
    changePage('home');
  }, [changePage]);

  return (
    <>
      <section className="landing container-fluid">
        <div className="row align-items-center">
          <div className="text col-md-5">
            <h1>{checkLan('O nouă metodă educațională', 'A unique educational system')}<br />{checkLan('în Iași', 'In Iași')}</h1>
            <p>{checkLan('Centrul Educațional Paideusis aduce în atenția părinților beneficiile unei metode educaționale unice în Iași.', 'The Paideusis International Center of Education brings to the attention of parents the benefits of a unique educational method in Iasi.')}</p>
            <Link to='/despre-noi#advantages' className="btn">{checkLan('Beneficii', 'Benefits')}</Link>
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
          <h2>{checkLan('Educație creștină', 'Christian Education')}</h2>
        </div>
        <div className="value value2">
          <h2>{checkLan('Învățare', 'Individualised')}<br />{checkLan('individuală', 'learning')}</h2>
        </div>
        <div className="value value3">
          <h2>{checkLan('Formarea', 'Character')}<br />{checkLan('caracterului', 'Buliding')}</h2>
        </div>
        <div className="value value4">
          <h2>{checkLan('Standard', 'High')}<br />{checkLan('academic', 'Academic')}<br />{checkLan('ridicat', 'standard')}</h2>
        </div>
      </section>

      <div style={{ background: '#f5f3e4', paddingBottom: 'calc(1vw + 1rem)', marginTop: 'calc(5vw + 5rem)' }}>
        <section className="learning container-fluid">
          <div className="row align-items-center">
            <div className="text col-md-7 col-sm-12">
              <h1>{checkLan('Aici copilul', 'Here the child')}<br />{checkLan('învață și se dezvoltă', 'learns and develops')}</h1>
              <p>{checkLan('Ambientul și metodele de instruire sunt orientate pe elev. Se ține cont de unicitatea copilului care trebuie să parcurgă cu succes cinci nivele de instruire: grădiniță, ABC’s, L 1-3, L 4-7, L 8-12.', 'The learning environment and methods are student-oriented. It takes into consideration the uniqueness of the child who must successfully complete five levels: kindergarten, ABC’s, L 1-3, L 4-7, L 8-12.')}</p>
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
            <a href='https://www.aceministries.com/' target='_blank' rel="noreferrer" className="col-2">
              <img src={AceLogo} alt="ace logo" />
            </a>
            <div className="col-1"></div>
            <a href='https://www.christian.education/' target='_blank' rel="noreferrer" className="col-4">
              <img src={CeeLogo} alt="cee-logo" />
            </a>
            <div className="col-1"></div>
            <a href='https://www.kingofkingsschool.org.uk/' target='_blank' rel="noreferrer" className="col-3">
              <img src={KingOfKingsLogo} alt='king of kings logo' />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
