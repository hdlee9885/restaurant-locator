require("dotenv").config();

const express = require('express');
const morgan = require('morgan');
const db = require('./db');
const cors = require('cors');

// an instance of express
const app = express();

app.use(cors())
// express middleware
app.use(express.json());
// app.use(morgan("dev"));
//  => {
//     next();
// })

// get all restaurants
app.get('/api/restaurants', async (req, res) => {
    try {
        const results = await db.query("select * from restaurants");
        console.log(results);
        res.json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
    
});

// get a specific restaurant
app.get('/api/restaurants/:id', async (req, res) => {
    try {
        const id = req.params.id;
        // parametrized query to prevent sql injection attacks
        const restaurant = await db.query(
            "select * from restaurants where id = $1",
            [id]
        );
        res.json({
            status: "success",
            results: restaurant.rows.length,
            data: {
                restaurant: restaurant.rows[0],
            },
        });
    } catch (err) {
        res.status(400).send(err);
    }
})

// create a restaurant
app.post('/api/restaurants', async (req, res) => {
    console.log(req.body);
    try {
        const results = await db.query(
            "INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *",
            [req.body.name, req.body.location, req.body.price_range]
        );
        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            },
        })
    } catch (err) {
        res.status(401).send(err);
    }
})

// update a restaurant
app.put('/api/restaurants/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        const results = await db.query(
            "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
            [req.body.name, req.body.location, req.body.price_range, req.params.id]
        );
        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            },
        })
    } catch (err) {
        res.status(401).send(err);
    }
})

// delete a restaurant
app.delete('/api/restaurants/:id', async (req, res) => {
    console.log(req);
    try {
        const results = await db.query(
            "DELETE FROM restaurants where id = $1",
            [req.params.id]
        );
        res.status(201).json({
            status: "success",
        })
    } catch (err) {
        res.status(401).send(err);
    }
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is up, listening on port ${port}`);
});