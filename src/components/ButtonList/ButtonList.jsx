import React from 'react';
import { Link } from 'react-router-dom';

function ButtonList() {
  return (
    <div className="d-flex justify-content-end mt-2 me-1">
      <Link className="btn btn-sm btn-outline-success mx-1" to="/">
        Kayıtlar
      </Link>
      <Link className="btn btn-sm btn-outline-success mx-1" to="/login">
        Giriş Yap
      </Link>
      <Link className="btn btn-sm btn-outline-success mx-1" to="/register">
        Kayıt Ol
      </Link>
    </div>
  );
}

export default ButtonList;
