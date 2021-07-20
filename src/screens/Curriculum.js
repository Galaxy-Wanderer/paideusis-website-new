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
  const { changePage, checkLan } = useContext(GlobalContext);

  useEffect(() => {
    changePage('curriculum')
  }, [changePage]);

  return (
    <section id='curriculum'>
      <section className="landing container-fluid">
        <div className="row align-items-center">
          <div className="text col-md-6 col-sm-12">
            <h1>Curriculum</h1>
            <p>{('La Centrul Educațional Paideusis se implementează programul A.C.E. (Accelerated Christian Education) începând de la grădiniță până la liceu. Acest program este folosit la nivel mondial și oferă copiilor o educație bilingvă, bazată pe principiile biblice și formarea trăsăturilor pozitive de caracter. Obiectele de bază sunt: matematica, engleza, studiile sociale și științele.  Curriculumul este prezentat sub forma unor manuale de lucru numite PACE-uri (Packets of Accelerated Christian Education). PACE-urile pe care le folosim sunt editate în limba engleză. În viitorul apropiat, avem ca obiectiv extinderea curriculumului prin introducerea de PACE-uri referitoare la istoria și geografia României, limba și literatura română.', 'The A.C.E. program is being implemented at the Paideusis Educational Center. (Accelerated Christian Education) from kindergarten to high school. This program is used worldwide and provides children with a bilingual education based on biblical principles and the formation of positive character traits. The basic subjects are: mathematics, English, social studies and sciences. The curriculum is presented in the form of workbooks called PACEs (Packets of Accelerated Christian Education). The PACEs we use are edited in English. In the near future, we aim to expand the curriculum by introducing PACEs on the history and geography of Romania, the Romanian language and literature.')}
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src={Books} alt="books" className='w-100' />
          </div>
        </div>
      </section>

      <section className="curriculum-cards">
        <Card
          icon={Crayon}
          title={checkLan('Literatură și compunere', 'Literature & Creative Writing')}
          text={checkLan('În primii ani, elevii sunt ajutați să descopere bucuria lecturii, a scrisului și să realizeze scurte compuneri. În anii următori, cu ajutorul ghidurilor de studiu, elevii vor învăța despre clasicii literaturii moderne.', 'Young students are encouraged to love reading and are guided by the basic concepts of creative writing. Using study guides, older students sample the classics, modern literature, and poetry from different periods.')}
        />
        <Card
          icon={Calculator}
          title={checkLan('Matematică', 'Mathematics')}
          text={checkLan('Treptat, de la operații simple de aritmetică, la algebră și calcul diferențial, elevii învață cum să abordeze problemele de matematică într-un mod bine fundamentat. Ei sunt ajutați să-L recunoască pe Dumnezeu ca fiind Creatorul ordinii și al absoluturilor.', 'Students learn to address mathematical problems in a well-founded step-by-step manner, from four-function mathematics to algebra and differential calculus. Students are encouraged to recognize God as the orderly and absolute creator.')}
        />
        <Card
          icon={Atom}
          title={checkLan('Biologie, fizică și chimie', 'Biology, Physics, & Chemistry')}
          text={checkLan('Pornind de la curiozitatea firească a elevilor, curriculumul A.C.E. îi ajută să-și formeze o concepție creștină despre lumea înconjurătoare. Lecțiile de laborator și experimentele sunt prezentate pe DVD-uri.', 'A.C.E takes students’ natural curiosity about their physical surroundings and helps them build a strong foundation based on biblical principles. Both approach and content are non-evolutionary. Experiments are carried out, and laboratory lectures are presented on DVD.')}
        />
        <Card
          icon={Temple}
          title={checkLan('Istorie, geografie & economie', 'History, Geography, & Economics')}
          text={checkLan('Studiile sociale prezintă istoria culturii și civilizației universale din perspectiva lui Dumnezeu ca Stăpân și Creator. Lecțiile cuprind o varietate de activități, în cadrul cărora sunt prezentate personalități din toate timpurile, care au transmis preceptele creștine.', 'Social Studies views the history of the world and the cultures of God’s perspective as the creator and controller of the universe. The PACEs develop deductive thinking and include various activities, with examples of those who have practised God’s precepts throughout the ages.')}
        />
        <Card
          icon={Scroll}
          title={checkLan('Vocabular și ortografie', 'Grammar and Usage')}
          text={checkLan('Elevii învață să alcătuiască noi cuvinte cu ajutorul sufixelor și al prefixelor, îmbogățindu-și astfel vocabularul. De asemenea, își consolidează regulile de ortografie și de punctuație.', 'The appropriate use of English as a language is not native to an individual but a skill to be developed. The program does this through its balanced scope and sequence, which includes a broad repetition of the eight parts of the speech and step-by-step training in research and essay writing.')}
        />
        <Card
          icon={Quotes}
          title={checkLan('Compoziție literară', 'Word Structure & Spelling')}
          text={checkLan('Folosirea corectă a limbii engleze presupune formarea abilităților de scriere și vorbire. De aceea, elevii învață să conceapă și să susțină un discurs, să analizeze un text, să alcătuiască un eseu.', 'Word creation enhances students’ vocabulary, confidence and ability to spell. Basic spelling rules are presented and illustrated while studying the meaning of suffixes, prefixes, and root words helps students build new words and expand their vocabulary.')}
        />
        <Card
          icon={Bible}
          title='Bible'
          text={checkLan('Curriculumul A.C.E. include citirea și studierea integrală a Bibliei, până la nivelul 8.', 'When students reach level 8, they have read and studied all of the Bible.')}
        />
        <Card
          icon={Student}
          title={checkLan('Opționale', 'Electives')}
          text={checkLan('În anii de liceu, în vederea obținerii creditelor necesare absolvirii, elevii trebuie să studieze și câteva materii opționale.', 'For each high school level, a number of elective courses must be completed and the core subjects to obtain the credits required to graduate. Students will select the courses they wish to take.')}
        />
      </section>
    </section>
  )
}

export default Curriculum
