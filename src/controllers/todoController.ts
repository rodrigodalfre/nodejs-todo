import {Request, Response} from 'express'
import {Sequelize} from 'sequelize'
import {Todo} from '../models/Todo'

export const ping = async (req:Request, res:Response) => {
   res.json({pong:true})
}

export const list = async (req:Request, res:Response) => {
   const list = await Todo.findAll();
   res.json({list})
}

export const create = async (req:Request, res:Response) => {
   if(req.body.title) {

      let newTodo = await Todo.create({
         title: req.body.title,
         done: req.body.done ? true : false
      })
      res.status(201).json({item: newTodo})
      return
   }

   res.json({error: 'Dados não enviados'})
}

export const update = async (req:Request, res:Response) => {
   const id = req.params.id as string
   
   let todo = await Todo.findByPk(id);
   if(todo){

      if(req.body.title) todo.title = req.body.title
      todo.done = req.body.done ? true : false

      await todo.save();
      return res.json({todo})
      
   } else {
      return res.json({error: 'Id não encontrado'})
   }
}

export const remove = async (req:Request, res:Response) => {
   const id = req.params.id as string
   let todo = await Todo.findByPk(id);
   if(todo) {
      await todo.destroy();
   }
   return res.json({remove: true})
}