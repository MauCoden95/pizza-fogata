const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const session = require('express-session');



//Middlewares
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true, 
  };
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: 'tu-clave-secreta',
  resave: false,
  saveUninitialized: true,
}));




/*####################
API REST
####################*/





//PRODUCTOS
//Obtener todos los productos
app.get('/products', async (req, res) => {
    try {
        const allProducts = await pool.query("SELECT * FROM products");
        res.status(200).send(allProducts.rows);
    } catch (error) {
        console.error(error.message);
    }
});



//Obtener todos los productos del tipo pizza
app.get('/pizzas', async (req, res) => {
    try {
        const pizzas = await pool.query("SELECT * FROM products WHERE type = 'Pizza'");
        res.status(200).send(pizzas.rows);
    } catch (error) {
        console.log(error.message);
    }
});



//Obtener todos los productos del tipo minutas
app.get('/minutas', async (req, res) => {
    try {
        const pizzas = await pool.query("SELECT * FROM products WHERE type = 'Minutas'");
        res.status(200).send(pizzas.rows);
    } catch (error) {
        console.log(error.message);
    }
});



//Obtener todos los productos del tipo empanadas
app.get('/empanadas', async (req, res) => {
    try {
        const pizzas = await pool.query("SELECT * FROM products WHERE type = 'Empanadas'");
        res.status(200).send(pizzas.rows);
    } catch (error) {
        console.log(error.message);
    }
});




//Obtener todos los productos del tipo bebidas
app.get('/bebidas', async (req, res) => {
    try {
        const pizzas = await pool.query("SELECT * FROM products WHERE type = 'Bebidas'");
        res.status(200).send(pizzas.rows);
    } catch (error) {
        console.log(error.message);
    }
});



//Obtener todos los productos del tipo postres
app.get('/postres', async (req, res) => {
    try {
        const postres = await pool.query("SELECT * FROM products WHERE type = 'Postres'");
        res.status(200).send(postres.rows);
    } catch (error) {
        console.log(error.message);
    }
});









//USUARIOS
//Registro de usuarios
app.post('/register', async (req,res) => {
    const data = req.body;

    
    const userExists = await pool.query(`SELECT * FROM users WHERE email = '${data.email}'`);

    if (userExists.rows.length > 0) {
        res.status(500).send("El mail ya existe");
    }else{
        const passwordHash = await bcrypt.hash(data.password, 10);

        await pool.query(`INSERT INTO users (name, address, dni, phone, password, email)
        VALUES ('${data.name}', '${data.address}', ${data.dni}, ${data.phone}, '${passwordHash}', '${data.email}');
        `);

        res.status(200).send("Nuevo usuario creado con exito!!!");

    }

    
});






//Login
app.post('/login', async (req,res) => {
    const data = req.body;

    const userExists = await pool.query(`SELECT * FROM users WHERE email =  '${data.email}'`);

    console.log(userExists);

    if (userExists.rows.length == 0) {
        res.json("Email incorrecto");
    }else{
        const passwordVerify = await bcrypt.compare(data.password,userExists.rows[0].password);

        if (passwordVerify) {
            //const user = userExists.rows;
            req.session.userData = userExists.rows;
            res.json(req.session.userData);
        }else{
            res.status(500).send("Error");
        }
    }


});





//Actualizar datos del usuario
app.put('/update/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;  
    
    

    const userSearch = await pool.query(`SELECT id FROM users WHERE id = ${id}`);

    if (userSearch.rows.length > 0) {

        const userId = userSearch.rows[0].id;
        const passwordHash = await bcrypt.hash(data.password, 10);

        const updateUser = await pool.query(`UPDATE users SET address = '${data.address}', phone = ${data.phone}, password = '${passwordHash}' WHERE id = ${userId};`);

        
        if (updateUser) {
            res.status(200).send("Usuario actualizado con exito!!!");         
        }else{
            res.status(500).send("Usuario no actualizado");     
        }
        
    }else{
        res.status(404).send("Usuario no encontrado");     
    }

   
  
  });



//Eliminar usuario
app.delete('/delete_user/:id', async (req,res) => {
    const id = req.params.id;

    try {
        const deleteUser = await pool.query(`DELETE FROM users WHERE id = ${id}`);
        if (deleteUser) {
            res.status(200).send("Usuario eliminado con exito!!!");
        }else{
            res.status(500).send("Error");    
        }
    } catch (error) {
        res.status(500).send("Error");
    }
})














//Server
app.listen(5000, () => {
    console.log("Server has stated on port 5000");
});