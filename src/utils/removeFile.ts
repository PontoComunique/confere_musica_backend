import fs from 'fs'

function removeFile (file: string): void {
  fs.unlinkSync(file)
}

export default removeFile
