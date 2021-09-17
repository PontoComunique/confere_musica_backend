import multer from 'multer'
import crypto from 'crypto'

const imageMulter = multer.diskStorage({
  destination: function (_, __, cb) {
    cb(null, './tmp')
  },
  filename: function (_, file, cb) {
    const imageHash = crypto.randomBytes(16).toString('hex')
    cb(null, `${imageHash}${file.originalname}`)
  }
})

const myMulter = multer({ storage: imageMulter })

export const imageParser = myMulter.single('image')
