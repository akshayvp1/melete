import express from 'express'
import { container } from 'tsyringe'
import AdminAuthController from '../controllers/adminAuthController'
const admin = express.Router()

const adminAuthController = container.resolve(AdminAuthController)

admin.post('/verify-login',adminAuthController.signIn)

export default admin