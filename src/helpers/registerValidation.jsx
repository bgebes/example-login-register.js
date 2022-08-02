import * as yup from 'yup';

const registerValidationSchema = yup.object().shape({
  name: yup.string().required('* Bu alan zorunludur.'),
  email: yup
    .string()
    .email('Lütfen e-mail adresinizi doğru bir biçimde giriniz.')
    .required('* Bu alan zorunludur.'),
  password: yup
    .string()
    .min(5, 'En az 5 karakter girebilirsiniz.')
    .max(8, 'En fazla 8 karakter girebilirsiniz.')
    .required('* Bu alan zorunludur.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Parolalar eşleşmedi.')
    .required('* Bu alan zorunludur.'),
});

export default registerValidationSchema;
