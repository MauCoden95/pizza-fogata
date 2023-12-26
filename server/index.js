const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');




//Middlewares
app.use(cors());
app.use(express.json());




/*####################
API REST
####################*/

//Obtener todos los productos
app.get('/products', async (req,res) => {
    try {
        const allProducts = await pool.query("SELECT * FROM products");
        res.status(200).send(allProducts.rows);
    } catch (error) {
        console.error(error.message);
    }
});



//Obtener todos los productos del tipo pizza
app.get('/pizzas', async (req,res) => {
    try {
        const pizzas = await pool.query("SELECT * FROM products WHERE type = 'Pizza'");
        res.status(200).send(pizzas.rows);
    } catch (error) {
        console.log(error.message);
    }
});



//Obtener todos los productos del tipo minutas
app.get('/minutas', async (req,res) => {
    try {
        const pizzas = await pool.query("SELECT * FROM products WHERE type = 'Minutas'");
        res.status(200).send(pizzas.rows);
    } catch (error) {
        console.log(error.message);
    }
});



//Obtener todos los productos del tipo empanadas
app.get('/empanadas', async (req,res) => {
    try {
        const pizzas = await pool.query("SELECT * FROM products WHERE type = 'Empanadas'");
        res.status(200).send(pizzas.rows);
    } catch (error) {
        console.log(error.message);
    }
});




//Obtener todos los productos del tipo bebidas
app.get('/bebidas', async (req,res) => {
    try {
        const pizzas = await pool.query("SELECT * FROM products WHERE type = 'Bebidas'");
        res.status(200).send(pizzas.rows);
    } catch (error) {
        console.log(error.message);
    }
});














//Server
app.listen(5000, () => {
    console.log("Server has stated on port 5000");
});