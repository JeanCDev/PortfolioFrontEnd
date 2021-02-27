import LoadingIcon from '../../images/loading-icon.gif';
import './Loading.css';

export default function Loading(){

  return (
    <div id="loading">
      <img src={LoadingIcon} alt="Carregando"/>
    </div>
  )

}