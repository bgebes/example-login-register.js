import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import './App.scss';
import 'bootstrap';

function App() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const apiHandle = await axios('https://jsonplaceholder.typicode.com/users');
    const data = apiHandle.data;

    setUsers(
      data
        .map((user, index) => {
          return { ...user, password: user.id * 1252979 };
        })
        .slice(0, 7)
    );
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home usersState={[users, setUsers]} />} />
      <Route path="/login" element={<Login usersState={[users, setUsers]} />} />
      <Route
        path="/register"
        element={<Register usersState={[users, setUsers]} />}
      />
      <Route path="*" element={<div>404 not found</div>} />
    </Routes>
  );
}

export default App;
