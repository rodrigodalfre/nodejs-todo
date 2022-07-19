import {Router} from 'express'
//Routes
import * as TodoController from '../controllers/todoController'

const router = Router();

router.get('/ping', TodoController.ping);

router.get('/todo', TodoController.list)
router.post('/create', TodoController.create);
router.put('/edit/:id', TodoController.update);
router.delete('/delete/:id', TodoController.remove);

export default router