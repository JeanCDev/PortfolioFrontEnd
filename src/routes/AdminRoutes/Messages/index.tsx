import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../api';
import AdminNavbar from '../../../components/AdminNavbar';
import Loading from '../../../components/Loading';
import UserModal from '../../../components/UserModal';

interface MessageInfo{
  messageId: string,
  clientName: string,
  clientEmail: string,
  messageSubject: string,
  message: string,
  clientPhone: string
}

export default function Messages(){

  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<MessageInfo[]>([]);
  let token = localStorage.getItem('auth-token');

  useEffect(() => {
    api.get("messages", {
      headers: {
        "auth-token": token
      }
    }).then((response)=>{
      setMessages(response.data);
      setLoading(false);
    }).catch(()=>{
      if(token) {
        localStorage.removeItem('auth-token');
      }

      history.push('/admin/login');
    });
  }, [token, history]);

  if(loading){
    return <Loading />
  } 

  return (
    <div id="admin-messages">
      <AdminNavbar />

      <div className="container mt-4">
        <table className="table table-hover table-striped"> 
          <thead className="table-dark">
            <tr className='text-center'>
              <th>id</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Assunto</th>
              <th>Mensagem</th>
              <th>Excluir</th>
            </tr>
          </thead>

          <tbody>

            {messages.map(message =>{
              return(
                <tr key={message.messageId} className='text-center'>
                  <td>{message.messageId}</td>
                  <td>{message.clientName}</td>
                  <td>{message.clientEmail}</td>
                  <td>{message.clientPhone}</td>
                  <td>{message.messageSubject}</td>
                  <td>{message.message}</td>
                  <td>
                    <button className="ms-1 btn btn-danger" onClick={
                      ()=>{
                        let result = window.confirm('Deseja realmente excluir a mensagem');

                        if(result){
                          api.delete(`/messages/${message.messageId}`,{headers: {
                            'auth-token':token
                          }}).then(response =>{
                            if(response.data === 'Message not found'){
                              alert('Mensagem não encontrado');
                              return;
                            }
                            alert('Mensagem excluída com sucesso');
                            window.location.reload();
                          }).catch(()=>{
                            console.log('Ocorreu um erro');
                          });
                        }
                      }
                    }>X</button>
                  </td>
                </tr>
            )})
          }
          </tbody>
        </table>
      </div>
      
      <UserModal />

    </div>
  );

}