import * as yup from 'yup'

export const CreateVideo = yup.object().shape({
  title: yup.string().required(),
  link: yup.string().required(),
  description: yup.string().required()
})
