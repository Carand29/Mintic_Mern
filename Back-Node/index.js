import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import router from './routes/routes.js';
import router2 from './routes/routes2.js';
import controllers from './controllers/main.js'

const app = express()

const PORT = 3001;

app.use(cors())
app.use(express.json())

app.get('/user/:id', controllers.getUserById);
app.post('/register', controllers.register);
app.post('/login', controllers.login);
app.use(express.urlencoded({extended:true}));
app.use('/products', router);
app.use('/cars', router2);




app.listen(PORT, ()=>{
    console.log(`SERVER FUNCIONANDO EN EL PUERTO ${PORT}`);
    db();
});

export default app;