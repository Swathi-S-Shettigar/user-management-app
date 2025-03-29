import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import UserCard from './UserCard';
import Pagination from './Pagination';
import './UserList.css'; // Import the CSS file

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers(page);
      setUsers(data.data);
    };
    fetchData();
  }, [page]);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="userlist-container">
      <h2 className="title">User List</h2>
      <div className="user-grid">
        {users.map(user => (
          <UserCard key={user.id} user={user} onDelete={handleDelete} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default UserList;
