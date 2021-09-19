import { IImageStorage } from '../interfaces/ImageStorage'
import aws from 'aws-sdk'
import fs from 'fs'

export class AmazonStorage implements IImageStorage {
  s3: aws.S3

  constructor () {
    this.s3 = new aws.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    })
  }

  async push (file: Express.Multer.File): Promise<void> {
    const fileContent = fs.readFileSync(`${file.path}`)

    const s3Params = {
      Bucket: process.env.BUCKET_NAME ?? '',
      Key: file.filename,
      Body: fileContent
    }

    await this.s3.upload(s3Params, function (err, data) {
      if (err) {
        throw err
      }
    })
  }

  async delete (Key: string): Promise<any> {
    const s3Params = {
      Bucket: process.env.BUCKET_NAME ?? '',
      Key
    }

    return this.s3.deleteObject(s3Params, function (err, data) {
      if (err) {
        throw err
      }
    })
  }
}
