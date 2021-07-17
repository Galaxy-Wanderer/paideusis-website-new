import React, { useContext, useState } from 'react'
import './styles/Levels.css'
import LevelsBoy from '../images/levels-boy.png'
import { GlobalContext } from '../GlobalState'

const Levels = () => {
  const { checkLan } = useContext(GlobalContext)
  const [level, setLevel] = useState(1);

  return (
    <section className='levels container-fluid'>
      <div className="row align-items-center">
        <div className="col-md-1 col-sm-12"></div>
        <div className="col-md-3 col-sm-12">
          <img src={LevelsBoy} alt="levels boy" className='mx-auto w-75' />
        </div>
        <div className="col-md-1 col-sm-12"></div>
        <div className="col-md-6 col-sm-12">
          <div className="levels-buttons">
            <button className={level === 1 ? 'levels-btn-active' : ''} style={{ padding: '1vw' }} onClick={() => setLevel(1)}>{checkLan('Grădiniță', 'Kindergarten')}</button>
            <button className={level === 2 ? 'levels-btn-active' : ''} style={{ padding: '1vw' }} onClick={() => setLevel(2)}>ABC’s</button>
            <button className={level === 3 ? 'levels-btn-active' : ''} style={{ padding: '1vw' }} onClick={() => setLevel(3)}>{checkLan('Nivel', 'Level')} 1-3</button>
            <button className={level === 4 ? 'levels-btn-active' : ''} style={{ padding: '1vw' }} onClick={() => setLevel(4)}>{checkLan('Nivel', 'Level')} 4-7</button>
            <button className={level === 5 ? 'levels-btn-active' : ''} style={{ padding: '1vw' }} onClick={() => setLevel(5)}>{checkLan('Nivel', 'Level')} 8-12</button>
          </div>
          <div className="levels-text">
            {level === 1 ? (
              <p>{checkLan('La nivelul de grădiniță sunt înscriși copii cu vârste cuprinse între 3 și 5 ani. Aici se familiarizează cu primele noțiuni de limbă engleză și  cu noțiuni elementare despre științe, caracter, socializare etc.', 'The kindergarten level is for children aged 3 to 5. They become familiar with english language and with basic concepts about science, character, socialization, etc.')}</p>
            ) : level === 2 ? (
              <p>{checkLan('Acest nivel este fundamental pentru pregătirea copiilor în vederea instruirii pe nivele de învățare. Lecțiile prevăzute pentru învățarea limbii engleze cuprind exerciții de pronunție, scriere, citire și conversație.', 'This level is fundamental for preparing children for individualised learning an allows them to progress at their own level and rate of learning. Lessons for learning English include pronunciation, writing, reading and conversation exercises.')}</p>
            ) : level === 3 ? (
              <p>{checkLan('În această perioadă, micii școlari se formează într-un mediu care le stimulează creativitatea și dorința de cunoaștere. Materia de studiu este structurată în patru obiecte principale : engleză, matematică,  studii sociale (istorie, geografie) și științe.', 'During this period, young schoolchildren are trained in an environment that stimulates their creativity and desire for knowledge. The subjects are structured in four main subjects: English, mathematics, social studies (history, geography) and science.')}</p>
            ) : level === 4 ? (
              <p>
                {checkLan('De-a lungul acestei perioade, elevii își consolidează abilitățile de studiu individual prin stabilirea obiectivelor zilnice și strategia realizării lor. Metodele și manualele folosite sunt special concepute pentru ca ei să avanseze în cunoaștere, caracter și competențe.', "During this period, students strengthen their individual study skills by setting daily goals and their achievement strategy. The methods and manuals used are specially designed for them to advance in knowledge, character and skills.")}</p>
            ) : (
              <p>
                {checkLan('La nivelul 8-12, elevii sunt îndrumați și instruiți în vederea examenelor internaționale SAT și GED, care certifică absolvirea liceului și oferă posibilitatea înscrierii la universități din țară sau străinătate. De asemenea, urmărim dezvoltarea abilităților specifice, necesare pentru orientarea profesională.', 'At level 8-12, students are guided and trained for the SAT and GED international exams, which certify high school graduation and offer the possibility to enroll in universities in the country or abroad. We also aim to develop the specific skills needed for career guidance.')}
              </p>
            )}
          </div>
        </div>
        <div className="col-md-1 col-sm-12"></div>
      </div>
    </section>
  )
}

export default Levels
