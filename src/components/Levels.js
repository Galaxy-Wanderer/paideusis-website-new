import React, { useState } from 'react'
import './styles/Levels.css'
import LevelsBoy from '../images/levels-boy.png'

const Levels = () => {
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
            <button className={level === 1 ? 'levels-btn-active' : ''} style={{ padding: '1vw' }} onClick={() => setLevel(1)}>Grădiniță</button>
            <button className={level === 2 ? 'levels-btn-active' : ''} style={{ padding: '1vw' }} onClick={() => setLevel(2)}>ABC’s</button>
            <button className={level === 3 ? 'levels-btn-active' : ''} style={{ padding: '1vw' }} onClick={() => setLevel(3)}>Nivel 1-3</button>
            <button className={level === 4 ? 'levels-btn-active' : ''} style={{ padding: '1vw' }} onClick={() => setLevel(4)}>Nivel 4-7</button>
            <button className={level === 5 ? 'levels-btn-active' : ''} style={{ padding: '1vw' }} onClick={() => setLevel(5)}>Nivel 8-12</button>
          </div>
          <div className="levels-text">
            {level === 1 ? (
              <p>La nivelul de grădiniță sunt înscriși copii cu vârste cuprinse între 3 și 5 ani. Aici se familiarizează cu primele noțiuni de limbă engleză și  cu noțiuni elementare despre științe, caracter, socializare etc.</p>
            ) : level === 2 ? (
              <p>Acest nivel este fundamental pentru pregătirea copiilor în vederea instruirii pe nivele de învățare. Lecțiile prevăzute pentru învățarea limbii engleze cuprind exerciții de pronunție, scriere, citire și conversație.</p>
            ) : level === 3 ? (
              <p>În această perioadă, micii școlari se formează într-un mediu care le stimulează creativitatea și dorința de cunoaștere. Materia de studiu este structurată în patru obiecte principale : engleză, matematică,  studii sociale (istorie, geografie) și științe.</p>
            ) : level === 4 ? (
              <p>
                De-a lungul acestei perioade, elevii își consolidează abilitățile de studiu individual prin stabilirea obiectivelor zilnice și strategia realizării lor. Metodele și manualele folosite sunt special concepute pentru ca ei să avanseze în cunoaștere, caracter și competențe.</p>
            ) : (
              <p>
                La nivelul 8-12, elevii sunt îndrumați și instruiți în vederea examenelor internaționale SAT și GED, care certifică absolvirea liceului și oferă posibilitatea înscrierii la universități din țară sau străinătate. De asemenea, urmărim dezvoltarea abilităților specifice, necesare pentru orientarea profesională.
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
