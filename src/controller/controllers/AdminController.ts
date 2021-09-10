import type { RequestHandler } from 'express'
import { getAdmin } from '../../model/AdminModel'
import View from '../../view/View'
import generateToken from '../auth/generateToken'

interface Controller {
  Login: RequestHandler
}

const AdminController: Controller = {
  async Login (req, res) {
    const { username, password } = req.body

    try {
      const admin = await getAdmin(username, password)
      if (admin.length < 1) { View.Unauthorized(res, 'Invalid username or password') }

      View.Success(res, 'Successful login!', { token: generateToken({ id: admin[0].id }) })
    } catch (error) {
      View.InternalServerError(res)
    }
  }
}

export default AdminController
