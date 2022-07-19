import {Request, Response} from 'express'
import {Sequelize} from 'sequelize'
import {Todo} from '../models/Todo'

export const ping = async (req:Request, res:Response) => {
   res.json({pong:true})
}

export const list = async (req:Request, res:Response) => {

   res.json({})
}

export const create = async (req:Request, res:Response) => {

   res.json({})
}

export const update = async (req:Request, res:Response) => {

   res.json({})
}

export const remove = async (req:Request, res:Response) => {

   res.json({remove: true})
}