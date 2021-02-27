import {FormEvent, useState} from 'react';
import {useHistory} from 'react-router-dom';

import api from '../../api';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import PaperPlane from '../../images/PaperPlane.svg';

import './contact.css';

export default function Contact(){

  let history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [subject, setSubject] = useState('1');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent) {

    event.preventDefault();

    let params = {
      user_name: name,
      user_email: email,
      user_phone: number,
      message_text: message,
      message_subject: subject
    }

    let nullable = (param: any)=> param === '' || param === null || param === undefined || param === '1' ? true : false;

    if(nullable(name) || nullable(email) 
    || nullable(subject) || nullable(message)){
        alert('Falta algum campo a ser preenchido');
    } else {
      await api.post('messages', params).then(response=>{
        alert('Obrigado por entrar em contato. Responderemos em breve!');
        history.push('/');
      }).catch(()=>alert('Ops! Ocorreu um erro'));
    }

  }

  return (
    <div id="contact">
      <Header />

      <div className="container">
        <h1 className="text-center">Deixe sua mensagem</h1>

        <form onSubmit={handleSubmit} className="container-fluid mt-5">

          <div className="row justify-content-between">
            <div className="col-12 mb-3 col-lg-5">
              <input 
                type="text" 
                placeholder="Nome" 
                className=" form-control" 
                name="name"
                onChange={e =>setName(e.target.value)}
                value={name}
                required/>
            </div>
            <div className="col-12 mb-3 col-lg-5">
              <input 
                type="email" 
                placeholder="Email" 
                className="form-control" 
                onChange={e =>setEmail(e.target.value)}
                value={email}
                required/>
            </div>
            
          </div>

          <div className="row justify-content-between">
            <div className="col-12 mb-3 mr-3 col-lg-5">
              <input 
                type="number" 
                className="form-control" 
                onChange={e =>setNumber(e.target.value)}
                value={number}
                placeholder="Telefone(Opcional)"/>
            </div>

            <div className="col-12 mb-3 mr-3 col-lg-5">
              <select 
                name="subject" 
                className="form-control" 
                onChange={e =>setSubject(e.target.value)}
                value={subject}
                required>
                  <option value="1"  disabled>Escolha o assunto</option>
                  <option value="Orçamento">Orçamento</option>
                  <option value="Site Responsivo">Deixar seu site responsivo</option>
                  <option value="Dúvidas">Dúvidas</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <textarea 
                name="message" 
                className="form-control" 
                id="" cols={30} rows={10} 
                onChange={e =>setMessage(e.target.value)}
                value={message}
                required>
              </textarea>
            </div>
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