const express = require('express');
const pizzaModel = require('../models/pizzaModel');

const router = express.Router();

router.get('/getpizzas', async(req, res) => {
    try {
        
        const pizzas = await pizzaModel.find({});
        res.send(pizzas);

    } catch (error) {
        return res.status(400).json({ msg: error });
    }
})

module.exports = router;