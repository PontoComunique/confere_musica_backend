import * as yup from 'yup'

export const CreatePodcast = yup.object().shape({
  title: yup.string().required(),
  link: yup.string().required()
})
