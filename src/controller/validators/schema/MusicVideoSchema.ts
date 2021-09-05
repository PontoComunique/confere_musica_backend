import * as yup from 'yup'

export const createMusicVideo = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  link: yup.string().required(),
  description: yup.string().required()
})
