import './styles/AdminCard.css';

type AdminCardProps = {
  title: string;
  information: number;
  icon?: string;
}

export default function AdminCard({title, information, icon}:AdminCardProps){

  return (
    <div className="admin-card">
      <h2>{title}</h2>
      <div>
        <h3>{information}</h3>
        <i></i>
      </div>
    </div>
  );

}