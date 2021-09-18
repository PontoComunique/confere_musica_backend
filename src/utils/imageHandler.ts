import { IImageStorage } from '../interfaces/ImageStorage'

export async function pushImage (file: Express.Multer.File, storage: IImageStorage): Promise<void> {
  await storage.push(file)
}

export async function deleteImage (key: string, storage: IImageStorage): Promise<void> {
  await storage.delete(key)
}
