import React, { useState, useEffect, useContext } from 'react'
import './styles/Faq.css'
import Girl from '../images/girl.png'
import Plus from '../icons/plus.svg'
import Minus from '../icons/minus.svg';
import { Link } from 'react-router-dom'
import { GlobalContext } from '../GlobalState';

const Faq = () => {
  const { checkLan } = useContext(GlobalContext)
  const mediaQuery = window.matchMedia('(max-width: 767px)');
  const [isMobile, setIsMobile] = useState(false);
  const [questions, setQuestions] = useState({
    answer1: false,
    answer2: false,
    answer4: false
  });
  useEffect(() => {
    function screenChange(x) {
      if (x.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    mediaQuery.addListener(screenChange);
    screenChange(mediaQuery);
  }, [isMobile, mediaQuery]);

  return (
    <section className='faq container-fluid'>
      <div className="row">
        <div className="col-md-10">
          <h1>{checkLan('Întrebări frecvente', 'Frequently Asked Questions')}</h1>
          <div className="container-fluid">
            <div className="row">
              <div className="question col-md-6 col-sm-12">
                <p className='d-flex align-items-center justify-content-between' onClick={() => {
                  if (isMobile) {
                    setQuestions({ ...questions, answer1: !questions.answer1 });
                  }
                }}>{checkLan('Se fac înscrieri în timpul anului', 'Are enrolments possible during')}<br />{checkLan('școlar?', 'school year')} <img src={questions.answer1 ? Minus : Plus} alt="plus" className='ml-5' /></p>
                <p className={`answer ${isMobile && questions.answer1 ? 'answer-active' : isMobile && !questions.answer1 ? '' : 'answer-active'}`}>{checkLan('Datorită metodei de învățare individualizată, copilul poate fi înscris în orice moment al anului. Uneori, este posibil ca unii copii de grădiniță sau ABC’s să nu poată finaliza anul în curs, dar au posibilitatea de a continua în anul școlar următor.', 'Thanks to the individualized learning method, the child can be enrolled at any time of the year. Sometimes, some kindergarten or ABC’s children may not be able to complete the current year, but have the opportunity to continue into the next school year. ')}</p>
              </div>
              <div className="question col-md-6 col-sm-12">
                <p className='d-flex align-items-center justify-content-between' onClick={() => {
                  if (isMobile) {
                    setQuestions({ ...questions, answer2: !questions.answer2 });
                  }
                }}>{checkLan('Care sunt costurile de școlarizare la acest', 'What are the tuition costs at this')}<br />{checkLan('centru educațional?', 'educational centre')} <img src={questions.answer2 ? Minus : Plus} alt="plus" className='ml-5' /></p>
                <p className={`answer ${isMobile && questions.answer2 ? 'answer-active' : isMobile && !questions.answer2 ? '' : 'answer-active'}`}>{checkLan('Întrucât suntem un centru educațional privat, nu beneficiem de finanțare guvernamentală și, prin urmare, părinții suportă costurile pentru școlarizarea copilului lor.', 'Because we are a private educational center, we do not benefit from government funding and, therefore, parents bear the costs for their child\'s schooling.')}{' '}{checkLan('(vezi pagina ', 'see the page for ')}<Link to='/înscrieri'>{checkLan('Înscrieri', 'Admissions')}</Link>)</p>
              </div>
            </div>
            <div className="row">
              <div className="question col-md-6 col-sm-12">
                <p className='d-flex align-items-center justify-content-between' onClick={() => {
                  if (isMobile) {
                    setQuestions({ ...questions, answer3: !questions.answer3 });
                  }
                }}>{checkLan('Absolvenții de liceu trebuie să susțină examenul de', 'Do high school graduates have to take the')}<br />{checkLan('bacalaureat după terminarea liceului?', 'romanian baccalaureate exam after high school?')}<img src={questions.answer3 ? Minus : Plus} alt="plus" className='ml-5' /></p>
                <p className={`answer ${isMobile && questions.answer3 ? 'answer-active' : isMobile && !questions.answer3 ? '' : 'answer-active'}`}>{checkLan('Absolvenții nu vor susține examenul de bacalaureat românesc. În schimb, îi pregătim pentru examenul SAT, care este bacalaureatul recunoscut la nivel internațional și care oferă posibilitatea continuării studiilor la orice instituție de învățământ superior din țară sau străinătate.', 'Graduates will not take the Romanian baccalaureate exam. Instead, we prepare them for the SAT exam, which is the internationally recognized baccalaureate and which offers the possibility to continue their studies at any higher education institution in the country or abroad.')}</p>
              </div>
              <div className="question col-md-6 col-sm-12">
                <p className='d-flex align-items-center justify-content-between' onClick={() => {
                  if (isMobile) {
                    setQuestions({ ...questions, answer4: !questions.answer4 });
                  }
                }}>{checkLan('Elevii care parcurg acest program educațional se pot transfera', 'Can students who are enrolled in this educational program')}<br />{checkLan('în sistemul educațional românesc?', 'transfer in the Romanian educational system?')}<img src={questions.answer4 ? Minus : Plus} alt="plus" className='ml-5' /></p>
                <p className={`answer ${isMobile && questions.answer4 ? 'answer-active' : isMobile && !questions.answer4 ? '' : 'answer-active'}`}>{checkLan('Cu siguranță. Elevii vor fi evaluați de către școala unde urmează să fie înscriși, apoi vor fi repartizați în clasa corespunzătoare.', 'Surely. Students will be evaluated by the school where they are to be enrolled, then they will be assigned to the corresponding class.')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <img src={Girl} alt="girl" className='w-75 mx-auto' />
        </div>
      </div>
    </section>
  )
}

export default Faq
