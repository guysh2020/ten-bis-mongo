const { Router } = require('express');
const { restaurantDbController } = require('../controllers/restaurant.ctrl');

const restaurantRouter = new Router();

restaurantRouter.get('/', restaurantDbController.getRestaurants);           // localhost:3000/api/restaurants
restaurantRouter.get('/:id', restaurantDbController.getRestaurant);         // localhost:3000/api/restaurants/5
restaurantRouter.post('/', restaurantDbController.addRestaurant);           // localhost:3000/api/restaurants (with restaurant object)
restaurantRouter.put('/:id', restaurantDbController.updateRestaurant);      // localhost:3000/api/restaurants/38 (with restaurant object)
restaurantRouter.delete('/:id', restaurantDbController.deleteRestaurant);   // localhost:3000/api/restaurants/43

module.exports = { restaurantRouter};
