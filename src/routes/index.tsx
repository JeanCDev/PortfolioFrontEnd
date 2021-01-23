import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import ContactButton from '../components/ContactButton';

import behance from '../images/behance.svg';
import github from '../images/github.svg';
import graduation from '../images/graduation.svg';
import linkedin from '../images/linkedin.svg';
import portfolio from '../images/portfolio.svg';
import programmer from '../images/programmer.svg';
import programming from '../images/programming.svg';
import me from '../images/me.png';

import './styles/index.css';

export default function Index() {

  return (

    <div className="App">

      <Header />

      <ContactButton/>

      <main>
        <section id="main-menu">
          <div className="container d-flex align-items-center">
            <div className="row mt-3 mt-lg-5">
              <div 
                className="col-12 col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center align-items-center">
                <div className="mt-5 mt-xl-0">
                  <Button
                    id="portfolio"
                    linkTo="/portfolio"
                    image={portfolio}
                    altImg="Ícone do portfólio"
                    name="Portfólio" />

                  <Button
                    id="github"
                    linkTo="https://github.com/JeanCDev"
                    image={github}
                    altImg="Ícone do GitHub"
                    name="GitHub" />

                  <Button
                    id="behance"
                    linkTo="https://www.behance.net/JeanCDev"
                    image={behance}
                    altImg="Ícone do Behance"
                    name="Behance" />

                  <Button
                    id="linkedin"
                    linkTo="https://www.linkedin.com/in/jean-c-gomes-design/"
                    image={linkedin}
                    altImg="Ícone do LinkedIn"
                    name="LinkedIn" />
                </div>
              </div>

              <div className="col-12 col-lg-8">
                <img src={programming} className="img-fluid" alt=""/>
              </div>
            </div>
          </div>
        </section>

        <section id="about-me">
          <div className="container">
            <div className="row">
              <div>
                <h1 className="text-center">Sobre mim</h1>

                <p className="text-center mt-3 mb-5">
                  Sou um estudante de Análise e desenvolvimento de sistemas em busca
                  de oportunidades de trabalho na área. Sou focado nos meus objetivos,
                  tendo facilidade de aprender coisas novas. Tenho paixão por aprender,
                  tendo feito diversos cursos na área de programação e participado de
                  vários eventos online. Sou na maior parte do tempo autodidata, mas não
                  tenho medo de dizer quando não sei sobre um assunto e adoro ajudar
                  outras pessoas com o que eu sei. Sou morador em Joinville
                  (Santa Catarina).
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <img src={me} className="img-fluid" alt="Jean Carlos Gomes" />
              </div>
            </div>
          </div>

        </section>

        <section id="studies">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-5 mb-xl-0 col-lg-7 d-flex align-items-center">
                <img src={programmer} className="img-fluid" alt="Desenho de um Programador" />
              </div>

              <div className="col-12 col-lg-5">
                <h2 className="text-center">Tecnologias que estudo</h2>
                <div className="row justify-content-end mt-3">
                  <div className='col-5'>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavasCript</li>
                      <li>ReactJS</li>
                      <li>React Native</li>
                      <li>NodeJS</li>
                      <li>MySQL</li>
                      <li>PostgreSQL</li>
                      <li>Adobe XD</li>
                    </ul>
                  </div>

                  <div className="col-6 col-lg-5">
                    <ul>
                      <li>Figma</li>
                      <li>Ilustrator</li>
                      <li>Gimp</li>
                      <li>Photoshop</li>
                      <li>APIs</li>
                      <li>Firebase</li>
                      <li>Git/Github</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container" id="graduation">
            <div className="row justify-content-center">
              <div className="col-12 order-1 mb-5 mb-xl-0 d-flex justify-content-center align-items-center order-lg-2 col-lg-7">
                <img src={graduation} className="img-fluid" alt="Graduação" />
              </div>

              <div className='col-12 order-2 order-lg-1 col-lg-5 d-flex justify-content-center align-items-center'>
                <div>
                  <h2 className="text-center">Formação</h2>
                  <p className="text-center mt-3">
                    - Curso de Aprendizagem Industrial de Ajustador Mecânico no SENAI;
                  </p>
                  <p className="text-center">
                    - Cusrsando Análise e Desenvolvimento de
                    Sistemas na Universidade Estácio de Sá de
                    Joinville, Santa Catarina.
                  </p>
                  <p className="text-center">
                    - Ensino médio completo na Escola de Educação Básica
                    Dr Georg Keller;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </div>

  );

}