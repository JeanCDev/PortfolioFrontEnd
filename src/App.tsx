import './App.css';
import {FormEvent, useState} from 'react';
import api from './api';

/////////////////////////////////////////////
/// TESTING THE CONNECTION TO THE BACKEND ///
/////////////////////////////////////////////

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');

  async function handleSubmit(event: FormEvent){

    event.preventDefault();

    await api.post('login', {
      name,
      password,
      email,
      photo
    }).then((response =>{
      console.log(response.data);
    }));

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
        <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="text" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <button type="submit">Vai</button>
      </form>
    </div>
  );
}

export default App;
