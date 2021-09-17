export interface IImageStorage {
  push: (file: Express.Multer.File) => Promise<void>
}
