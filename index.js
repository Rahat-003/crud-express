import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/user.route.js';

const app = express();
const PORT = 5000;


app.use(bodyParser.json());


// Basic CRUD operation in http://localhost:5000/user/

app.use('/user', usersRoutes);

app.get('/', (req,res)=>{
    res.send(`<h1 style = "color: blue">Hello world</h1>`);
})


app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
})