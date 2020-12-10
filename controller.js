const { users, orders, restaurants } = require('./data');

exports.restaurantController = {
    // getRestaurants(req, res) {
    //     console.log('All restaurants data requested');
    //     res.json(restaurants);
    // },
    getRestaurant(req, res) {
        res.json(restaurants); // TEMP
    },
    // addRestaurant(req, res) {
    //     const { body } = req;
    //     restaurants.push(body);
    //     console.log('New restaurant entity saved');
    //     res.json(restaurants);
    // },
    updateRestaurant(req, res) {
        res.json(restaurants); // TEMP
    },
    deleteRestaurant(req, res) {
        res.json(restaurants); // TEMP
    }
};

exports.userController = {
    getUsers(req, res) {
        res.json("user"); // TEMP
    },
    getUser(req, res) {
        res.json("user"); // TEMP
    },
    addUser(req, res) {
        res.json("user"); // TEMP
    },
    updateUser(req, res) {
        res.json("user"); // TEMP
    },
    deleteUser(req, res) {
        res.json("user"); // TEMP
    }
};

exports.orderController = {
    getOrders(req, res) {
        res.json("order"); // TEMP
    },
    getOrder(req, res) {
        res.json("order"); // TEMP
    },
    addOrder(req, res) {
        res.json("order"); // TEMP
    },
    updateOrder(req, res) {
        res.json("order"); // TEMP
    },
    deleteOrder(req, res) {
        res.json("order"); // TEMP
    }
};
