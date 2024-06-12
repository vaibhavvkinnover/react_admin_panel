import React, { useState } from 'react';

import '../styles/Users.css';


const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Vaibhav Krishna', email: 'vaibhavkrishna2901@gmail.com' },
    { id: 2, name: 'Manisha Maity', email: 'manisha.maity@gmail.com' }
  ]);

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="users">
      <h2>Users</h2>
      {users.map(user => (
        <div className="user-card" key={user.id}>
          <div className="user-details">
            <h3>{user.name}</h3>
            <div className="user-actions">
              <button className="edit-button">Edit</button>
              <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
          </div>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
