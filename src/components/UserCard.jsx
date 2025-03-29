import { useNavigate } from 'react-router-dom';
import './UserCard.css'; // Import CSS file

const UserCard = ({ user, onDelete }) => {
  const navigate = useNavigate();
 
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.first_name} className="avatar" />
      <div className="user-info">
        <h3>{user.first_name} {user.last_name}</h3>
        <p>{user.email}</p>
      </div>
      <div className="btn-group">
        <button className="edit-btn" onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
        <button className="delete-btn" onClick={() => onDelete(user.id)}>Delete</button>
      </div>
    </div>
  );
};

export default UserCard;
