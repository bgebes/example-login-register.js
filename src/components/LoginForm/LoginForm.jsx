import React, { useState } from 'react';
import { useFormik } from 'formik';
import logInValidationSchema from '../../helpers/logInValidation';

function LoginForm({ usersState }) {
  const [users, setUsers] = usersState;
  const [processStatus, setProcessStatus] = useState({
    status: false,
    username: '',
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: (values) => {
        const user = users.find((user) => user.email === values.email);
        if (!user) {
          alert('Böyle bir kullanıcı bulunamadı!');
          return;
        }

        if (String(user.password) === values.password) {
          setProcessStatus({ status: true, username: user.name });
        }
      },
      logInValidationSchema,
    });

  return (
    <form
      className="d-flex flex-column align-items-center w-100 mb-auto"
      onSubmit={handleSubmit}
    >
      {errors.email && touched.email && (
        <div className="text-danger">{errors.email}</div>
      )}
      <div className="input-group mb-3 w-50">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control"
          placeholder="E-mail adresinizi giriniz"
          aria-label="E-mail adresinizi giriniz"
          aria-describedby="basic-addon1"
        />
      </div>

      {errors.password && touched.password && (
        <div className="text-danger">{errors.password}</div>
      )}
      <div className="input-group mb-3 w-50">
        <span className="input-group-text" id="basic-addon1">
          $
        </span>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control"
          placeholder="Parolanızı giriniz"
          aria-label="Parolanızı giriniz"
          aria-describedby="basic-addon1"
        />
      </div>

      <button type="submit" className="btn btn-success w-50">
        Giriş Yap
      </button>

      {processStatus.status && (
        <div
          className="alert alert-success mt-3 p-2 w-50 text-center"
          role="alert"
        >
          {processStatus.username}, başarıyla giriş yaptınız!
        </div>
      )}
    </form>
  );
}

export default LoginForm;
