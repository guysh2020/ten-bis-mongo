const express = require("express");
const logger = require("morgan");
const app = express();
const port = process.env.PORT || 3000;
const { orderRouter, userRouter } = require("./router");
const { restaurantRouter } = require("./routers/restaurants.router");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger("combined")); 

app.use('/api/restaurants', restaurantRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is broken!');
});

app.listen(port, () => console.log('Express server is running on port ', port));
