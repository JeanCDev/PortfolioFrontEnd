import Header from '../components/Header';
import behance from '../images/behance.svg';
import contact from '../images/Contact.svg';
import github from '../images/github.svg';
import graduation from '../images/graduation.svg';
import linkedin from '../images/linkedin.svg';
import portfolio from '../images/portfolio.svg';
import programmer from '../images/programmer.svg';
import programming from '../images/programming.svg';
import me from '../images/me.jpg';

export default function Index(){

  return(
      
    <div className="App">

      <Header />
      
      <main>
        <section>
          <div>
            <button>
              <img src={portfolio} alt=""/>
              <a href="/portfolio">Portfólio</a>
            </button>
            <button>
              <img src={github} alt=""/>
              <a href="">GitHub</a>
            </button>
            <button>
              <img src={behance} alt=""/>
              <a href="">Behance</a>
            </button>
            <button>
              <img src={linkedin} alt=""/>
              <a href="">LinkedIn</a>
            </button>
          </div>

          <div>
            <img src={programming} alt=""/>
          </div>
        </section>

        <section>

          <h1>Sobre mim</h1>

          <p>
            Sou um estudante de Análise e desenvolvimento de sistemas em busca 
            de oportunidades de trabalho na área. Sou focado nos meus objetivos, 
            tendo facilidade de aprender coisas novas. Tenho paixão por aprender, 
            tendo feito diversos cursos na área de programação e participado de 
            vários eventos online. Sou na maior parte do tempo autodidata, mas não
            tenho medo de dizer quando não sei sobre um assunto e adoro ajudar 
            outras pessoas com o que eu sei. Sou morador em Joinville 
            (Santa Catarina).
          </p>
          <img src={me} alt=""/>

        </section>

        <section>

          <div>
            <h2>Tecnologias que estudo</h2>
            <div>
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

            <div>
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

          <div>
            <img src={programmer} alt=""/>
          </div>

        </section>

        <section>
          <div>
            <img src={graduation} alt=""/>
          </div>

          <div>
            <h2>Formação</h2>
            <p>
              - Curso de Aprendizagem Industrial de Ajustador Mecânico no SENAI;
            </p>
            <p>
              - Cusrsando Análise e Desenvolvimento de 
              Sistemas na Universidade Estácio de Sá de 
              Joinville, Santa Catarina.
            </p>
            <p>
              - Ensino médio completo na Escola de Educação Básica 
              Dr Georg Keller;
            </p>
          </div>
        </section>
      </main>

    </div>
    
  );

}