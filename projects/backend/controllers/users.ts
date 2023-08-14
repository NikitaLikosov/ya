import User from '../models/user'
import { Request, Response, NextFunction } from 'express'

// CRUD Controllers

//get all users
export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  User.findAll()
    .then((users) => {
      res.status(200).json({ users: users })
    })
    .catch((err) => console.log(err))
}

//get user by id
export const getUser = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId
  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found!' })
      }
      res.status(200).json({ user: user })
    })
    .catch((err) => console.log(err))
}

//create user
export const createUser = (req: Request, res: Response, next: NextFunction) => {
  const name = req.body.name
  const email = req.body.email
  User.create({
    name: name,
    email: email,
  })
    .then((result) => {
      console.log('Created User')
      res.status(201).json({
        message: 'User created successfully!',
        user: result,
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

//update user
export const updateUser = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId
  const updatedName = req.body.name
  const updatedEmail = req.body.email
  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found!' })
      }
      user.name = updatedName
      user.email = updatedEmail
      user.save()
      return res.status(200)
    })
    .then((result) => {
      res.status(200).json({ message: 'User updated!', user: result })
    })
    .catch((err) => console.log(err))
}

//delete user
export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId
  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found!' })
      }
      User.destroy({
        where: {
          id: userId,
        },
      })
      return res.status(200)
    })
    .then((result) => {
      res.status(200).json({ message: 'User deleted!' })
    })
    .catch((err) => console.log(err))
}
