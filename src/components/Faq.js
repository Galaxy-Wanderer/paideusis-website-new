import React, { useState, useEffect } from 'react'
import './styles/Faq.css'
import Girl from '../images/girl.png'
import Plus from '../icons/plus.svg'
import Minus from '../icons/minus.svg';
import { Link } from 'react-router-dom'

const Faq = () => {
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
          <h1>Întrebări frecvente</h1>
          <div className="container-fluid">
            <div className="row">
              <div className="question col-md-6 col-sm-12">
                <button className='d-flex align-items-center justify-content-between' onClick={() => {
                  if(isMobile) {
                    setQuestions({ ...questions, answer1: !questions.answer1 });
                  }
                }}>Se fac înscrieri în timpul anului<br />școlar? <img src={questions.answer1 ? Minus : Plus} alt="plus" className='ml-5' /></button>
                <p className={`answer ${isMobile && questions.answer1 ? 'answer-active' : isMobile && !questions.answer1 ? '' : 'answer-active'}`}>Datorită metodei de învățare individualizată, copilul poate fi înscris în orice moment al anului. Uneori, este posibil ca unii copii de grădiniță sau ABC’s să nu poată finaliza anul în curs, dar au posibilitatea de a continua în anul școlar următor.</p>
              </div>
              <div className="question col-md-6 col-sm-12">
                <button className='d-flex align-items-center justify-content-between' onClick={() => {
                  if(isMobile) {
                    setQuestions({ ...questions, answer2: !questions.answer2 });
                  }
                }}>Care sunt costurile de școlarizare la acest<br />centru educațional? <img src={questions.answer2 ? Minus : Plus} alt="plus" className='ml-5' /></button>
                <p className={`answer ${isMobile && questions.answer2 ? 'answer-active' : isMobile && !questions.answer2 ? '' : 'answer-active'}`}>Întrucât suntem un centru educațional privat, nu beneficiem de finanțare guvernamentală și, prin urmare, părinții suportă costurile pentru școlarizarea copilului lor. (vezi pagina <Link to='/înscrieri'>Înscrieri</Link>)</p>
              </div>
            </div>
            <div className="row">
              <div className="question col-md-6 col-sm-12">
                <button className='d-flex align-items-center justify-content-between' onClick={() => {
                  if(isMobile) {
                    setQuestions({ ...questions, answer3: !questions.answer3 });
                  }
                }}>Absolvenții de liceu trebuie să susțină examenul de bacalaureat după terminarea<br />liceului? <img src={questions.answer3 ? Minus : Plus} alt="plus" className='ml-5' /></button>
                <p className={`answer ${isMobile && questions.answer3 ? 'answer-active' : isMobile && !questions.answer3 ? '' : 'answer-active'}`}>Absolvenții nu vor susține examenul de bacalaureat românesc. În schimb, îi pregătim pentru examenul SAT, care este bacalaureatul recunoscut la nivel internațional și care oferă posibilitatea continuării studiilor la orice instituție de învățământ superior.</p>
              </div>
              <div className="question col-md-6 col-sm-12">
                <button className='d-flex align-items-center justify-content-between' onClick={() => {
                  if(isMobile) {
                    setQuestions({ ...questions, answer4: !questions.answer4 });
                  }
                }}>Elevii care parcurg acest program educațional se pot transfera în sistemul educațional<br />românesc? <img src={questions.answer4 ? Minus : Plus} alt="plus" className='ml-5' /></button>
                <p className={`answer ${isMobile && questions.answer4 ? 'answer-active' : isMobile && !questions.answer4 ? '' : 'answer-active'}`}>Cu siguranță. Elevii vor fi evaluați de către școala unde urmează să fie înscriși, apoi vor fi repartizați în clasa corespunzătoare.</p>
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
