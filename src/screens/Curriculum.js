import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../GlobalState'
import Books from '../images/books.png';
import './styles/Curriculum.css'
import Card from '../components/Card';
import Crayon from '../icons/crayon.svg'
import Calculator from '../icons/calculator.svg'
import Atom from '../icons/atom.svg'
import Temple from '../icons/temple.svg'
import Scroll from '../icons/scroll.svg'
import Quotes from '../icons/quotes.svg'
import Bible from '../icons/bible.svg'
import Student from '../icons/student.svg'

const Curriculum = () => {
  const { changePage } = useContext(GlobalContext);

  useEffect(() => {
    changePage('curriculum')
  }, [changePage]);

  return (
    <section id='curriculum'>
      <section className="landing container-fluid">
        <div className="row align-items-center">
          <div className="text col-md-6 col-sm-12">
            <h1>Curriculum</h1>
            <p>La Centrul Educațional Paideusis se implementează programul A.C.E. (Accelerated Christian Education) începând de la grădiniță până la liceu. Acest program este folosit la nivel mondial și oferă copiilor o educație bilingvă, bazată pe principiile biblice și formarea trăsăturilor pozitive de caracter. 
Obiectele de bază sunt: matematica, engleza, studiile sociale și științele.  Curriculumul este prezentat sub forma unor manuale de lucru numite PACE-uri (Packets of Accelerated Christian Education). PACE-urile pe care le folosim sunt editate în limba engleză. <br />
În viitorul apropiat, avem ca obiectiv extinderea curriculumului prin introducerea de PACE-uri referitoare la istoria și geografia României, limba și literatura română.

            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src={Books} alt="books" className='w-100'/>
          </div>
        </div>
      </section>

      <section className="curriculum-cards">
        <Card
          icon={Crayon}
          title='Literatură și compunere'
          text='În primii ani, elevii sunt ajutați să descopere bucuria lecturii, a scrisului și să realizeze scurte compuneri. În anii următori, cu ajutorul ghidurilor de studiu, elevii vor învăța despre clasicii literaturii moderne.'
        />
        <Card
          icon={Calculator}
          title='Matematică'
          text='Treptat, de la operații simple de aritmetică, la algebră și calcul diferențial, elevii învață cum să abordeze problemele de matematică într-un mod bine fundamentat. Ei sunt ajutați să-L recunoască pe Dumnezeu ca fiind Creatorul ordinii și al absoluturilor.'
        />
        <Card
          icon={Atom}
          title='Biologie, fizică și chimie'
          text='Pornind de la curiozitatea firească a elevilor, curriculumul A.C.E. îi ajută să-și formeze o concepție creștină despre lumea înconjurătoare. Lecțiile de laborator și experimentele sunt prezentate pe DVD-uri.'
        />
        <Card
          icon={Temple}
          title='Istorie, geografie & economie'
          text='Studiile sociale prezintă istoria culturii și civilizației universale din perspectiva lui Dumnezeu ca Stăpân și Creator. Lecțiile cuprind o varietate de activități, în cadrul cărora sunt prezentate personalități din toate timpurile, care au transmis preceptele creștine.'
        />
        <Card
          icon={Scroll}
          title='Vocabular și ortografie'
          text='Elevii învață să alcătuiască noi cuvinte cu ajutorul sufixelor și al prefixelor, îmbogățindu-și astfel vocabularul. De asemenea, își consolidează regulile de ortografie și de punctuație.'
        />
        <Card 
          icon={Quotes}
          title='Compoziție literară'
          text='Folosirea corectă a limbii engleze presupune formarea abilităților de scriere și vorbire. De aceea, elevii învață să conceapă și să susțină un discurs, să analizeze un text, să alcătuiască un eseu.'
        />
        <Card 
          icon={Bible}
          title='Bible'
          text='Curriculumul A.C.E. include citirea și studierea integrală a Bibliei, până la nivelul 8.'
        />
        <Card 
          icon={Student}
          title='Opționale'
          text='În anii de liceu, în vederea obținerii creditelor necesare absolvirii, elevii trebuie să studieze și câteva materii opționale.'
        />
      </section>
    </section>
  )
}

export default Curriculum
