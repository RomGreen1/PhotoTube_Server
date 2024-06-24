import userController from '../controllers/userController.js'
import express from 'express'

const router = express.Router();

router.get('/isExist', userController.isExist)
router.post('/', userController.createUser)
router.post('/login', userController.login)
router.get('/:id', userController.isLoggedIn, userController.getUser)
router.get('/info/:id', userController.isLoggedIn, userController.getInfoUser)
router.patch('/:id', userController.isLoggedIn, userController.updateUser)
router.delete('/:id', userController.isLoggedIn, userController.deleteUser)

export default router