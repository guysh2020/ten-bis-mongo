const { Router } = require('express');
const { orderController, userController } = require('./controller');

const userRouter = new Router();
const orderRouter = new Router();

userRouter.get('/', userController.getUsers);
userRouter.get('/:id', userController.getUser);
userRouter.post('/', userController.addUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

orderRouter.get('/', orderController.getOrders);
orderRouter.get('/:id', orderController.getOrder);
orderRouter.post('/', orderController.addOrder);
orderRouter.put('/:id', orderController.updateOrder);
orderRouter.delete('/:id', orderController.deleteOrder);

module.exports = { userRouter, orderRouter };
