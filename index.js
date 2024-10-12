const express = require('express');
const urlRoute = require('./routes/url');
const app = express();
const {connectToMongoDB} = require('./connect');

const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/short-url').then(() => console.log('MongoDB connected'));
app.use(express.json());
app.use("/url",urlRoute);
app.listen(PORT, ()=> console.log(`Server Started at PORT:`,{PORT}));