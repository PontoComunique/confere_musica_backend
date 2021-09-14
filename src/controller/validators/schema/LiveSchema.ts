import * as yup from 'yup'

export const updateLive = yup.object().shape({
  title: yup.string().required(),
  link: yup.string().required(),
  lecturer1: yup.string().nullable(),
  lecturer1Subtitle: yup.string().nullable(),
  lecturer2: yup.string().nullable(),
  lecturer2Subtitle: yup.string().nullable(),
  lecturer3: yup.string().nullable(),
  lecturer3Subtitle: yup.string().nullable(),
  mediator1: yup.string().nullable(),
  mediator2: yup.string().nullable()
})
