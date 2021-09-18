import * as yup from 'yup'

export const CreatePublication = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  content: yup.string().required()
})

export const UpdatePublication = yup.object().shape({
  title: yup.string(),
  author: yup.string(),
  content: yup.string()
})
