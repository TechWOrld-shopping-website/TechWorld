import express from  'express'

import { protect, admin } from '../middleware/authMiddleware.js'

const router=express.Router()
import { authUser, registerUser, getUserProfile, updateUserProfile, getUsers, deleteUser } from '../controllers/userController.js'



router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/').post(registerUser).get(protect, admin, getUsers)
router.route('/:id').delete(protect, admin, deleteUser)


export default router