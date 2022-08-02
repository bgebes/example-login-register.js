import React from 'react';

function UserList({ users }) {
  return (
    <ol className="list-group list-group-numbered small">
      {users.map((user, index) => {
        return (
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            key={index}
          >
            <div className="me-auto text-start">
              <div className="fw-bold">{user.name}</div>
              {user.email}
            </div>
            <span className="badge bg-success rounded-pill">
              Password: {user.password}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

export default UserList;
