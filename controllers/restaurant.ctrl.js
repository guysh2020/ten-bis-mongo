const Restaurant = require('../models/restaurant');

exports.restaurantDbController = {
    getRestaurants(req, res) {
        Restaurant.find({}) // $or: [{ id: 8}, { id: 3} ]
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from db: ${err}`));
    },
    getRestaurant(req, res) {
        Restaurant.findOne({}) 
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting restaurant from db: ${err}`));
    },
    addRestaurant(req, res) {
        const newRestaurant = new Restaurant({
            "id": 14,
            "name": "Pizza",
            "location": [{ "lng": 123.123, "lat": 16.16 }],
            "stars": 5
        });

        const result = newRestaurant.save();

        if (result) { 
            res.json(result) 
        } else {
            res.status(404).send("Error saving a restaurant");
        } 
    },
    updateRestaurant(req, res) {
        Restaurant.updateOne({ id: 13 }, { id: 15 } ) 
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error updating restaurant from db: ${err}`));
    },
    deleteRestaurant(req, res) {
        Restaurant.deleteOne({ id: 11 } ) 
        // Restaurant.deleteMany({ id: { $in: [1, 3, 5, 7, 9] } } ) 
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error deleting restaurant from db: ${err}`));
    }
} 
