import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/users'
import express from 'express'
const router = express.Router()

// CRUD Routes /users
router.get('/', getUsers) // /users
router.get('/:userId', getUser) // /users/:userId
router.post('/', createUser) // /users
router.put('/:userId', updateUser) // /users/:userId
router.delete('/:userId', deleteUser) // /users/:userId

module.exports = router
