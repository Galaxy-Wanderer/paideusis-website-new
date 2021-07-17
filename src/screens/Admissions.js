import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../GlobalState'
import './styles/Admissions.css'
import Desks from '../images/desks.png';
import Activities from '../images/activities.png'

const Admissions = () => {
  const { changePage, checkLan } = useContext(GlobalContext);

  useEffect(() => {
    changePage('admissions');
  }, [changePage]);

  return (
    <section id='admissions'>
      <section className="landing container-fluid">
        <div className="row align-items-center">
          <div className="col-md-4 col-sm-12 text">
            <h1>{checkLan('Înscrieri', 'Admissions')}</h1>
            <p>{checkLan('Înscrierile la Școala King of Kings din Anglia se realizează prin intermediul Centrului Educațional Paideusis. Înscrierea presupune participarea părinților împreună cu copilul la interviu, completarea cererii de înscriere, admiterea în urma interviului, semnarea contractului.', 'Enrollment in King of Kings School in England is made through the Paideusis Educational Center. The registration implies the participation of the parents together with the child in the interview, the completion of the registration application, the admission after the interview and the signing of the contract.')}</p>
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
            <h1>{checkLan('Taxe de înscriere', 'Tuition fees')}</h1>
            <div>
              <p>{checkLan('Perioada de înscriere: februarie - martie sau până la ocuparea locurilor.', 'Registration period: February - March or until the seats are filled.')}</p>
              <p>{checkLan('Numărul locurilor este limitat: 12 – 15 elevi/clasă.', 'The number of places is limited: 12 - 15 students / class.')}</p>
              <h3>{checkLan('Taxă de interviu', 'Interview fee')}:</h3>
              <p>50 RON</p>
              <h3>{checkLan('Taxă de înscriere la Școala Creștină „King of Kings”', 'Tuition fee for "King of Kings" Christian School')}:</h3>
              <p>35 Euro {checkLan('(o singură plată/an)', '(one paymen/year)')}</p>
              <h3>{checkLan('Taxă lunară la Centrul Internațional de Educație Paideusis', 'Monthly fee at the Paideusis International Education Center')}:</h3>
              <p>600 RON</p>
              <h3>{checkLan('Manuale A.C.E. ', 'A.C.E. texbooks')}:</h3>
              <p>
                <span>{checkLan('Grădiniță - aproximativ 345 Euro/ an', 'Kindergarten - approximately 345 Euro/ year')}</span>
                <br />
                <span>{checkLan('ABC’s - aproximativ 375 Euro/ an', 'ABC’s - approximately  375 Euro/ year')}</span>
                <br />
                <span>{checkLan('Nivel 1-7 - aproximativ 450 Euro/ an', 'Level 1-7 - approximately  450 Euro/ year')}</span>
                <br />
                <span>{checkLan('Nivel 8-12 - aproximativ 525 Euro/ an', 'Level 8-12 - approximately  525 Euro/ year')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Admissions
