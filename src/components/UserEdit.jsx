import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser, getUsers } from '../utils/api';
import './UserEdit.css';  // Import CSS file

const UserEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: '', last_name: '', email: '' });

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUsers();
      const selectedUser = data.data.find(u => u.id === parseInt(id));
      if (selectedUser) {
        setUser(selectedUser);
      }
    };
    fetchUser();
  }, [id]);

  const handleUpdate = async () => {
    await updateUser(id, user);
    navigate('/users');
  };

  return (
    <div className="edit-container">
      <h2 className="edit-title">Edit User</h2>
      <div className="form-group">
        <label>First Name</label>
        <input 
          type="text" 
          value={user.first_name} 
          onChange={(e) => setUser({ ...user, first_name: e.target.value })}
          placeholder="Enter first name"
        />
      </div>
      
      <div className="form-group">
        <label>Last Name</label>
        <input 
          type="text" 
          value={user.last_name} 
          onChange={(e) => setUser({ ...user, last_name: e.target.value })}
          placeholder="Enter last name"
        />
      </div>
      
      <div className="form-group">
        <label>Email</label>
        <input 
          type="email" 
          value={user.email} 
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter email"
        />
      </div>

      <div className="btn-group">
        <button className="update-btn" onClick={handleUpdate}>Update</button>
        <button className="cancel-btn" onClick={() => navigate('/users')}>Cancel</button>
      </div>
    </div>
  );
};

export default UserEdit;
