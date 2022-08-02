import React from 'react';
import HomeImage from '../../assets/images/imgHome.jpg';
import ButtonList from '../../components/ButtonList/ButtonList';
import UserList from '../../components/UserList/UserList';

function Home({ usersState }) {
  const [users, setUsers] = usersState;

  return (
    <div className="row w-75 border-secondary border rounded shadow-lg">
      <div className="col-6 p-0">
        <img
          className="w-100 rounded-start border-end"
          src={HomeImage}
          alt="Home Image"
        />
      </div>
      <div className="col-6 p-0 rounded-end bg-white">
        <div className="d-flex flex-column justify-content-between h-100">
          <ButtonList />
          <div className="text-success text-center fs-4 fw-semibold">
            Kayıtlar
          </div>

          <UserList users={users} />
        </div>
      </div>
    </div>
  );
}

export default Home;
