import express from 'express';

import { UserController } from '../controllers/UserController';

const userController = new UserController();

const userRoutes = express.Router();

userRoutes.get('/',userController.show);
userRoutes.get('/:id',userController.showById);
userRoutes.post('/:id',userController.create);
userRoutes.put('/:id',userController.update);
userRoutes.delete('/:id',userController.delete);

export default userRoutes;