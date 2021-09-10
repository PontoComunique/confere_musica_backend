import * as yup from 'yup'

export const Login = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
})
