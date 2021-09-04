import * as yup from 'yup'

export const CreatePublication = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  content: yup.string().required()
})
