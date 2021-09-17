import fs from 'fs'

function removeFile (file: Express.Multer.File): void {
  fs.unlinkSync(file.path)
}

export default removeFile
