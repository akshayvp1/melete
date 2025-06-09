import express from 'express'
import { container } from 'tsyringe'
import AdminAuthController from '../controllers/adminAuthController'
import { adminAuthenticate } from '../middlewares/adminAuth'
const admin = express.Router()

const adminAuthController = container.resolve(AdminAuthController)

admin.post('/verify-login',adminAuthController.signIn)
admin.post('/add-counsellor',adminAuthenticate,adminAuthController.addCounsellor)
admin.get('/get-counsellors',adminAuthenticate,adminAuthController.getCounsellors)
admin.patch('/block-counsellor/:userId',adminAuthenticate,adminAuthController.blockCounsellors)
admin.patch('/unblock-counsellor/:userId',adminAuthenticate,adminAuthController.unBlockCounsellors)
admin.put('/update-counsellor/:id',adminAuthenticate,adminAuthController.updateCounsellor)

export default admin