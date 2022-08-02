import React from 'react';
import LoginImage from '../../assets/images/imgLogin.jpg';
import ButtonList from '../../components/ButtonList/ButtonList';
import LoginForm from '../../components/LoginForm/LoginForm';

function Login({ usersState }) {
  const [users, setUsers] = usersState;

  return (
    <div className="row w-75 border-secondary border rounded shadow-lg">
      <div className="col-6 p-0">
        <img
          className="w-100 rounded-start border-end"
          src={LoginImage}
          alt="Home Image"
        />
      </div>
      <div className="col-6 p-0 rounded-end bg-white">
        <div className="d-flex flex-column justify-content-center h-100">
          <div className="mb-auto">
            <ButtonList />
          </div>
          <div className="text-success text-center fs-4 fw-semibold mb-5">
            Giriş Yap
          </div>
          <LoginForm usersState={[users, setUsers]} />
        </div>
      </div>
    </div>
  );
}

export default Login;
