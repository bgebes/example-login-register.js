import React, { useState } from 'react';
import { useFormik } from 'formik';
import registerValidationSchema from '../../helpers/registerValidation';

function RegisterForm({ usersState }) {
  const [users, setUsers] = usersState;
  const [processStatus, setProcessStatus] = useState({
    status: false,
    username: '',
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
      },
      onSubmit: (values) => {
        const user = users.find((user) => user.email === values.email);
        if (user) {
          alert('Böyle bir kullanıcı zaten var!');
          return;
        }

        setUsers([
          ...users,
          { name: values.name, email: values.email, password: values.password },
        ]);

        setProcessStatus({ status: true, username: values.name });
      },
      registerValidationSchema,
    });

  return (
    <form
      className="d-flex flex-column align-items-center w-100 mb-auto"
      onSubmit={handleSubmit}
    >
      {errors.name && touched.name && (
        <div className="text-danger">{errors.name}</div>
      )}
      <div className="input-group mb-3 w-50">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control"
          placeholder="İsminizi giriniz"
          aria-label="İsminizi giriniz"
          aria-describedby="basic-addon1"
        />
      </div>

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

      {errors.passwordConfirm && touched.passwordConfirm && (
        <div className="text-danger">{errors.passwordConfirm}</div>
      )}
      <div className="input-group mb-3 w-50">
        <span className="input-group-text" id="basic-addon1">
          $
        </span>
        <input
          type="password"
          name="passwordConfirm"
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control"
          placeholder="Parolanızı tekrardan giriniz"
          aria-label="Parolanızı tekrardan giriniz"
          aria-describedby="basic-addon1"
        />
      </div>

      <button type="submit" className="btn btn-success w-50">
        Kayıt Ol
      </button>

      {processStatus.status && (
        <div
          className="alert alert-success mt-3 p-2 w-50 text-center"
          role="alert"
        >
          {processStatus.username}, başarıyla kayıt oldunuz!
        </div>
      )}
    </form>
  );
}

export default RegisterForm;
