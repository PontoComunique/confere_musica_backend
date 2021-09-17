import { IImageStorage } from '../interfaces/ImageStorage'

async function pushImage (file: Express.Multer.File, storage: IImageStorage): Promise<void> {
  await storage.push(file)
}

export default pushImage
