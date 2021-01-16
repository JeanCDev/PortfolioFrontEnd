import Footer from '../components/Footer';
import Header from '../components/Header';

import PaperPlane from '../images/PaperPlane.svg';

import './styles/contact.css';

export default function Contact(){

  return (
    <div id="contact">
      <Header />

      <div className="container">
        <h1 className="text-center">Deixe sua mensagem</h1>

        <form action="" className="container-fluid">

          <div className="row justify-content-between">
            <input type="text" placeholder="Nome" className="col-12 mb-3 mr-3 col-md-5 form-control" required/>
            <input type="email" placeholder="Email" className="col-12 mb-3 mr-3 col-md-5 form-control" required/>
          </div>

          <div className="row justify-content-between">
            <input type="number" className="col-12 mb-3 mr-3 col-md-5 form-control" placeholder="Telefone(Opcional)"/>

            <select name="subject" className="col-12 mb-3 mr-3 col-md-5 form-control" id="" required>
              <option value="" selected disabled>Escolha o assunto</option>
            </select>
          </div>

          <div className="row">
            <textarea name="" className="form-control" id="" cols={30} rows={10} required>
            </textarea>
          </div>

          <div className="row mt-3 justify-content-center">
            <button type="submit" className='btn'>
              <img src={PaperPlane} alt="Paper plane simbol"/>
              Enviar
            </button>
          </div>
          

        </form>
      </div>

      <Footer />

    </div>
  );

}