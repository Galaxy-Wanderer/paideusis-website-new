import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../GlobalState'
import './styles/Admissions.css'
import Desks from '../images/desks.png';
import Activities from '../images/activities.png'

const Admissions = () => {
  const { changePage } = useContext(GlobalContext);

  useEffect(() => {
    changePage('admissions');
  }, [changePage]);

  return (
    <section id='admissions'>
      <section className="landing container-fluid">
        <div className="row align-items-center">
          <div className="col-md-4 col-sm-12 text">
            <h1>Înscrieri</h1>
            <p>Înscrierile la Școala King of Kings din Anglia se realizează prin intermediul Centrului Educațional Paideusis.</p>
            <p>Înscrierea presupune participarea părinților împreună cu copilul la interviu, completarea cererii de înscriere, admiterea în urma interviului, semnarea contractului.</p>
          </div>
          <div className="col-md-1 col-sm-12"></div>
          <div className="col-md-7 col-sm-12">
            <img src={Desks} alt="desks" className='w-100' />
          </div>
        </div>
      </section>

      <section className="admissions-info container-fluid">
        <div className="row align-items-center">
          <div className="col-md-5 col-sm-12">
            <img src={Activities} alt="activities" className='mx-auto' />
          </div>
          <div className="col-md-1 col-sm-12"></div>
          <div className="col-md-6 col-sm-12 admissions-text">
            <h1>Taxe de înscriere</h1>
            <div>
              <p>Perioada de înscriere: februarie - martie sau până la ocuparea locurilor.</p>
              <p>Numărul locurilor este limitat: 12 – 15 elevi/clasă.</p>
              <h3>Taxă de interviu:</h3>
              <p>50 RON</p>
              <h3>Taxă de înscriere la Școala Creștină „King of Kings”:</h3>
              <p>35 Euro (o singură plată/an)</p>
              <h3>Taxă lunară la Centrul Internațional de Educație Paideusis:</h3>
              <p>600 RON</p>
              <h3>Manuale A.C.E. :</h3>
              <p>
                <span>Grădiniță - aproximativ 345 Euro/ an</span>
                <br />
                <span>ABC’s - aproximativ 375 Euro/ an</span>
                <br />
                <span>Nivel 1-7 - aproximativ 450 Euro/ an</span>
                <br />
                <span>Nivel 8-12 - aproximativ 525 Euro/ an</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Admissions
